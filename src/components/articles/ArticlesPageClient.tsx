"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { PostFrontmatter } from "@/lib/mdx";
import { fitsCards, ArrowSvg, ArticleCard } from "@/components/ui/article-card-shared";

export default function ArticlesPageClient({
  featuredArticles,
  blogArticles,
}: {
  featuredArticles: PostFrontmatter[];
  blogArticles: PostFrontmatter[];
}) {
  const [query, setQuery] = useState("");

  // Featured carousel state
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

  const lowerQuery = query.toLowerCase();
  const filteredFeatured = query
    ? featuredArticles.filter((a) => a.title.toLowerCase().includes(lowerQuery))
    : featuredArticles;
  const filteredBlog = query
    ? blogArticles.filter((a) => a.title.toLowerCase().includes(lowerQuery))
    : blogArticles;

  const desktopPageSize = 3;
  const desktopMaxOffset = Math.max(0, filteredFeatured.length - desktopPageSize);
  const maxOffset = Math.max(0, filteredFeatured.length - pageSize);
  const totalPositions = maxOffset + 1;

  useEffect(() => {
    if (page > maxOffset) setPage(maxOffset);
  }, [pageSize, maxOffset, page]);

  useEffect(() => {
    setPage(0);
    setBlogPage(0);
  }, [query]);

  // Blog mobile pagination state
  const [blogPage, setBlogPage] = useState(0);
  const blogMaxOffset = Math.max(0, filteredBlog.length - 1);
  const blogTotalPositions = blogMaxOffset + 1;
  const blogPrev = () => setBlogPage((p) => (p > 0 ? p - 1 : blogMaxOffset));
  const blogNext = () => setBlogPage((p) => (p < blogMaxOffset ? p + 1 : 0));

  useEffect(() => {
    if (blogPage > blogMaxOffset) setBlogPage(blogMaxOffset);
  }, [blogMaxOffset, blogPage]);

  const prev = () => setPage((p) => (p > 0 ? p - 1 : maxOffset));
  const next = () => setPage((p) => (p < maxOffset ? p + 1 : 0));
  const desktopPrev = () =>
    setPage((p) => (p > 0 ? Math.max(0, p - 2) : desktopMaxOffset));
  const desktopNext = () =>
    setPage((p) => (p < desktopMaxOffset ? Math.min(desktopMaxOffset, p + 2) : 0));

  const visible = filteredFeatured.slice(page, page + pageSize);
  const desktopVisible = filteredFeatured.slice(page, page + desktopPageSize);

  return (
    <>
      {/* 1. Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Our Blog
        </span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="font-display text-5xl md:text-[66px] font-normal leading-[1]">
            Featured Articles
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="rounded-[36px] bg-[#2C3442] border border-border-default px-6 py-4 pl-12 font-body text-[20px] text-white placeholder:text-[#7A7A7A] outline-none w-full md:w-[422px] h-[72px]"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15A7 7 0 108 1a7 7 0 000 14zM17 17l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isDesktop && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={desktopPrev}
                  className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
                  style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
                >
                  <ArrowSvg />
                </button>
                <button
                  type="button"
                  onClick={desktopNext}
                  className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
                >
                  <ArrowSvg />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Featured Articles */}
      {filteredFeatured.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-8 pb-40">
          <div ref={containerRef} className="rounded-[40px] bg-[#10141A] border border-[#6B6B6B] p-8 md:p-12">
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
        </section>
      )}

      {/* 3. Blog Intro */}
      <section className="max-w-[1400px] mx-auto px-8 pb-12">
        <h2 className="font-display text-3xl md:text-[52.69px] font-normal leading-[0.7] mb-4">
          Our Blog
        </h2>
        <p className="font-body text-[20px] text-[#7A7A7A] leading-[119%] max-w-2xl">
          Plug into a growing network of builders, systems thinkers, and aligned
          visionaries shaping the future of coordination.
        </p>
      </section>

      {/* 4. Article Cards Grid */}
      {filteredBlog.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-8 pb-32">
          <div className="rounded-[40px] bg-[#10141A] border border-[#6B6B6B] p-8 md:p-12">
            {isDesktop ? (
              <div className="grid grid-cols-3 gap-x-[14px] gap-y-[14px] justify-items-center">
                {filteredBlog.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <>
                <div className="flex justify-center gap-[14px]">
                  <ArticleCard article={filteredBlog[blogPage]} />
                </div>
                <div className="relative z-10 flex items-center justify-center gap-4 mt-8">
                  <button
                    type="button"
                    onClick={blogPrev}
                    className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
                    style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
                  >
                    <ArrowSvg />
                  </button>
                  <span className="font-mono text-[16px] text-[#ADADAD] min-w-[3ch] text-center">
                    {blogPage + 1}/{blogTotalPositions}
                  </span>
                  <button
                    type="button"
                    onClick={blogNext}
                    className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
                  >
                    <ArrowSvg />
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {filteredFeatured.length === 0 && filteredBlog.length === 0 && (
        <section className="max-w-[1400px] mx-auto px-8 pb-32">
          <p className="font-body text-[20px] text-[#7A7A7A]">
            {query ? "No articles matching your search." : "No articles yet. Check back soon."}
          </p>
        </section>
      )}
    </>
  );
}
