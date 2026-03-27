"use client";

import { useState, useRef, useEffect } from "react";
import SidebarNav from "@/components/ui/SidebarNav";
import type { Heading } from "@/lib/mdx-components";

const BG_IMAGE = "url(/images/index-sidebar-bg.png)";
const BG_SIZE = "271px 413px";

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
    <div ref={containerRef} className="z-50 w-[371px] flex flex-col items-end">
      {/* Header: three horizontal sections */}
      <div
        className="h-[100px] flex cursor-pointer w-full overflow-hidden"
        onClick={() => setOpen((v) => !v)}
      >
        {/* Left: 170px image */}
        <div
          className="shrink-0 h-full"
          style={{
            width: "170px",
            backgroundImage: BG_IMAGE,
            backgroundSize: BG_SIZE,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
          }}
        />

        {/* Middle: 75px bg-[#10141A] with top border */}
        <div
          className="shrink-0 h-full bg-[#10141A] border-t border-[#505050]"
          style={{ width: "75px" }}
        />

        {/* Right: 171px image with INDEX text */}
        <div
          className="shrink-0 h-full flex items-center justify-center"
          style={{
            width: "171px",
            backgroundImage: BG_IMAGE,
            backgroundSize: BG_SIZE,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "-145px 0px",
          }}
        >
          <h4 className="font-heading text-[21px] text-[#FDFDFD] tracking-widest relative" style={{ right: "30px" }}>
            INDEX
          </h4>
        </div>
      </div>

      {/* Body */}
      {open ? (
        <div
          onClick={handleNavClick}
          className="bg-[#10141A] border border-[#505050] border-t-0 rounded-b-[40px] pl-6 max-h-[70vh] overflow-y-auto floating-index-scroll w-full"
        >
          <SidebarNav headings={headings} />
          <div className="h-10" />
        </div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="bg-[#10141A] border border-[#505050] border-t-0 rounded-b-[40px] px-6 pb-4 flex items-center justify-center gap-1 cursor-pointer w-full"
        >
          <span className="font-heading text-[14px] text-[#dadada]">Click to expand</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4.5L6 8.5L10 4.5" stroke="#dadada" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
