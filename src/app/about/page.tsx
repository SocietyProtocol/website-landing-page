import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// import { getCoreTeam, getAdvisors } from "@/lib/mdx";
// import { SocialLinks } from "@/components/ui/SocialIcons";

export const metadata: Metadata = { title: "About" };

export default function About() {
  // const coreTeam = getCoreTeam();
  // const advisors = getAdvisors();
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* 1. Mission Statement Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Mission Statement
        </span>
        <h1 className="font-display text-3xl md:text-[44px] font-normal leading-[1] max-w-4xl">
          Rewiring society for a future where people, not institutions, own
          their identity, trust, and value.
        </h1>
      </section>

      {/* 2. Building a Movement */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        {/* Mobile/Tablet: about-movement as bg image */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden aspect-[648/416] mb-6">
            <Image
              src="/images/about-movement.png"
              alt="Building a movement"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-[32px] font-normal mb-6">
              Building a movement
            </h2>
            <p className="font-body text-[20px] text-[#ADADAD] leading-[1.1]">
              We are gathered because society is on the verge of a radical
              transformation driven by sheer technological innovation from
              Nation States to Synchronized States. We believe that
              Synchronized States are the evolution to Nation States because of
              clearly discernible advantages and offer the promise of a better
              world for humanity.
            </p>
            <p className="font-body text-[20px] text-[#ADADAD] leading-[1.1] mt-6">
              We are gathered as a distributed and decentralized movement to
              fulfill the promise of accomplishing this transition while
              remaining true to its ideological foundations.
            </p>
          </div>
        </div>
        {/* Desktop: original two-column layout with vector bg */}
        <div className="hidden lg:block overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/vector-l72.png)" }}>
          <div className="grid grid-cols-2 gap-8 p-10">
            <div className="relative overflow-hidden aspect-[648/416]">
              <Image
                src="/images/about-movement.png"
                alt="Building a movement"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-[32px] font-normal mb-6">
                Building a movement
              </h2>
              <p className="font-body text-[20px] text-[#ADADAD] leading-[1.1]">
                We are gathered because society is on the verge of a radical
                transformation driven by sheer technological innovation from
                Nation States to Synchronized States. We believe that
                Synchronized States are the evolution to Nation States because of
                clearly discernible advantages and offer the promise of a better
                world for humanity.
              </p>
              <p className="font-body text-[20px] text-[#ADADAD] leading-[1.1] mt-6">
                We are gathered as a distributed and decentralized movement to
                fulfill the promise of accomplishing this transition while
                remaining true to its ideological foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore Our Core Values */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="flex items-start justify-between mb-4">
          <h2 className="font-heading text-3xl md:text-[42px] font-normal">
            Explore Our Core Values
          </h2>
          <Link
            href="/learn"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[18px] bg-white text-black rounded-[38px] px-8 py-3 hover:bg-white/90 transition-colors shrink-0"
          >
            EXPLORE OUR IDEOLOGY
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="flex md:hidden mb-6">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 font-mono text-[18px] bg-white text-black rounded-[38px] px-8 py-3 hover:bg-white/90 transition-colors"
          >
            EXPLORE OUR IDEOLOGY
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <p className="font-heading text-[21px] text-[#ADADAD] leading-[1.1] max-w-3xl mb-10">
          Values are the operating system that society functions on. Explore the
          core values that Society Protocol is built around.
        </p>
        <div className="relative rounded-[20px] overflow-hidden w-full aspect-[1160/407] mb-8">
          <Image
            src="/images/about-core-values.png"
            alt="Society Protocol core values"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 4. Core Team - hidden until ready
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="border-t border-[#4F4F4F] mb-16" />
        <h2 className="font-heading text-4xl md:text-[51px] font-normal mb-16">
          Core Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {coreTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] md:w-[165px] md:h-[165px] rounded-full mb-6 flex items-center justify-center" style={{ border: "1.2px solid #C3C3C3" }}>
                <Image
                  src={member.image}
                  alt={member.title}
                  width={143}
                  height={143}
                  className="w-[118px] h-[118px] md:w-[143px] md:h-[143px] rounded-full object-cover"
                />
              </div>
              <p className="font-heading text-lg md:text-[21px] mb-1 text-[#ADADAD]">
                {member.title}
              </p>
              <p className="font-heading text-lg md:text-[21px] text-[#7A7A7A]">
                {member.jobTitle}
              </p>
              <SocialLinks socials={{ x: member.xUrl, farcaster: member.farcasterUrl, lens: member.lensUrl }} />
            </div>
          ))}
        </div>
      </section>
      */}

      {/* 5. Advisors - hidden until ready
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <h2 className="font-heading text-3xl md:text-[42px] font-normal mb-16">
          Advisors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {advisors.map((advisor, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[110px] h-[110px] md:w-[136px] md:h-[136px] rounded-full mb-5 flex items-center justify-center" style={{ border: "1px solid #C3C3C3" }}>
                <Image
                  src={advisor.image}
                  alt={advisor.title}
                  width={118}
                  height={118}
                  className="w-[92px] h-[92px] md:w-[118px] md:h-[118px] rounded-full object-cover"
                />
              </div>
              <p className="font-heading text-sm md:text-[17px] mb-1 text-[#ADADAD]">
                {advisor.title}
              </p>
              <p className="font-heading text-sm md:text-[17px] text-[#7A7A7A]">
                {advisor.jobTitle}
              </p>
              <SocialLinks socials={{ x: advisor.xUrl, farcaster: advisor.farcasterUrl, lens: advisor.lensUrl }} />
            </div>
          ))}
        </div>
      </section>
      */}

      {/* 6. Community Partners - hidden until ready
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <h2 className="font-display text-3xl md:text-[42px] font-normal mb-12">
          Community Partners
        </h2>
        <div className="flex flex-wrap items-center gap-10">
          <Image
            src="/images/linux-foundation.png"
            alt="Linux Foundation"
            width={243}
            height={95}
            className="object-contain"
          />
        </div>
      </section>
      */}
    </div>
  );
}

