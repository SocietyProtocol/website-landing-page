"use client";

import { useState, useEffect, useRef } from "react";
import SidebarNav from "@/components/ui/SidebarNav";
import type { Heading } from "@/lib/mdx-components";

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
  </svg>
);

export default function MobileTocDrawer({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target)) return;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Fixed book button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="fixed top-[76px] right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-[#10141A] border border-[#505050] text-[#dadada] hover:text-white transition-colors cursor-pointer md:hidden"
        aria-label={open ? "Close table of contents" : "Open table of contents"}
      >
        <BookIcon />
      </button>

      {/* Full-width dropdown panel */}
      {open && (
        <div className="fixed top-[126px] left-0 right-0 z-40 px-4 lg:hidden" ref={panelRef}>
          <div className="bg-[#10141A] border border-[#505050] rounded-[20px] pl-4 pr-0 pt-6 pb-2">
            <p className="font-body text-[13px] tracking-widest text-[#7A7A7A] mb-4">INDEX</p>
            <div
              className="max-h-[55vh] overflow-y-auto floating-index-scroll pr-2 pb-4"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("a")) setOpen(false);
              }}
            >
              <SidebarNav headings={headings} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
