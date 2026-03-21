import Link from "next/link";
import { getAllHandbookPages } from "@/lib/mdx";

export const metadata = {
  title: "Handbook | Society Protocol",
};

export default function HandbookIndexPage() {
  const pages = getAllHandbookPages();

  const handbookPages = pages.filter((p) => p.slug.startsWith("Handbook-"));
  const functionPages = pages.filter((p) => p.slug.startsWith("Function-"));

  return (
    <main className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto] text-white" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      <div className="max-w-[1200px] mx-auto px-8 pt-36 pb-12">
        <h1 className="text-4xl font-bold mb-12">Handbook</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-neutral-300">
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {handbookPages.map((page) => (
              <Link
                key={page.slug}
                href={`/Published/Handbook/${page.slug}`}
                className="block p-8 flex items-center bg-[length:100%_100%] bg-center bg-no-repeat transition-opacity hover:opacity-90"
                style={{
                  backgroundImage: "url('/images/card-bg.png')",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <h3 className="font-display text-2xl md:text-[30px] font-normal leading-tight">{page.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-neutral-300">
            Functions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {functionPages.map((page) => (
              <Link
                key={page.slug}
                href={`/Published/Handbook/${page.slug}`}
                className="rounded-[10px] border border-[#656464] bg-[#181c22] p-5 py-6 flex items-center transition-opacity hover:opacity-90"
              >
                <h3 className="font-display text-[18px] font-normal leading-tight">{page.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
