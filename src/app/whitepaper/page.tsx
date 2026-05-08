import type { Metadata } from "next";
import { getWhitepaper } from "@/lib/mdx";
import { extractHeadings } from "@/lib/mdx-components";
import MdxArticleLayout from "@/components/layout/MdxArticleLayout";

export const metadata: Metadata = {
  title: "Whitepaper",
  description: "Society Protocol Whitepaper",
};

export default function WhitepaperPage() {
  const { content } = getWhitepaper();
  const headings = extractHeadings(content);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto] bg-[var(--color-background-focus)]">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-12">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Reference
        </span>
        <h1 className="font-display text-5xl md:text-[50px] font-normal leading-[1]">
          Whitepaper
        </h1>
        <p className="font-body text-[20px] text-[var(--color-text-light)] leading-[119%] max-w-5xl mt-6">
          Society Protocol Whitepaper
        </p>
      </section>

      <MdxArticleLayout content={content} headings={headings} />
    </div>
  );
}
