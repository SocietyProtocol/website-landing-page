"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, "") || "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 max-w-[1600px] mx-auto">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 font-display text-[21.283px] tracking-[0.002em] text-white bg-[#131313] border border-[#656565] rounded-[111px] pr-4 pl-1 h-[42px]"
      >
        <img
          src="/Vector Home Page.png"
          alt="Society Protocol Logo"
          width="31"
          height="33"
        />
        SOCIETY PROTOCOL
      </Link>

      {/* Pill nav */}
      <nav className="hidden md:flex items-center gap-1 rounded-[111px] border border-[#656565] bg-[#151515] px-2 py-1.5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-mono text-xs tracking-widest px-5 py-2 rounded-full transition-colors ${
              pathname === link.href.replace(/\/$/, "")
                ? "bg-white text-black"
                : "text-white hover:text-white/80"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <a
          href="#"
          className="hidden md:flex items-center gap-8 font-mono text-xs text-[#808080] bg-[#131313] rounded-[111px] border border-[#808080] pl-4 pr-10 h-[42px] hover:text-white hover:border-white/60 transition-colors"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[#0AB6D4]" />
          GO TO APP
        </a>
        <a
          href="#"
          className="font-mono text-[16px] tracking-[0.03em] bg-white text-black rounded-[38px] px-6 h-[42px] hover:bg-white/90 transition-colors flex items-center gap-2"
        >
          INVEST IN THE ICO
          <ChevronIcon />
        </a>
      </div>
    </header>
  );
}

function ChevronIcon() {
  return (
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
        strokeWidth="2.24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
