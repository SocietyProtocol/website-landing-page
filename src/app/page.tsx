import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Home" };

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* 1. Hero */}
      <section className="relative max-w-[1400px] mx-auto px-8 pt-56 pb-24">
        <div className="relative min-h-[400px] md:min-h-[600px] flex items-center">
          <div className="relative z-10 max-w-[511px]">
            <h1 className="font-display text-5xl md:text-[80.69px] font-normal leading-[109%] tracking-[0.002em]">
              The future
              <br />
              of human
              <br />
              coordination
            </h1>
          </div>
          <img
            src="/images/hero-sphere.png"
            alt="Abstract visualization"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] md:w-[60%] max-w-[977px] h-auto object-contain mix-blend-lighten pointer-events-none"
          />
        </div>
      </section>

      {/* 2. App Screenshot + Description (side-by-side) */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left: App screenshot */}
          <div className="relative rounded-[30px] overflow-hidden border border-[#6B6B6B]">
            <img
              src="/images/rectangle.png"
              alt="Society Protocol app"
              className="w-full h-auto object-cover rounded-[14px]"
            />
            <div className="absolute inset-0 bg-black/20 rounded-[14px]" />
            {/* Small centered play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center cursor-pointer">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 6.13a1.5 1.5 0 010 2.74l-8.25 4.5A1.5 1.5 0 011 12v-9a1.5 1.5 0 012.25-1.37l8.25 4.5Z" fill="black" stroke="black" strokeWidth="1.15" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[28px] md:text-[34px] font-normal leading-[1]">
              Society Protocol is a framework for building synchronized network states
            </h2>
            <p className="font-display text-[21px] leading-[119%] text-[#B2B2B2]">
              Build your own society — with modular governance, automated trust, and sybil-resistant identities. The protocol works like a civic operating system: communities, currencies, laws, and membership—defined in code.
            </p>
            <div>
              <Button href="/learn">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Welcome to Web 4 */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="font-display text-4xl md:text-[45px] font-normal leading-[1] mb-5">
            Welcome to Web 4
          </h2>
          <p className="font-display text-lg md:text-[23px] leading-[1] text-[#EDEDED] max-w-3xl mx-auto">
            Bringing identity, currency, and history onto an immutable Timeline
          </p>
        </div>
        {/* Earth background strip */}
        <div className="mt-10 w-full h-[189px] overflow-hidden">
          <img
            src="/images/blue-fire.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 4. Game Theory 101 / Learning Resources */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid md:grid-cols-[3fr_2fr] gap-6">
          {/* Left: Video card */}
          <div className="relative rounded-[20px] overflow-hidden aspect-[925/555]">
            <img
              src="/images/video-thumbnail.png"
              alt="How Society Protocol Works"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,58,58,0.71)] to-[rgba(0,0,0,0.71)]" />
            {/* GAME THEORY 101 label */}
            <span className="absolute top-8 left-8 font-mono text-[20px] text-white">
              GAME THEORY 101
            </span>
            {/* Play button + Watch Video at bottom */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer shrink-0">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 6.13a1.5 1.5 0 010 2.74l-8.25 4.5A1.5 1.5 0 011 12v-9a1.5 1.5 0 012.25-1.37l8.25 4.5Z" fill="black" stroke="black" strokeWidth="1.15" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-body text-[24px] text-[#B8B8B8]">
                  Watch Video
                </span>
              </div>
              <h3 className="font-display text-[28px] md:text-[34px] font-normal leading-[1]">
                How Society Protocol Works
              </h3>
            </div>
          </div>

          {/* Right: Two stacked resource cards */}
          <div className="flex flex-col gap-6">
            <div className="relative flex-1 p-8 flex flex-col justify-between bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/card-bg.png)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <div>
                <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">
                  Read the Whitepaper
                </h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">
                  Do a deep dive on the technical details.
                </p>
              </div>
              <div className="mt-6">
                <Button href="/learn">READ DOC</Button>
              </div>
            </div>
            <div className="relative flex-1 p-8 flex flex-col justify-between bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/card-bg.png)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <div>
                <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">
                  Explore the Handbook
                </h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">
                  Learn how Society Protocol works.
                </p>
              </div>
              <div className="mt-6">
                <Button href="/learn">READ DOC</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Help Shape CTA */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div
          className="relative rounded-[40px] overflow-hidden border border-[#656464]"
          style={{
            backgroundImage: "url(/images/help-shape.png)",
            backgroundsize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative px-8 md:px-12 pt-16 pb-8 md:pt-20 md:pb-8 max-w-[650px]">
            <h2 className="font-display text-3xl md:text-[42px] font-normal leading-[1] mb-8">
              Help shape the future of humanity
            </h2>
            <p className="font-body text-[20px] text-white leading-[1] mb-8">
              Claim your role in the founding fabric of Society Protocol.
            </p>
              <p className="font-body text-[20px] text-white leading-[1] mb-8">
              By contributing to the movement, you receive a representation of your contribution in our Energy Map.
            </p>
<p className="font-body text-[20px] text-white leading-[1] mb-8">
              Receive early access, help shape the architecture, contribute to the community, and help us pioneer the transition of humanity from Nation States to Synchronized States.
            </p>
            <Button href="/join">INVEST IN SOCIETY PROTOCOL</Button>
          </div>
        </div>
      </section>

      {/* 6. Intro Articles */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="bg-[#10141A] border border-[#656464] rounded-[40px] p-8 md:p-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl md:text-[53px] font-normal leading-[0.7]">
              Explore our Intro Articles
            </h2>
            <div className="hidden md:flex items-center gap-3">
              <button className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors" style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="black" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="black" strokeWidth="2.24" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}/`}
                className="group block relative aspect-[428/599] rounded-[19px] overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            ))}
          </div>
        </div>
      </section>

      {/* Earth background wrapper for sections 7-9 */}
      <div className="relative bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/community-earth-bg.png)" }}>
        {/* Top gradient fade from parent bg into earth image */}
        <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[#0B0F1A] to-transparent pointer-events-none" />
        {/* 7. Community Section */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-8 pb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <h2 className="font-display text-3xl md:text-[53px] font-normal leading-[0.7]">
              Meet our Community
            </h2>
            <p className="font-body text-[21px] text-[#C3C3C3] text-right max-w-[354px]">
              A global network creating the next era of decentralized society.
            </p>
          </div>
        </section>

        {/* 8. Community Cards */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-8 pt-0 pb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {communityCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex flex-col rounded-[40px] bg-[#10141A] border border-[#656464] overflow-hidden hover:border-[#7A7A7A] transition-colors"
              >
                <div className="relative shrink-0" style={{ height: card.imageHeight, marginBottom: -(card.imageHeight - 208) }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-[33px] p-3"
                  />
                </div>
                <div className="flex-1" />
                <div
                  className="relative z-10 mx-3 mb-3 h-[240px] shrink-0 rounded-b-[28px] bg-cover bg-no-repeat bg-bottom p-8 md:p-10"
                  style={{ backgroundImage: "url('/images/community-bottom.png')" }}
                >
                  <img src={card.icon} alt="" className="mb-4 h-8 w-auto" />
                  <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-[20px] text-[#BFBCBC] leading-[117%]">
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 9. Newsletter Section */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-8 pb-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <h2 className="font-display text-4xl md:text-[52px] font-normal leading-[1]">
              Stay Updated on
              <br />
              Project Developments
            </h2>
            <div>
              <NewsletterForm variant="underline" />
              <p className="font-body text-[21px] text-[#AFAEAE] mt-4">
                Subscribe to our newsletter to stay in the loop
              </p>
            </div>
          </div>
        </section>

        {/* Gradient fade to black before footer */}
        <div className="h-[151px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
}

/* Static data */

const communityCards = [
  {
    title: "Join the Discord",
    description:
      "Meet like minded people passionate about building.",
    icon: "/images/community-icon-discord.png",
    image: "/images/community-birds.png",
    imageHeight: 290,
    href: "#",
  },
  {
    title: "Explore the Forum",
    description:
      "A living archive of community-built Society Protocol.",
    icon: "/images/community-icon-forum.png",
    image: "/images/community-sun.png",
    imageHeight: 290,
    href: "#",
  },
  {
    title: "Explore the Codebase",
    description:
      "Journey into our community's open-source repos.",
    icon: "/images/community-icon-codebase.png",
    image: "/images/community-code.png",
    imageHeight: 350,
    href: "#",
  },
];
