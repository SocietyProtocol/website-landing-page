import Link from "next/link";
import Image from "next/image";
import type { PostFrontmatter } from "@/lib/mdx";

export const CARD_WIDTH = 428;
export const CARD_GAP = 14;
export const CARD_HEIGHT = 599;

export function fitsCards(width: number, count: number) {
  return width >= count * CARD_WIDTH + (count - 1) * CARD_GAP;
}

export const ArrowSvg = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ArticleCard({ article }: { article: PostFrontmatter }) {
  return (
    <Link
      href={`/articles/${article.slug}/`}
      className="group block relative shrink-0 rounded-[20px] overflow-hidden"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT, maxWidth: "100%" }}
    >
      <Image
        src={article.cardImage || article.image}
        alt={article.title}
        fill
        sizes="(min-width: 428px) 428px, 100vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.65)]" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="font-display text-[28px] md:text-[32px] font-normal leading-[1] text-white mb-3">
          {article.title}
        </h3>
        <p className="font-body text-[20px] leading-[119%] text-[#ADADAD]">
          {article.description}
        </p>
      </div>
    </Link>
  );
}
