'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { ipfsWithFallbacks } from "@/lib/ipfs";
import type { PostFrontmatter } from "@/lib/mdx";

export const CARD_WIDTH = 428;
export const CARD_GAP = 14;
export const CARD_HEIGHT = 599;

export function fitsCards(width: number, count: number) {
  return width >= count * CARD_WIDTH + (count - 1) * CARD_GAP;
}

export const ArrowSvg = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg width="10" height="12" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 6.13a1.5 1.5 0 010 2.74l-8.25 4.5A1.5 1.5 0 011 12v-9a1.5 1.5 0 012.25-1.37l8.25 4.5Z" fill="black" stroke="black" strokeWidth="1.15" strokeLinejoin="round" />
  </svg>
);

function VideoModal({ article, onClose }: { article: PostFrontmatter; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-[897px] w-full mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-[38px] overflow-hidden border border-[#656464] aspect-[897/484]">
          <VideoPlayer
            src={ipfsWithFallbacks(article.videoUrl!)}
            poster={article.image}
            title={article.title}
            label=""
          />
        </div>
      </div>
    </div>
  );
}

export function ArticleCard({ article }: { article: PostFrontmatter }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="group relative shrink-0 rounded-[20px] overflow-hidden"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT, maxWidth: "100%" }}
    >
      <Link
        href={`/articles/${article.slug}/`}
        className="absolute inset-0"
      >
        <Image
          src={article.cardImage || article.image}
          alt={article.title}
          fill
          sizes="(min-width: 428px) 428px, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.65)]" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-display text-[28px] md:text-[32px] font-normal leading-[1] text-white mb-3">
            {article.title}
          </h3>
          <p className="font-body text-[20px] leading-[119%] text-[#ADADAD]">
            {article.description}
          </p>
        </div>
      </Link>
      {article.videoUrl && (
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
      )}
      {mounted && modalOpen && createPortal(
        <VideoModal article={article} onClose={() => setModalOpen(false)} />,
        document.body
      )}
    </div>
  );
}
