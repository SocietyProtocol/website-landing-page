import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  image: string;
}

export function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(postsDirectory, f), "utf-8");
      const { data } = matter(raw);
      return data.slug as string;
    });
}

export function getPostBySlug(slug: string): {
  frontmatter: PostFrontmatter;
  content: string;
} {
  const files = fs.readdirSync(postsDirectory);
  for (const file of files) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
    const raw = fs.readFileSync(path.join(postsDirectory, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return { frontmatter: data as PostFrontmatter, content };
    }
  }
  throw new Error(`Post not found: ${slug}`);
}

export function getAllPosts(): PostFrontmatter[] {
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(postsDirectory, f), "utf-8");
      const { data } = matter(raw);
      return data as PostFrontmatter;
    });
}
