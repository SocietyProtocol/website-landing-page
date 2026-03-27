export const navLinks = [
  { label: "LEARN", href: "/learn" },
  { label: "ABOUT", href: "/about" },
  { label: "JOIN", href: "/join" },
  { label: "ARTICLES", href: "/articles" },
] as const;

export const footerColumns = [
  {
    title: "SITE MAP",
    links: [
      { label: "APP", href: "https://staging-society-protocol-client.vercel.app" },
      { label: "LEARN", href: "/learn" },
      { label: "ABOUT", href: "/about" },
      { label: "COMMUNITY", href: "/join" },
      { label: "ARTICLES", href: "/articles" },
    ],
  },
  {
    title: "REFERENCE",
    links: [
      { label: "GLOSSARY", href: "/glossary" },
      { label: "IDEOLOGY", href: "/ideology" },
      { label: "HANDBOOK", href: "/Published/Handbook" },
      { label: "ROADMAP", href: "/roadmap" },
      { label: "CAREERS", href: "/roles" },
    ],
  },
  {
    title: "SOCIALS",
    links: [
      { label: "X", href: "https://x.com/ProtocolSociety" },
      { label: "FARCASTER", href: "https://farcaster.xyz/societyprotocol" },
      { label: "LENS", href: "https://orb.club/@societyprotocol" },
    ],
  },
] as const;

export const socialLinks = [
  { name: "X (Twitter)", href: "https://x.com/ProtocolSociety", icon: "x" },
  { name: "Farcaster", href: "https://farcaster.xyz/societyprotocol", icon: "farcaster" },
  { name: "Lens", href: "https://orb.club/@societyprotocol", icon: "lens" },
] as const;
