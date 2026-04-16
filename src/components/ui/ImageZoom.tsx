"use client";

import { useEffect, useState } from "react";

export default function ImageZoom({ containerSelector }: { containerSelector: string }) {
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    function onClick(e: Event) {
      const img = (e.target as HTMLElement).closest("img") as HTMLImageElement | null;
      if (!img) return;
      setZoomed({ src: img.src, alt: img.alt });
    }

    container.addEventListener("click", onClick);
    return () => container.removeEventListener("click", onClick);
  }, [containerSelector]);

  useEffect(() => {
    if (!zoomed) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setZoomed(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [zoomed]);

  if (!zoomed) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 cursor-zoom-out"
      onClick={() => setZoomed(null)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={zoomed.src}
        alt={zoomed.alt}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={() => setZoomed(null)}
      />
    </div>
  );
}
