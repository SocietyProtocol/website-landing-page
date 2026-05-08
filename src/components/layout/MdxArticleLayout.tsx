import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import FloatingIndex from "@/components/ui/FloatingIndex";
import MobileTocDrawer from "@/components/ui/MobileTocDrawer";
import FootnoteScroll from "@/components/ui/FootnoteScroll";
import ImageZoom from "@/components/ui/ImageZoom";
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
      <FootnoteScroll />
      <ImageZoom containerSelector=".article-body" />
      <MobileTocDrawer headings={headings} />
      <section className="max-w-[1600px] mx-auto md:px-1 lg:px-8 pb-32">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: sticky floating index */}
          <div className="hidden lg:block shrink-0 w-[371px]">
            <div className="sticky top-32 z-10">
              <FloatingIndex headings={headings} />
            </div>
          </div>

          {/* Right: article content */}
          <div className="flex-1 bg-[#10141A] border border-[#6B6B6B] rounded-[40px] p-10">
            <div className="prose prose-invert max-w-none prose-p:font-body prose-p:text-[18px] prose-p:text-[var(--color-text-slate)] prose-p:leading-[1.1] prose-p:mb-8 prose-h1:font-display prose-h1:text-[45px] prose-h1:font-normal prose-h1:leading-[1.1] prose-h1:text-white prose-h1:scroll-mt-32 prose-h1:mt-14 prose-h1:mb-7 prose-h2:font-display prose-h2:text-[40px] prose-h2:font-normal prose-h2:leading-[1.1] prose-h2:text-white prose-h2:scroll-mt-32 prose-h2:mt-12 prose-h2:mb-6 prose-h3:font-display prose-h3:text-[30px] prose-h3:font-normal prose-h3:leading-[1.1] prose-h3:text-white prose-h3:scroll-mt-32 prose-h3:mt-10 prose-h3:mb-5 prose-h4:font-display prose-h4:text-[22px] prose-h4:font-normal prose-h4:leading-[1.1] prose-h4:text-white prose-h4:scroll-mt-32 prose-h4:mt-8 prose-h4:mb-4 prose-li:font-body prose-li:text-[18px] prose-li:text-[var(--color-text-slate)] prose-li:leading-[1.2] prose-li:marker:text-[var(--color-text-slate)] prose-strong:text-white prose-img:rounded-none prose-img:cursor-zoom-in prose-a:break-all [&_[data-footnotes]]:italic article-body">
              <MDXRemote source={content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>
          </div>
        </div>
      </section>

      {children}
    </>
  );
}
