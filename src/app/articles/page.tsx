import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = { title: "Articles" };

export default function Articles() {
  const allPosts = getAllPosts();
  const featuredArticles = allPosts.slice(0, 3);
  const displayArticles = allPosts.slice(3, 9);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* 1. Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Our Blog
        </span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="font-display text-5xl md:text-[66px] font-normal leading-[1]">
            Featured Articles
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
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
        </div>
      </section>

      {/* 2. Featured Articles */}
      {featuredArticles.length > 0 && (
      <section className="max-w-[1400px] mx-auto px-8 pb-40">
        <div className="rounded-[40px] bg-[#10141A] border border-[#6B6B6B] p-8 md:p-12">
          {/* Navigation arrows */}
          <div className="flex justify-end gap-3 mb-6">
            <button className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth="2.24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth="2.24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}/`}
                className="group block"
              >
                <div className="relative aspect-[428/599] rounded-[19px] overflow-hidden">
                  <Image
                    src={article.cardImage || article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.47) 100%)",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-xl md:text-[32px] font-normal leading-none text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="font-body text-[20px] leading-[119%] text-[#ADADAD]">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
      {displayArticles.length > 0 && (
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="rounded-[40px] bg-[#10141A] border border-[#6B6B6B] p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {displayArticles.map((article) => (
              <div key={article.slug} className="flex flex-col">
                <Link
                  href={`/articles/${article.slug}/`}
                  className="group block"
                >
                  <div className="relative rounded-[38px] bg-[#2c3442] overflow-hidden aspect-[420/270] mb-4 border border-dashed border-[#6B6B6B]">
                    <Image
                      src={article.cardImage || article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <h3 className="font-heading text-xl md:text-[32px] font-bold leading-tight mb-2">
                    {article.title}
                  </h3>
                </Link>
                <p className="font-heading text-[21px] text-[#7A7A7A] leading-[119%] mb-4">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}/`}
                  className="font-heading text-[24px] text-[#C4C4C4] hover:text-white transition-colors"
                >
                  READ MORE &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {allPosts.length === 0 && (
        <section className="max-w-[1400px] mx-auto px-8 pb-32">
          <p className="font-body text-[20px] text-[#7A7A7A]">No articles yet. Check back soon.</p>
        </section>
      )}
    </div>
  );
}
