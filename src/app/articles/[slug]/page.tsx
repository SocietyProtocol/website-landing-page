import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";

import { articles } from "@/data/articles";

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getPostBySlug(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getPostBySlug(slug);
  const relatedArticles = articles
    .filter((a) => a.slug !== frontmatter.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-12">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Published - {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""} &nbsp; Written by : {frontmatter.author || "Anton"}
        </span>
        <h1 className="font-heading text-3xl md:text-[66px] font-normal leading-[1] max-w-3xl">
          {frontmatter.title}
        </h1>
      </section>

      {/* 2. Hero Image */}
      <section className="max-w-[1400px] mx-auto px-8 pb-16">
        <div className="relative aspect-[1549/480] overflow-hidden rounded-[20px]">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent" />
        </div>
      </section>

      {/* 3. Article Body */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="flex gap-0 justify-center">
          {/* Left sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-32 bg-[#151515] border border-[#505050] p-6 w-[271px]">
              <h4 className="font-mono text-[22px] text-[#7A7A7A] mb-6 text-center">INDEX</h4>
              <nav className="flex flex-col gap-3">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}/`}
                    className={`font-heading text-[18px] leading-[1] transition-colors ${
                      a.slug === frontmatter.slug
                        ? "text-white"
                        : "text-[#4f4f4f] hover:text-white"
                    }`}
                  >
                    {a.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right content - MDX body */}
          <div className="max-w-[1100px] bg-[#10141A] border border-[#6B6B6B] rounded-[40px] p-10">
            <div className="prose prose-invert max-w-none prose-p:font-heading prose-p:text-[21px] prose-p:text-[#ADADAD] prose-p:leading-[1.1] prose-headings:font-display prose-headings:text-[52.69px] prose-headings:font-normal prose-headings:leading-[0.7] prose-img:rounded-[19px]">
              <MDXRemote source={content} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Articles Grid */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <h2 className="font-display text-3xl md:text-[52.69px] font-normal leading-[0.7] mb-10">
          Explore our Intro Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
          {relatedArticles.map((a) => (
            <div key={a.slug} className="flex flex-col">
              <Link href={`/articles/${a.slug}/`} className="group block">
                <div className="relative rounded-[19px] bg-[#212833] overflow-hidden aspect-[420/270] mb-4">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <h3 className="font-heading text-xl md:text-[32px] font-bold leading-tight mb-2">
                  {a.title}
                </h3>
              </Link>
              <p className="font-heading text-[21px] text-[#7A7A7A] leading-[119%] mb-4">
                {a.description}
              </p>
              <Link
                href={`/articles/${a.slug}/`}
                className="font-heading text-[24px] text-[#C4C4C4] hover:text-white transition-colors"
              >
                READ MORE &gt;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
