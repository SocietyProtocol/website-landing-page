import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");
const rolesDirectory = path.join(process.cwd(), "content/roles");
const whitepaperDirectory = path.join(process.cwd(), "content/whitepaper");
const glossaryDirectory = path.join(process.cwd(), "content/glossary");
const ideologyDirectory = path.join(process.cwd(), "content/ideology");
const handbookDirectory = path.join(process.cwd(), "content/handbook");
const teamDirectory = path.join(process.cwd(), "content/team");

const isMdxFile = (f: string) => f.endsWith(".mdx") || f.endsWith(".md");

export const PLACEHOLDER_SLUG = "__placeholder";

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  image: string;
  cardImage?: string;
}

export interface RoleFrontmatter {
  title: string;
  slug: string;
  emoji?: string;
  commitment: string;
  responsibilities: string;
  requirements: string;
}

function readMdxFiles(directory: string): string[] {
  try {
    return fs.readdirSync(directory).filter(isMdxFile);
  } catch {
    return [];
  }
}

function getAllFrontmatter<T>(directory: string): T[] {
  return readMdxFiles(directory).map((f) => {
    const raw = fs.readFileSync(path.join(directory, f), "utf-8");
    const { data } = matter(raw);
    return data as T;
  });
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): {
  frontmatter: PostFrontmatter;
  content: string;
} {
  const files = readMdxFiles(postsDirectory);
  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDirectory, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return { frontmatter: data as PostFrontmatter, content };
    }
  }
  throw new Error(`Post not found: ${slug}`);
}

export function getAllPosts(): PostFrontmatter[] {
  return getAllFrontmatter<PostFrontmatter>(postsDirectory).sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getAllRoles(): RoleFrontmatter[] {
  return getAllFrontmatter<RoleFrontmatter>(rolesDirectory);
}

export interface WhitepaperFrontmatter {
  title: string;
  slug: string;
  description?: string;
}

export function getWhitepaper(): { frontmatter: WhitepaperFrontmatter; content: string } {
  const files = readMdxFiles(whitepaperDirectory);
  if (files.length === 0) {
    throw new Error("No whitepaper file found");
  }
  const raw = fs.readFileSync(path.join(whitepaperDirectory, files[0]), "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as WhitepaperFrontmatter, content };
}

export interface GlossaryFrontmatter {
  title: string;
  slug: string;
  description?: string;
}

export function getGlossary(): { frontmatter: GlossaryFrontmatter; content: string } {
  const files = readMdxFiles(glossaryDirectory);
  if (files.length === 0) {
    throw new Error("No glossary file found");
  }
  const raw = fs.readFileSync(path.join(glossaryDirectory, files[0]), "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as GlossaryFrontmatter, content };
}

export interface IdeologyFrontmatter {
  title: string;
  slug: string;
  description?: string;
}

export function getIdeology(): { frontmatter: IdeologyFrontmatter; content: string } {
  const files = readMdxFiles(ideologyDirectory);
  if (files.length === 0) {
    throw new Error("No ideology file found");
  }
  const raw = fs.readFileSync(path.join(ideologyDirectory, files[0]), "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as IdeologyFrontmatter, content };
}

export interface HandbookFrontmatter {
  title: string;
  slug: string;
  svg: string;
  order: number;
}

export function getAllHandbookPages(): HandbookFrontmatter[] {
  return getAllFrontmatter<HandbookFrontmatter>(handbookDirectory).sort(
    (a, b) => a.order - b.order
  );
}

export function getAllHandbookSlugs(): string[] {
  return getAllHandbookPages().map((p) => p.slug);
}

export interface TeamMemberFrontmatter {
  title: string;
  slug: string;
  role: "core" | "advisor";
  jobTitle: string;
  image: string;
  order: number;
  xUrl?: string;
  farcasterUrl?: string;
  lensUrl?: string;
}

export function getAllTeamMembers(): TeamMemberFrontmatter[] {
  return getAllFrontmatter<TeamMemberFrontmatter>(teamDirectory).sort(
    (a, b) => a.order - b.order
  );
}

export function getCoreTeam(): TeamMemberFrontmatter[] {
  return getAllTeamMembers().filter((m) => m.role === "core");
}

export function getAdvisors(): TeamMemberFrontmatter[] {
  return getAllTeamMembers().filter((m) => m.role === "advisor");
}

export function getHandbookBySlug(slug: string): {
  frontmatter: HandbookFrontmatter;
  content: string;
} {
  const files = readMdxFiles(handbookDirectory);
  for (const file of files) {
    const raw = fs.readFileSync(path.join(handbookDirectory, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return { frontmatter: data as HandbookFrontmatter, content };
    }
  }
  throw new Error(`Handbook page not found: ${slug}`);
}
