import type { Metadata } from "next";
import Image from "next/image";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { XIcon, FarcasterIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = { title: "Join" };

export default function Join() {
  return (
    <div
      className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]"
      style={{ backgroundImage: "url(/images/group-131-bg.png)" }}
    >
      {/* 1. Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Mission Statement
        </span>
        <h1 className="font-heading text-5xl md:text-[66px] font-normal leading-[1] max-w-4xl">
          Help shape the future of humanity
        </h1>
      </section>

      {/* 2. All Cards */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Newsletter Card - mobile (under sm): Discord card style */}
          <div
            className="sm:hidden md:col-span-2 lg:col-span-4 lg:order-2 relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968]"
            style={{ backgroundImage: "url(/images/vector-l58.png" }}
          >
            <Image
              src="/images/vector-l59.png"
              alt=""
              fill
              sizes="100vw"
              className="object-fill z-[1]"
              aria-hidden="true"
            />
            <div className="relative z-[2] flex flex-col justify-between h-full px-8 py-10">
              <h3 className="font-display text-[38px] font-normal leading-[1] text-white max-w-[648px]">
                Stay Updated
                <br /> on Project
                <br /> Developments
              </h3>
              <div className="mt-auto">
                <NewsletterForm variant="compact" />
                <p className="font-body text-[20px] text-white mt-3">
                  Subscribe to our newsletter to stay in the loop
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Card - desktop (sm+): original style */}
          <div className="hidden sm:flex md:col-span-2 lg:col-span-4 lg:order-2 relative flex-col justify-between rounded-[38px] aspect-[1781/968]">
            <Image
              src="/images/stay-updated-bg.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 67vw, 100vw"
              className="object-cover rounded-[38px]"
              aria-hidden="true"
            />
            <Image
              src="/images/vector-l65-1.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 67vw, 100vw"
              className="object-fill z-30"
              aria-hidden="true"
            />
            <div className="relative z-40 flex flex-col justify-between h-full px-10 py-10">
              <h3 className="font-display text-[52px] font-normal leading-[1] text-white max-w-[648px]">
                Stay Updated
                <br className="lg:hidden" /> on Project
                <br className="lg:hidden" /> Developments
              </h3>
              <div className="mt-auto">
                <NewsletterForm variant="underline" />
                <p className="font-body text-[20px] text-[#C2C2C2] mt-3">
                  Subscribe to our newsletter to stay in the loop
                </p>
              </div>
            </div>
          </div>

          {/* Discord Card */}
          <a
            href="https://discord.com/invite/fpk7eH7aWQ"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968] lg:col-span-2 lg:order-1"
            style={{ backgroundImage: "url(/images/join-the-discord-bg.png)" }}
          >
            <Image
              src="/images/vector-l59.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-fill z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-2 min-h-[220px] shrink-0 px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l60-1.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Join the Discord
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* Forum Card */}
          <a
            href="https://forum.societyprotocol.io"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968] lg:col-span-2 lg:order-3"
            style={{ backgroundImage: "url(/images/explore-the-forum-bg.png)" }}
          >
            <Image
              src="/images/vector-l59.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-fill z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-2 min-h-[220px] shrink-0 px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l60-1.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Explore the Forum
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* VIP Community Card */}
          <a
            href="https://staging-society-protocol-client.vercel.app/profile"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968] lg:col-span-2 lg:order-4"
            style={{ backgroundImage: "url(/images/join-the-vip-bg.png)" }}
          >
            <Image
              src="/images/vector-l59.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-fill z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-2 min-h-[220px] shrink-0 px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l60-1.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Join the VIP Community
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* Codebase Card */}
          <a
            href="https://github.com/SocietyProtocol"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968] lg:col-span-2 lg:order-5"
            style={{ backgroundImage: "url(/images/vector-l52-1.png)" }}
          >
            <Image
              src="/images/vector-l59.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-fill z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-2 min-h-[220px] shrink-0 px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l60-1.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Explore the Codebase
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* Join The Team Card */}
          <div className="md:col-span-2 lg:col-span-4 lg:order-6 relative flex flex-col justify-between rounded-[38px] aspect-[4/3] sm:aspect-[1781/968]">
            <Image
              src="/images/join-the-team-bg.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 67vw, 100vw"
              aria-hidden="true"
            />
            <Image
              src="/images/join-the-team-border.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 67vw, 100vw"
              className="object-fill z-30"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10">
              <h3 className="font-display text-[52px] font-normal leading-[1] text-white max-w-[648px]">
                Join The Team
              </h3>
              <div className="mt-auto">
                <p className="font-body text-[20px] text-[#C2C2C2] mt-3">
                  Help us build the future of human coordination
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-2 lg:col-span-2 lg:order-7 flex flex-col">
            <h2 className="font-display text-3xl md:text-[41px] font-normal mb-8">
              Follow Us
            </h2>
            <div className="flex flex-col gap-8">
              {/* X */}
              <a
                href="https://x.com/ProtocolSociety"
                className="flex items-center gap-4 rounded-[38px] bg-[#151515] border border-[#4F4F4F] px-6 h-[92px] hover:border-white/30 transition-colors"
              >
                <XIcon className="w-[33px] h-[33px]" />
                <span className="font-body text-[23px] text-white">X</span>
                <svg
                  className="ml-auto w-4 h-4 text-[#5A5A5A]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Farcaster */}
              <a
                href="https://farcaster.xyz/societyprotocol"
                className="flex items-center gap-4 rounded-[38px] bg-[#151515] border border-[#4F4F4F] px-6 h-[92px] hover:border-white/30 transition-colors"
              >
                <FarcasterIcon className="w-[33px] h-[33px]" />
                <span className="font-body text-[23px] text-white">
                  Farcaster
                </span>
                <svg
                  className="ml-auto w-4 h-4 text-[#5A5A5A]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Lens */}
              <a
                href="https://orb.club/@societyprotocol"
                className="flex items-center gap-4 rounded-[38px] bg-[#151515] border border-[#4F4F4F] px-6 h-[92px] hover:border-white/30 transition-colors"
              >
                <Image
                  src="/images/vector-l49.png"
                  alt="Lens"
                  width={37}
                  height={33}
                />
                <span className="font-body text-[23px] text-white">Lens</span>
                <svg
                  className="ml-auto w-4 h-4 text-[#5A5A5A]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

