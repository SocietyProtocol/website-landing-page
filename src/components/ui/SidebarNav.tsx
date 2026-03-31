"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/mdx-components";

export default function SidebarNav({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-128px 0px -60% 0px", threshold: 0 }
    );

    const ids = headings.map((h) => h.id);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return (
      <span className="font-heading text-[16px] text-[#4f4f4f]">
        No sections yet
      </span>
    );
  }

  // Build numbering: H1 gets top-level number, H2 gets sub-number, H3 gets bullet.
  // If no H1 exists, treat H2 as top-level to avoid "0.1, 0.2" prefixes.
  const hasH1 = headings.some((h) => h.level === 1);
  let h1Count = 0;
  let h2Count = 0;

  return (
    <nav className="flex flex-col gap-3">
      {headings.map((h) => {
        const isActive = h.id === activeId;
        let prefix = "";
        let indent = "";
        let fontSize = "text-[18px]";

        if (h.level === 1) {
          h1Count++;
          h2Count = 0;
          prefix = `${h1Count}. `;
          fontSize = "text-[18px]";
        } else if (h.level === 2) {
          h2Count++;
          if (!hasH1) {
            prefix = `${h2Count}. `;
          } else {
            prefix = `${h1Count}.${h2Count}. `;
            indent = "pl-3";
          }
          fontSize = "text-[16px]";
        } else if (h.level === 3) {
          prefix = "• ";
          indent = "pl-6";
          fontSize = "text-[15px]";
        }

        return (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`font-heading ${fontSize} leading-[100%] transition-colors grid grid-cols-[8px_1fr] gap-2 items-start ${
              isActive
                ? "text-[#FDFDFD] font-normal"
                : "text-[#dadada] hover:text-[#FDFDFD]"
            }`}
          >
            <span className="shrink-0 w-[8px] mt-[5px]">
              {isActive && (
                <span className="block w-[6px] h-[6px] rounded-full bg-[#FDFDFD]" />
              )}
            </span>
            <span className={indent}>{prefix}{h.text}</span>
          </a>
        );
      })}
    </nav>
  );
}
