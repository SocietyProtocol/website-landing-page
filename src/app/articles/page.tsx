import type { Metadata } from "next";
import { getAllPosts, getIntroPosts } from "@/lib/mdx";
import ArticlesPageClient from "@/components/articles/ArticlesPageClient";

export const metadata: Metadata = { title: "Articles" };

export default function Articles() {
  const nonIntroPosts = getAllPosts().filter((p) => !p.isIntro);
  const introPosts = getIntroPosts();
  const allOrdered = [...nonIntroPosts, ...introPosts];

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      <ArticlesPageClient
        featuredArticles={allOrdered}
        blogArticles={allOrdered}
      />
    </div>
  );
}
