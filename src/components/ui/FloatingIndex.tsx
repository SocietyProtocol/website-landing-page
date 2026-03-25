"use client";

import { useState, useRef, useEffect } from "react";
import SidebarNav from "@/components/ui/SidebarNav";
import type { Heading } from "@/lib/mdx-components";

export default function FloatingIndex({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close when a TOC link is clicked
  function handleNavClick(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest("a")) {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="z-50 w-[271px] flex flex-col items-end">
      {open ? (
        <>
          <div
            className="h-[100px] overflow-hidden px-6 pt-6 cursor-pointer w-full"
            onClick={() => setOpen(false)}
            style={{
              backgroundImage: "url(/images/index-sidebar-bg.png)",
              backgroundSize: "271px 413px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h4 className="font-heading text-[22px] text-[#FDFDFD] mb-6 text-right tracking-widest mr-4">
              INDEX
            </h4>
          </div>
          <div
            onClick={handleNavClick}
            className="bg-[#10141A] border border-[#505050] border-t-0 rounded-b-[40px] pl-6 max-h-[70vh] overflow-hidden flex flex-col w-full"
          >
            <div className="overflow-y-auto floating-index-scroll flex-1 min-h-0 pr-6">
              <SidebarNav headings={headings} />
            </div>
            <div className="shrink-0 h-10" />
          </div>
        </>
      ) : (
        <>
          {/* Collapsed header */}
          <div
            className="overflow-hidden px-6 pt-6 pb-12 cursor-pointer w-full"
            onClick={() => setOpen(true)}
            style={{
              backgroundImage: "url(/images/index-sidebar-bg.png)",
              backgroundSize: "271px 413px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h4 className="font-heading text-[22px] text-[#FDFDFD] text-right tracking-widest mr-4">
              INDEX
            </h4>
          </div>
          {/* Collapsed footer */}
          <div onClick={() => setOpen(true)} className="bg-[#10141A] border border-[#505050] border-t-0 rounded-b-[40px] px-6 pb-4 flex items-center justify-center gap-1 cursor-pointer w-full">
            <span className="font-heading text-[15px] text-[#dadada]">Click to expand</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4.5L6 8.5L10 4.5" stroke="#dadada" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
