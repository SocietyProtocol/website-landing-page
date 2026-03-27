import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getAllPosts, PLACEHOLDER_SLUG } from "@/lib/mdx";
import { extractHeadings } from "@/lib/mdx-components";
import MdxArticleLayout from "@/components/layout/MdxArticleLayout";
import ArticleVideoButton from "@/components/ui/ArticleVideoButton";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  if (slugs.length === 0) {
    return [{ slug: PLACEHOLDER_SLUG }];
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === PLACEHOLDER_SLUG) return { title: "Article" };
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
  if (slug === PLACEHOLDER_SLUG) {
    return <div className="min-h-screen max-w-[1400px] mx-auto px-8 pt-36"><p className="font-body text-[20px] text-[#7A7A7A]">Article not found.</p></div>;
  }
  const { frontmatter, content } = getPostBySlug(slug);
  const headings = extractHeadings(content);
  const allPosts = getAllPosts();
  const relatedArticles = allPosts
    .filter((a) => a.slug !== frontmatter.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* 1. Hero */}
      <section className="max-w-[1600px] mx-auto px-8 pt-36 pb-12">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Published - {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""} &nbsp; Written by: {frontmatter.author || "Anton"}
        </span>
        <h1 className="font-heading text-3xl md:text-[66px] font-normal leading-[1] max-w-3xl">
          {frontmatter.title}
        </h1>
      </section>

      {/* 2. Hero Image */}
      <section className="max-w-[1600px] mx-auto px-8 pb-16">
        <div className="relative aspect-[1549/480] overflow-hidden rounded-[20px]">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent" />
          {frontmatter.videoUrl && (
            <ArticleVideoButton
              videoUrl={frontmatter.videoUrl}
              poster={frontmatter.image}
              title={frontmatter.title}
            />
          )}
        </div>
      </section>

      {/* 3. Article Body + Related Articles */}
      <MdxArticleLayout content={content} headings={headings}>
        {/* 4. Related Articles Grid */}
        <section className="max-w-[1600px] mx-auto px-8 pb-32">
          <h2 className="font-display text-3xl md:text-[52.69px] font-normal leading-[0.7] mb-10">
            Explore our Intro Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {relatedArticles.map((a) => (
              <div key={a.slug} className="flex flex-col">
                <Link href={`/articles/${a.slug}/`} className="group block">
                  <div className="relative rounded-[19px] bg-[#212833] overflow-hidden aspect-[420/270] mb-4">
                    <Image
                      src={a.cardImage || a.image}
                      alt={a.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
      </MdxArticleLayout>
    </div>
  );
}
