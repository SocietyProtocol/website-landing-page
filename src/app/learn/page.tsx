import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import VideoPlayer from "@/components/ui/VideoPlayer";
import mediaCids from "@/data/media-cids.json";
// TODO: Uncomment when side videos are done
// import ScrollContainer from "@/components/ui/ScrollContainer";
import ArticleGrid from "@/components/ui/ArticleGrid";
import { getIntroPosts } from "@/lib/mdx";

export const metadata: Metadata = { title: "Learn" };

export default function Learn() {
  const articles = getIntroPosts();

  return (
    <div
      className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]"
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
        {/* TODO: Restore lg:grid-cols-[2fr_1fr] when side videos are done */}
        <div className="grid gap-8">
          {/* Featured Video Card */}
          <div className="relative rounded-[38px] overflow-hidden border border-[#656464] aspect-[897/484]">
            <VideoPlayer
              src={mediaCids["narrative-video-sp.mp4"]}
              poster="/images/video-thumbnail.png"
              title="How Society Protocol Works"
              label="GAME THEORY 101"
            />
          </div>

          {/* TODO: Uncomment when side videos are done
          <div className="min-h-0">
            <ScrollContainer maxHeight="100%" className="h-full">
              <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-col gap-5 h-full md:justify-center">
                {videoTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="rounded-[33px] border border-[#898989] bg-[#0F121C] p-5 flex items-center gap-4 md:w-[45%] lg:flex-1 lg:w-auto"
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
          */}
        </div>
      </section>

      {/* 3. Resource Cards Row */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap gap-6">
          {resourceCards.map((card, i) => (
            <div
              key={i}
              className="relative p-8 flex flex-col justify-between min-h-[270px] bg-[length:100%_100%] bg-center bg-no-repeat md:w-[45%] lg:flex-1 lg:w-auto"
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
                <Button href={card.href}>READ DOC</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Intro Articles Container */}
      {articles.length > 0 && (
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="bg-[#10141A] border border-[#656464] rounded-[40px] p-8 md:p-10">
          <ArticleGrid articles={articles} />
        </div>
      </section>
      )}
    </div>
  );
}

/* Static data */

const resourceCards = [
  {
    title: "Read the Whitepaper",
    description: "Do a deep dive on the technical details.",
    href: "#",
  },
  {
    title: "Explore the Handbook",
    description: "Learn how Society Protocol works.",
    href: "/Published/Handbook",
  },
  {
    title: "Explore the Glossary",
    description: "Understand our terminology.",
    href: "/glossary",
  },
];
