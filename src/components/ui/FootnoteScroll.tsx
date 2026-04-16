"use client";

import { useEffect } from "react";

const DURATION_MS = 80;
const HEADER_OFFSET = 160;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollTo(targetY: number) {
  const startY = window.scrollY;
  const delta = targetY - startY;
  if (Math.abs(delta) < 1) return;
  const startTime = performance.now();
  const html = document.documentElement;

  // Disable CSS smooth scroll so our rAF loop is in full control
  html.style.scrollBehavior = "auto";

  function step(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / DURATION_MS, 1);
    window.scrollTo(0, startY + delta * easeInOutCubic(t));
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      html.style.scrollBehavior = "";
    }
  }
  requestAnimationFrame(step);
}

export default function FootnoteScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#user-content-fn"], a[data-footnote-backref]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || !hash.startsWith("#")) return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      e.preventDefault();
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      animateScrollTo(targetY);
      history.replaceState(null, "", hash);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
