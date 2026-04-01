import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { getIntroPosts } from "@/lib/mdx";
import ShuffledArticles from "@/components/ui/ShuffledArticles";
import VideoPlayer from "@/components/ui/VideoPlayer";
import mediaCids from "@/data/media-cids.json";

export const metadata: Metadata = { title: "Home" };

export default function Home() {
  const articles = getIntroPosts();

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* 1. Hero */}
      <section className="relative max-w-[1400px] mx-auto px-8 pt-32 lg:pt-56 pb-24">
        {/* Mobile (<640px): stacked layout with static PNG */}
        <div className="flex flex-col items-center sm:hidden">
          <Image
            src="/images/hero-sphere.png"
            alt="Abstract visualization"
            width={500}
            height={500}
            className="w-[80%] max-w-[500px] h-auto object-contain mix-blend-lighten pointer-events-none"
          />
          <h1 className="font-display text-5xl font-normal leading-[109%] tracking-[0.002em] text-center mt-4">
            The future
            <br />
            of human
            <br />
            coordination
          </h1>
        </div>
        {/* sm-lg (640px-1023px): stacked layout with animated GIF */}
        <div className="hidden sm:flex sm:flex-col sm:items-center lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mediaCids["state-sphere-loop.gif"]}
            loading="lazy"
            alt="Abstract visualization"
            width={500}
            height={500}
            className="w-[80%] max-w-[500px] h-auto object-contain mix-blend-lighten pointer-events-none"
          />
          <h1 className="font-display text-5xl font-normal leading-[109%] tracking-[0.002em] text-center mt-4">
            The future
            <br />
            of human
            <br />
            coordination
          </h1>
        </div>
        {/* Desktop (>=1024px): side-by-side layout with animated GIF */}
        <div className="relative min-h-[600px] hidden lg:flex items-center">
          <div className="relative z-10 max-w-[511px]">
            <h1 className="font-display text-[80.69px] font-normal leading-[109%] tracking-[0.002em]">
              The future
              <br />
              of human
              <br />
              coordination
            </h1>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mediaCids["state-sphere-loop.gif"]}
            loading="lazy"
            alt="Abstract visualization"
            width={977}
            height={977}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] max-w-[977px] h-auto object-contain mix-blend-lighten pointer-events-none"
          />
        </div>
      </section>

      {/* 2. App Screenshot + Description (side-by-side) */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left: App screenshot */}
          <div className="relative rounded-[30px] overflow-hidden border border-[#6B6B6B] md:max-w-[70%] mx-auto lg:max-w-none">
            <Image
              src="/images/rectangle.png"
              alt="Society Protocol app"
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-[14px] invisible"
              aria-hidden="true"
            />
            <VideoPlayer
              src={mediaCids["narrative-video-sp.mp4"]}
              poster="/images/rectangle.png"
              title=""
              label=""
            />
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
          <Image
            src="/images/blue-fire.png"
            alt=""
            width={1400}
            height={189}
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 4. Game Theory 101 / Learning Resources */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        {/* Mobile: video on top, cards side by side below */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <div className="relative rounded-[20px] overflow-hidden aspect-[925/555] w-full md:w-[70%]">
            <VideoPlayer
              src={mediaCids["game-theory-video2.mp4"]}
              poster="/images/game_theory_thumbnail.png"
              title="How Society Protocol Works"
              label="GAME THEORY 101"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="relative flex-1 p-8 flex flex-col justify-between bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/card-bg.png)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <div>
                <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">Read the Whitepaper</h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">Do a deep dive on the technical details.</p>
              </div>
              <div className="mt-6"><Button href="/whitepaper">READ DOC</Button></div>
            </div>
            <div className="relative flex-1 p-8 flex flex-col justify-between bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/card-bg.png)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <div>
                <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">Explore the Handbook</h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">Learn how Society Protocol works.</p>
              </div>
              <div className="mt-6"><Button href="/Published/Handbook">READ DOC</Button></div>
            </div>
          </div>
        </div>

        {/* Desktop: original side-by-side layout */}
        <div className="hidden lg:grid grid-cols-[3fr_2fr] gap-6">
          <div className="relative rounded-[20px] overflow-hidden aspect-[925/555]">
            <VideoPlayer
              src={mediaCids["game-theory-video2.mp4"]}
              poster="/images/game_theory_thumbnail.png"
              title="How Society Protocol Works"
              label="GAME THEORY 101"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative flex-1 p-8 flex flex-col justify-between bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/card-bg.png)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <div>
                <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">Read the Whitepaper</h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">Do a deep dive on the technical details.</p>
              </div>
              <div className="mt-6"><Button href="/whitepaper">READ DOC</Button></div>
            </div>
            <div className="relative flex-1 p-8 flex flex-col justify-between bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/card-bg.png)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <div>
                <h3 className="font-display text-[30px] font-normal leading-[1] mb-3">Explore the Handbook</h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">Learn how Society Protocol works.</p>
              </div>
              <div className="mt-6"><Button href="/Published/Handbook">READ DOC</Button></div>
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
            backgroundSize: "cover",
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
            <Button href="https://staging-society-protocol-client.vercel.app/spec-token">INVEST IN SOCIETY PROTOCOL</Button>
          </div>
        </div>
      </section>

      {/* 6. Intro Articles */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        {articles.length > 0 && (
        <div className="bg-[#10141A] border border-[#656464] rounded-[40px] p-8 md:p-10">
          <ShuffledArticles articles={articles} />
        </div>
        )}
      </section>

      {/* Earth background wrapper for sections 7-9 */}
      <div className="relative bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/community-earth-bg.png)" }}>
        {/* Top gradient fade from parent bg into earth image */}
        <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[#0B0F1A] to-transparent pointer-events-none" />
        {/* 7. Community Section */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-8 pb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
            <h2 className="font-display text-3xl md:text-[53px] font-normal leading-[0.7]">
              Meet our Community
            </h2>
            <p className="font-body text-[21px] text-[#C3C3C3] lg:text-right max-w-[354px]">
              A global network creating the next era of decentralized society.
            </p>
          </div>
        </section>

        {/* 8. Community Cards */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-8 pt-0 pb-32">
          <div className="grid lg:grid-cols-3 gap-8 max-w-[70%] md:max-w-[49%] mx-auto lg:max-w-none">
            {communityCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex flex-col rounded-[40px] bg-[#10141A] border border-[#656464] overflow-hidden hover:border-[#7A7A7A] transition-colors"
              >
                <div className="relative shrink-0" style={{ height: card.imageHeight, marginBottom: -(card.imageHeight - 208) }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 70vw"
                    className="object-cover rounded-[33px] p-3"
                  />
                </div>
                <div className="flex-1" />
                <div
                  className="relative z-10 mx-3 mb-3 h-[240px] shrink-0 rounded-b-[28px] bg-cover bg-no-repeat bg-bottom p-8 md:p-10"
                  style={{ backgroundImage: "url('/images/community-bottom.png')" }}
                >
                  <Image src={card.icon} alt="" width={32} height={32} className="mb-4 h-8 w-auto" />
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
    href: "https://discord.com/invite/fpk7eH7aWQ",
  },
  {
    title: "Explore the Forum",
    description:
      "A living archive of community-built Society Protocol.",
    icon: "/images/community-icon-forum.png",
    image: "/images/community-sun.png",
    imageHeight: 290,
    href: "https://forum.societyprotocol.io",
  },
  {
    title: "Explore the Codebase",
    description:
      "Journey into our community's open-source repos.",
    icon: "/images/community-icon-codebase.png",
    image: "/images/community-code.png",
    imageHeight: 350,
    href: "https://github.com/SocietyProtocol",
  },
];
