"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { PostFrontmatter } from "@/lib/mdx";
import { fitsCards, ArrowSvg, ArticleCard } from "./article-card-shared";

export default function ArticleGrid({ articles }: { articles: PostFrontmatter[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  const maxOffset = Math.max(0, articles.length - pageSize);
  const visible = articles.slice(page, page + pageSize);

  useEffect(() => {
    if (page > maxOffset) setPage(maxOffset);
  }, [pageSize, maxOffset, page]);

  const totalPositions = maxOffset + 1;
  const prev = () => setPage((p) => (p > 0 ? p - 1 : maxOffset));
  const next = () => setPage((p) => (p < maxOffset ? p + 1 : 0));

  return (
    <div ref={containerRef}>
      <h2 className="font-display text-3xl md:text-[53px] font-normal leading-[0.7] mb-12">
        Explore our Intro Articles
      </h2>

      {isDesktop ? (
        <div className="grid grid-cols-3 gap-x-[14px] gap-y-10 justify-items-center">
          {articles.map((article) => (
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
