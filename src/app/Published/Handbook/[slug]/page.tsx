import Link from "next/link";
import { getAllHandbookSlugs, getHandbookBySlug } from "@/lib/mdx";
import HandbookViewer from "@/components/ui/HandbookViewer";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllHandbookSlugs().map((slug) => ({ slug }));
}

// dynamicParams = false guarantees only slugs from generateStaticParams are routed here
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = getHandbookBySlug(decodeURIComponent(slug));
  return { title: `${frontmatter.title} | Society Protocol` };
}

export default async function HandbookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = getHandbookBySlug(decodeURIComponent(slug));

  return (
    <main className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto] text-white" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      <div className="max-w-[1400px] mx-auto px-8 pt-36 pb-12">
        <nav className="mb-8 text-sm text-neutral-400">
          <Link href="/Published/Handbook" className="hover:text-white transition-colors">
            Handbook
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{frontmatter.title}</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">{frontmatter.title}</h1>

        <HandbookViewer svgPath={frontmatter.svg} />
      </div>
    </main>
  );
}
