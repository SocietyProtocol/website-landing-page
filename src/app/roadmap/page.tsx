import type { Metadata } from "next";
import { getRoadmap } from "@/lib/mdx";
import { extractHeadings } from "@/lib/mdx-components";
import MdxArticleLayout from "@/components/layout/MdxArticleLayout";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Society Protocol Roadmap",
};

export default function RoadmapPage() {
  const { content } = getRoadmap();
  const headings = extractHeadings(content);

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-12">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Reference
        </span>
        <h1 className="font-display text-5xl md:text-[66px] font-normal leading-[1]">
          Roadmap
        </h1>
        <p className="font-body text-[20px] text-[#7A7A7A] leading-[119%] max-w-2xl mt-6">
          Society Protocol Roadmap
        </p>
      </section>

      <MdxArticleLayout content={content} headings={headings} />
    </div>
  );
}
