"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { PostFrontmatter } from "@/lib/mdx";
import { fitsCards, ArrowSvg, ArticleCard } from "./article-card-shared";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ShuffledArticles({ articles }: { articles: PostFrontmatter[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shuffled, setShuffled] = useState(articles);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setShuffled(shuffle(articles));
  }, [articles]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    setPageSize(fitsCards(w, 3) ? 3 : fitsCards(w, 2) ? 2 : 1);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const maxOffset = Math.max(0, shuffled.length - pageSize);
  const visible = shuffled.slice(page, page + pageSize);

  useEffect(() => {
    if (page > maxOffset) setPage(maxOffset);
  }, [pageSize, maxOffset, page]);

  const prev = () => setPage((p) => (p > 0 ? p - 1 : maxOffset));
  const next = () => setPage((p) => (p < maxOffset ? p + 1 : 0));

  const desktopPageSize = 3;
  const desktopMaxOffset = Math.max(0, shuffled.length - desktopPageSize);
  const desktopVisible = shuffled.slice(page, page + desktopPageSize);
  const totalPositions = maxOffset + 1;

  return (
    <div ref={containerRef}>
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-display text-3xl md:text-[53px] font-normal leading-[0.7]">
          Explore our Intro Articles
        </h2>
        {isDesktop && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => (p > 0 ? Math.max(0, p - 2) : desktopMaxOffset))}
              className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
              style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
            >
              <ArrowSvg />
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => (p < desktopMaxOffset ? Math.min(desktopMaxOffset, p + 2) : 0))}
              className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
            >
              <ArrowSvg />
            </button>
          </div>
        )}
      </div>

      {isDesktop ? (
        <div className="grid grid-cols-3 gap-x-[14px] justify-items-center">
          {desktopVisible.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-center gap-[14px]">
            {visible.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="relative z-10 flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
              style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
            >
              <ArrowSvg />
            </button>
            <span className="font-mono text-[16px] text-[#ADADAD] min-w-[3ch] text-center">
              {page + 1}/{totalPositions}
            </span>
            <button
              type="button"
              onClick={next}
              className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
            >
              <ArrowSvg />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
