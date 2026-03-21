import SideQuote from "@/components/ui/SideQuote";

export interface Heading {
  text: string;
  id: string;
  level: number;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");
}

function dedupeId(base: string, seen: Map<string, number>): string {
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}

export function extractHeadings(mdxContent: string): Heading[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  let match;
  while ((match = headingRegex.exec(mdxContent)) !== null) {
    const text = match[2].trim();
    const base = slugify(text);
    const id = dedupeId(base, seen);
    headings.push({ text, id, level: match[1].length });
  }
  return headings;
}

export function makeMdxComponents(headings: Heading[]) {
  let index = 0;
  const getId = () => headings[index++]?.id ?? "";

  return {
    h1: (props: React.ComponentProps<"h1">) => <h1 id={getId()} {...props} />,
    h2: (props: React.ComponentProps<"h2">) => <h2 id={getId()} {...props} />,
    h3: (props: React.ComponentProps<"h3">) => <h3 id={getId()} {...props} />,
    SideQuote,
  };
}
