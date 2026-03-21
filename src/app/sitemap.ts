import type { MetadataRoute } from "next";
import { getAllPosts, getAllHandbookSlugs } from "@/lib/mdx";

export const dynamic = "force-static";

const BASE_URL = "https://societyprotocol.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/articles",
    "/join",
    "/learn",
  ].map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: now,
  }));

  const articleRoutes = getAllPosts().map((post) => ({
    url: `${BASE_URL}/articles/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : now,
  }));

  const handbookRoutes = getAllHandbookSlugs().map((slug) => ({
    url: `${BASE_URL}/Published/Handbook/${slug}/`,
    lastModified: now,
  }));

  return [...staticRoutes, ...articleRoutes, ...handbookRoutes];
}
