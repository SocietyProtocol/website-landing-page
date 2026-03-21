export const navLinks = [
  { label: "LEARN", href: "/learn" },
  { label: "ABOUT", href: "/about" },
  { label: "JOIN", href: "/join" },
] as const;

export const footerColumns = [
  {
    title: "SITE MAP",
    links: [
      { label: "APP", href: "https://staging-society-protocol-client.vercel.app" },
      { label: "LEARN", href: "/learn" },
      { label: "ABOUT", href: "/about" },
      { label: "COMMUNITY", href: "https://discord.com/invite/fpk7eH7aWQ" },
      { label: "ARTICLES", href: "/articles" },
    ],
  },
  {
    title: "REFERENCE",
    links: [
      { label: "GLOSSARY", href: "/glossary" },
      { label: "WHITEPAPER", href: "/whitepaper" },
      { label: "IDEOLOGY", href: "/ideology" },
      // { label: "ROADMAP", href: "#" }, // page doesn't exist yet
      { label: "HANDBOOK", href: "/Published/Handbook" },
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
