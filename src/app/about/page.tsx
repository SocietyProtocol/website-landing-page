import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function About() {
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
        <div className="overflow-hidden rounded-[30px] bg-[length:100%_100%] bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/vector-l72.png)" }}>
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            <div className="relative rounded-[38px] overflow-hidden aspect-[648/416]">
              <img
                src="/images/about-movement.png"
                alt="Building a movement"
                className="absolute inset-0 w-full h-full object-cover"
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
        <p className="font-heading text-[21px] text-[#ADADAD] leading-[1.1] max-w-3xl mb-10">
          Values are the operating system that society functions on. Explore the
          core values that Society Protocol is built around.
        </p>
        <div className="relative rounded-[20px] overflow-hidden w-full aspect-[1160/407] mb-8">
          <img
            src="/images/about-core-values.png"
            alt="Society Protocol core values"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-end md:hidden">
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
      </section>

      {/* 4. Core Team */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="border-t border-[#4F4F4F] mb-16" />
        <h2 className="font-heading text-4xl md:text-[51px] font-normal mb-16">
          Core Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {coreTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] md:w-[165px] md:h-[165px] rounded-full mb-6 relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `1.2px solid ${member.borderColor}` }}
                />
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-[11px] rounded-full object-cover"
                />
              </div>
              <p
                className="font-heading text-lg md:text-[21px] mb-1"
                style={{ color: member.nameColor }}
              >
                {member.name}
              </p>
              <p
                className="font-heading text-lg md:text-[21px]"
                style={{ color: member.titleColor }}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Advisors */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <h2 className="font-heading text-3xl md:text-[42px] font-normal mb-16">
          Advisors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {advisors.map((advisor, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[110px] h-[110px] md:w-[136px] md:h-[136px] rounded-full mb-5 relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `1px solid ${advisor.borderColor}` }}
                />
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="absolute inset-[9px] rounded-full object-cover"
                />
              </div>
              <p
                className="font-heading text-sm md:text-[17px] mb-1"
                style={{ color: advisor.nameColor }}
              >
                {advisor.name}
              </p>
              <p
                className="font-heading text-sm md:text-[17px]"
                style={{ color: advisor.titleColor }}
              >
                {advisor.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* Static data */

const coreTeam = [
  {
    name: "Person Name",
    title: "Co-Founder & CEO",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
  {
    name: "Person Name",
    title: "Co-Founder & CTO",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
  {
    name: "Person Name",
    title: "Head of Research",
    image: "/images/team-placeholder.png",
    borderColor: "#95A47B",
    nameColor: "#95A47B",
    titleColor: "#5B634C",
  },
  {
    name: "Person Name",
    title: "Lead Engineer",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
];

const advisors = [
  {
    name: "Person Name",
    title: "Advisor",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
  {
    name: "Person Name",
    title: "Advisor",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
  {
    name: "Person Name",
    title: "Advisor",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
  {
    name: "Person Name",
    title: "Advisor",
    image: "/images/team-placeholder.png",
    borderColor: "#95A47B",
    nameColor: "#95A47B",
    titleColor: "#5B634C",
  },
  {
    name: "Person Name",
    title: "Advisor",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
  {
    name: "Person Name",
    title: "Advisor",
    image: "/images/team-placeholder.png",
    borderColor: "#C3C3C3",
    nameColor: "#ADADAD",
    titleColor: "#7A7A7A",
  },
];
