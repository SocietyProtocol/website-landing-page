import { MDXRemote } from "next-mdx-remote/rsc";
import FloatingIndex from "@/components/ui/FloatingIndex";
import { makeMdxComponents, type Heading } from "@/lib/mdx-components";

interface MdxArticleLayoutProps {
  content: string;
  headings: Heading[];
  children?: React.ReactNode;
}

export default function MdxArticleLayout({ content, headings, children }: MdxArticleLayoutProps) {
  const mdxComponents = makeMdxComponents(headings);

  return (
    <>
      <section className="max-w-[1600px] mx-auto px-8 pb-32">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: sticky floating index */}
          <div className="hidden md:block shrink-0 w-[371px]">
            <div className="sticky top-32 z-10">
              <FloatingIndex headings={headings} />
            </div>
          </div>

          {/* Right: article content */}
          <div className="flex-1 bg-[#10141A] border border-[#6B6B6B] rounded-[40px] p-10">
            <div className="prose prose-invert max-w-none prose-p:font-heading prose-p:text-[21px] prose-p:text-[#dadada] prose-p:leading-[1.1] prose-p:mb-8 prose-h2:font-display prose-h2:text-[40px] prose-h2:font-normal prose-h2:leading-[1.1] prose-h2:text-white prose-h2:scroll-mt-32 prose-h2:mt-12 prose-h2:mb-6 prose-h3:font-display prose-h3:text-[30px] prose-h3:font-normal prose-h3:leading-[1.1] prose-h3:text-white prose-h3:scroll-mt-32 prose-h3:mt-10 prose-h3:mb-5 prose-li:font-heading prose-li:text-[19px] prose-li:text-[#ADADAD] prose-li:leading-[1.5] prose-strong:text-white prose-img:rounded-none">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </div>
        </div>
      </section>

      {children}
    </>
  );
}
