"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export default function ScrollContainer({
  maxHeight,
  className = "",
  children,
}: {
  maxHeight: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setScrollable(el.scrollHeight > el.clientHeight);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-y-auto video-sidebar ${scrollable ? "is-scrollable" : ""} ${className}`}
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
}
