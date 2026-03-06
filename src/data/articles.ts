const articleImageMap: Record<string, string> = {
  "How We are Building Society Protocol": "/images/article-building.png",
  "Fake Everything (Prelude)": "/images/article-clocks.png",
  "The State of The State (History)": "/images/article-history.png",
  "The State That Binds (Shared Reality)": "/images/article-shared-reality.png",
  "Synchronized States (The Golden Record)": "/images/article-golden-record.png",
  "The Sovereign Individual (Identity)": "/images/article-identity.png",
  "Energy Is All You Need (Money)": "/images/article-energy.png",
  "Rebalancing Pyramids": "/images/article-pyramids.png",
  "The Redistribution Function (Value System)":
    "/images/article-redistribution.png",
};

export const articles = [
  {
    title: "How We are Building Society Protocol",
    description:
      "A look into how we are building out our team, platform, and incentives",
  },
  {
    title: "Fake Everything (Prelude)",
    description:
      "A diagnosis of Web3\u2019s fatal flaws\u2014and the case for moving beyond asset speculation",
  },
  {
    title: "The State of The State (History)",
    description:
      "From sundials to blockchains: how synchronization determines which civilizations succeed",
  },
  {
    title: "The State That Binds (Shared Reality)",
    description:
      "A look into how we are building out our team, platform, and incentives",
  },
  {
    title: "Synchronized States (The Golden Record)",
    description:
      "A diagnosis of Web3's fatal flaws -- and the case for moving beyond asset speculation",
  },
  {
    title: "The Sovereign Individual (Identity)",
    description:
      "From sundials to blockchains: how synchronization determines which civilizations succeed",
  },
  {
    title: "Energy Is All You Need (Money)",
    description:
      "A look into how we are building out our team, platform, and incentives",
  },
  {
    title: "Rebalancing Pyramids",
    description:
      "A diagnosis of Web3's fatal flaws -- and the case for moving beyond asset speculation",
  },
  {
    title: "The Redistribution Function (Value System)",
    description:
      "From sundials to blockchains: how synchronization determines which civilizations succeed",
  },
].map((article) => ({
  ...article,
  slug: article.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-"),
  image: articleImageMap[article.title],
  content: [
    "We are gathered because we believe something better is possible. Not a utopia — but a system that actually accounts for the complexity of human coordination. Society Protocol is our attempt to build that system: a modular, open-source framework for aligning incentives across communities, organizations, and eventually, entire network states.",
    "The current landscape of digital coordination is fragmented. DAOs struggle with voter apathy, token-gated communities devolve into speculation clubs, and traditional governance systems remain stubbornly centralized. We saw these failures not as reasons for despair, but as design constraints for something new.",
    "At its core, Society Protocol introduces three primitives: synchronized identity, programmable redistribution, and an immutable timeline. Together, these form the foundation for a new kind of social contract — one that is transparent, composable, and resistant to capture by any single entity.",
    "This is not just a technical project. It is a social one. The protocol is only as strong as the community that builds, governs, and evolves it. That is why we are investing as much in culture and coordination as we are in code. The future of human organization will not be built by algorithms alone — it will be built by people who choose to coordinate differently.",
  ],
}));

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
