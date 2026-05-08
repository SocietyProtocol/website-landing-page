import type { Metadata } from "next";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getIntroPosts, PLACEHOLDER_SLUG } from "@/lib/mdx";
import { extractHeadings } from "@/lib/mdx-components";
import MdxArticleLayout from "@/components/layout/MdxArticleLayout";
import ArticleVideoButton from "@/components/ui/ArticleVideoButton";
import ShuffledArticles from "@/components/ui/ShuffledArticles";
import { XIcon, FacebookIcon, NostrIcon, FarcasterIcon } from "@/components/ui/SocialIcons";

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://societyprotocol.io";
  const articleUrl = `${siteUrl}/articles/${frontmatter.slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(frontmatter.title);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto] bg-[var(--color-background-focus)]">
      {/* 1. Hero */}
      <section className="max-w-[1600px] mx-auto px-8 pt-36 pb-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <span className="font-body text-[18px] tracking-widest text-[#7A7A7A]">
            / Published - {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""} &nbsp; Written by: {frontmatter.author || "Anton"}
          </span>
          <div className="flex items-center gap-3 text-[#7A7A7A]">
            <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="hover:text-white transition-colors">
              <XIcon className="w-[18px] h-[18px]" />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="hover:text-white transition-colors">
              <FacebookIcon className="w-[18px] h-[18px]" />
            </a>
            <a href={`https://snort.social/new-note?content=${encodeURIComponent(frontmatter.title + " " + articleUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Nostr" className="hover:text-white transition-colors">
              <NostrIcon className="w-[18px] h-[18px]" />
            </a>
            <a href={`https://warpcast.com/~/compose?text=${encodedTitle}&embeds[]=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Farcaster" className="hover:text-white transition-colors">
              <FarcasterIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
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
