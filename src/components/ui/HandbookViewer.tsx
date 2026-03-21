"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import panzoom, { PanZoom } from "panzoom";

interface HandbookViewerProps {
  svgPath: string;
}

export default function HandbookViewer({ svgPath }: HandbookViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panzoomRef = useRef<PanZoom | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReset = useCallback(() => {
    if (panzoomRef.current) {
      panzoomRef.current.moveTo(0, 0);
      panzoomRef.current.zoomAbs(0, 0, 1);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const controller = new AbortController();

    setReady(false);
    setError(null);
    // Intentional DOM manipulation: fetches raw SVG and injects it for panzoom.
    // Not a hydration concern since container starts empty and is populated client-side only.
    container.innerHTML = "";

    fetch(svgPath, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load SVG (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const svg = doc.querySelector("svg");
        if (!svg) throw new Error("Invalid SVG");

        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "auto");
        svg.style.display = "block";

        container.innerHTML = "";
        container.appendChild(document.importNode(svg, true));

        // Underline link text inside the SVG to match Content-Library styling
        const anchors = container.querySelectorAll("a");
        anchors.forEach((a) => {
          a.querySelectorAll("text").forEach((t) => {
            t.setAttribute("text-decoration", "underline");
          });
          (a as HTMLElement).style.cursor = "pointer";
        });

        setReady(true);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [svgPath]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !ready) return;

    const instance = panzoom(container, {
      smoothScroll: false,
      zoomSpeed: 0.065,
      beforeWheel: (e) => {
        // panzoom: return true = prevent zoom, false = allow zoom
        return !e.shiftKey;
      },
    });

    panzoomRef.current = instance;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleReset();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      instance.dispose();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleReset, ready]);

  return (
    <div className="relative">
      <div className="overflow-hidden border border-neutral-800 rounded-lg bg-neutral-950">
        {!ready && !error && (
          <div className="flex items-center justify-center h-64 text-neutral-400">
            Loading...
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center h-64 text-red-400">
            {error}
          </div>
        )}
        <div ref={containerRef} />
      </div>
      <div className="mt-4 flex flex-col items-center gap-3">
        <p className="text-sm text-neutral-400">
          Click and hold to pan. SHIFT + wheel to zoom. ESC to reset.
        </p>
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded transition-colors"
        >
          Reset View
        </button>
      </div>
    </div>
  );
}
