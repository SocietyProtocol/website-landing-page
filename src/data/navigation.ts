export const navLinks = [
  { label: "LEARN", href: "/learn" },
  { label: "ABOUT", href: "/about" },
  { label: "JOIN", href: "/join" },
] as const;

export const footerColumns = [
  {
    title: "SITE MAP",
    links: [
      { label: "APP", href: "#" },
      { label: "LEARN", href: "/learn" },
      { label: "ABOUT", href: "/about" },
      { label: "COMMUNITY", href: "#" },
      { label: "ARTICLES", href: "/articles" },
    ],
  },
  {
    title: "REFERENCE",
    links: [
      { label: "GLOSSARY", href: "#" },
      { label: "IDEOLOGY", href: "#" },
    ],
  },
  {
    title: "SOCIALS",
    links: [
      { label: "X", href: "#" },
      { label: "FARCASTER", href: "#" },
      { label: "LENS", href: "#" },
    ],
  },
] as const;

export const socialLinks = [
  { name: "X (Twitter)", href: "#", icon: "x" },
  { name: "Farcaster", href: "#", icon: "farcaster" },
  { name: "Lens", href: "#", icon: "lens" },
] as const;
