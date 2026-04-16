import type { Metadata } from "next";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getIntroPosts, PLACEHOLDER_SLUG } from "@/lib/mdx";
import { extractHeadings } from "@/lib/mdx-components";
import MdxArticleLayout from "@/components/layout/MdxArticleLayout";
import ArticleVideoButton from "@/components/ui/ArticleVideoButton";
import ShuffledArticles from "@/components/ui/ShuffledArticles";

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
  const url = `/articles/${frontmatter.slug}`;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: frontmatter.title,
      description: frontmatter.description,
      images: [{ url: frontmatter.image, alt: frontmatter.title }],
      publishedTime: frontmatter.date || undefined,
      authors: frontmatter.author ? [frontmatter.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [frontmatter.image],
    },
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
  const introArticles = getIntroPosts().filter((a) => a.slug !== frontmatter.slug);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* 1. Hero */}
      <section className="max-w-[1600px] mx-auto px-8 pt-36 pb-12">
        <span className="font-body text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Published - {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""} &nbsp; Written by: {frontmatter.author || "Anton"}
        </span>
        <h1 className="font-body text-3xl md:text-[66px] font-normal leading-[1] max-w-3xl">
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
        {/* 4. Intro Articles */}
        <section className="max-w-[1400px] mx-auto px-8 pb-32">
          {introArticles.length > 0 && (
          <div className="bg-[#10141A] border border-[#656464] rounded-[40px] p-8 md:p-10">
            <ShuffledArticles articles={introArticles} />
          </div>
          )}
        </section>
      </MdxArticleLayout>
    </div>
  );
}
