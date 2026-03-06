import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ScrollContainer from "@/components/ui/ScrollContainer";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Learn" };

export default function Learn() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/group-131-bg.png)" }}
    >
      {/* 1. Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Learn About Society Protocol
        </span>
        <h1 className="font-display text-5xl md:text-[80.69px] font-normal leading-[0.7]">
          How society protocol works
        </h1>
      </section>

      {/* 2. Featured Video + Topic Sidebar */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Featured Video Card */}
          <div className="relative rounded-[38px] overflow-hidden border border-[#656464] aspect-[897/484]">
            <img
              src="/images/video-thumbnail.png"
              alt="How Society Protocol Works"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(17,17,17,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0 cursor-pointer pl-[3px]">
                  <svg
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 9.77a1.5 1.5 0 0 1 0 2.46L3.25 21.6a1.5 1.5 0 0 1-2.25-1.23V2.63A1.5 1.5 0 0 1 3.25.4L17.5 9.77Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="1.15"
                      rx="2.3"
                    />
                  </svg>
                </div>
                <span className="font-body text-[24px] text-white">
                  Game Theory
                </span>
              </div>
              <h3 className="font-display text-[34px] font-normal leading-none text-white">
                How Society Protocol Works
              </h3>
            </div>
          </div>

          {/* Video Topic List */}
          <div className="min-h-0">
            <ScrollContainer maxHeight="100%" className="h-full">
              <div className="flex flex-col gap-5 h-full">
                {videoTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="rounded-[33px] border border-[#898989] bg-[#0F121C] p-5 flex items-center gap-4 flex-1"
                  >
                    <div className="relative rounded-[13px] overflow-hidden w-[141px] h-[87px] shrink-0">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.405) 0%, rgba(0,0,0,0.765) 100%)",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[21px] h-[21px] rounded-full bg-white flex items-center justify-center pl-[1px]">
                          <svg
                            width="8"
                            height="10"
                            viewBox="0 0 8 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 4.13a1 1 0 0 1 0 1.74L1.75 9.1A1 1 0 0 1 .25 8.23V1.77A1 1 0 0 1 1.75.9L7 4.13Z"
                              fill="black"
                              stroke="black"
                              strokeWidth="1.15"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-[18px] font-normal leading-tight">
                        {topic.title}
                      </h4>
                      <p className="font-body text-[14px] text-[#6C7280] mt-1">
                        {topic.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollContainer>
          </div>
        </div>
      </section>

      {/* 3. Resource Cards Row */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {resourceCards.map((card, i) => (
            <div
              key={i}
              className="relative flex-1 p-8 flex flex-col justify-between min-h-[270px] bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/card-bg.png')",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div>
                <h3 className="font-display text-2xl md:text-[30px] font-normal leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-[20px] text-[#7A7A7A]">
                  {card.description}
                </p>
              </div>
              <div className="mt-6">
                <Button href="#">READ DOC</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Intro Articles Container */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="rounded-[40px] bg-[#10141A] border border-[#6B6B6B] p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-[52.69px] font-normal leading-[0.7] mb-10">
            Explore our Intro Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
            {articles.slice(0, 9).map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}/`}
                className="group block"
              >
                <div className="relative aspect-[428/599] rounded-[19px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-xl md:text-[32px] font-normal leading-none text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="font-body text-[20px] leading-[119%] text-[#ADADAD]">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Static data */

const videoTopics = [
  {
    title: "An Immutable Timeline",
    duration: "(3:02)",
    image: "/images/hero-sphere.png",
  },
  {
    title: "Identity & Trust Layers",
    duration: "(4:15)",
    image: "/images/history.png",
  },
  {
    title: "The Redistribution Function",
    duration: "(2:48)",
    image: "/images/redistribution.png",
  },
];

const resourceCards = [
  {
    title: "Read the Whitepaper",
    description: "Do a deep dive on the technical details.",
  },
  {
    title: "Explore the Handbook",
    description: "Learn how Society Protocol works.",
  },
  {
    title: "Explore the Glossary",
    description: "Understand our terminology.",
  },
];
