'use client'

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import VideoPlayer from "@/components/ui/VideoPlayer";

const PlayIcon = () => (
  <svg width="10" height="12" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 6.13a1.5 1.5 0 010 2.74l-8.25 4.5A1.5 1.5 0 011 12v-9a1.5 1.5 0 012.25-1.37l8.25 4.5Z" fill="black" stroke="black" strokeWidth="1.15" strokeLinejoin="round" />
  </svg>
);

export default function ArticleVideoButton({
  videoUrl,
  poster,
  title,
}: {
  videoUrl: string;
  poster: string;
  title: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen]);

  return (
    <>
      <div className="absolute top-4 right-4 z-10 group/play">
        <button
          onClick={() => setModalOpen(true)}
          className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
          aria-label="Play preview"
        >
          <PlayIcon />
        </button>
        <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[11px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/play:opacity-100 transition-opacity pointer-events-none">
          Play preview
        </span>
      </div>
      {mounted && modalOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-[897px] w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-[38px] overflow-hidden border border-[#656464] aspect-[897/484]">
              <VideoPlayer
                src={videoUrl}
                poster={poster}
                title={title}
                label=""
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
