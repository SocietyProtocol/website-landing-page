import type { Metadata } from "next";
import { getIdeology } from "@/lib/mdx";
import { extractHeadings } from "@/lib/mdx-components";
import MdxArticleLayout from "@/components/layout/MdxArticleLayout";

export const metadata: Metadata = {
  title: "Ideology",
  description: "The ideological foundations of Society Protocol",
};

export default function IdeologyPage() {
  const { content } = getIdeology();
  const headings = extractHeadings(content);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-12">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Reference
        </span>
        <h1 className="font-display text-5xl md:text-[66px] font-normal leading-[1]">
          Ideology
        </h1>
        <p className="font-body text-[20px] text-[#7A7A7A] leading-[119%] max-w-2xl mt-6">
          The ideological foundations of Society Protocol — why we gather and what we believe.
        </p>
      </section>

      <MdxArticleLayout content={content} headings={headings} />
    </div>
  );
}
