"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[21.283px] tracking-[0.002em] text-white bg-[#131313] border border-[#656565] rounded-[111px] pr-4 pl-1 h-[42px]"
        >
          <Image
            src="/Vector Home Page.png"
            alt="Society Protocol Logo"
            width={31}
            height={33}
          />
          SOCIETY PROTOCOL
        </Link>

        {/* Pill nav — desktop only */}
        <nav className="hidden lg:flex items-center gap-1 rounded-[111px] border border-[#656565] bg-[#151515] px-2 py-1.5">
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
            href="https://staging-society-protocol-client.vercel.app"
            className="hidden lg:flex items-center gap-8 font-mono text-xs text-[#808080] bg-[#131313] rounded-[111px] border border-[#808080] pl-4 pr-10 h-[42px] hover:text-white hover:border-white/60 transition-colors"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#0AB6D4]" />
            GO TO APP
          </a>
          <a
            href="https://staging-society-protocol-client.vercel.app/auction"
            className="hidden lg:flex font-mono text-[16px] tracking-[0.03em] bg-white text-black rounded-[38px] px-6 h-[42px] hover:bg-white/90 transition-colors items-center gap-2"
          >
            INVEST IN THE ICO
            <ChevronIcon />
          </a>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex lg:hidden items-center justify-center w-[42px] h-[42px] bg-[#131313] border border-[#656565] rounded-full transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L16 16M16 2L2 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H17M1 7H17M1 13H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0c0f16]/95 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <nav
          className={`flex flex-col items-center justify-center gap-8 h-full transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-8"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`flex items-center justify-center font-mono text-sm tracking-widest rounded-[111px] border px-10 h-[42px] transition-colors ${
                pathname === link.href.replace(/\/$/, "")
                  ? "bg-white text-black border-white"
                  : "bg-[#131313] text-white border-[#808080] hover:text-white/80 hover:border-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://staging-society-protocol-client.vercel.app"
            onClick={closeMenu}
            className="flex items-center gap-8 font-mono text-sm text-[#808080] bg-[#131313] rounded-[111px] border border-[#808080] pl-4 pr-10 h-[42px] hover:text-white hover:border-white/60 transition-colors"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#0AB6D4]" />
            GO TO APP
          </a>

          <a
            href="https://staging-society-protocol-client.vercel.app/auction"
            onClick={closeMenu}
            className="font-mono text-[16px] tracking-[0.03em] bg-white text-black rounded-[38px] px-6 h-[42px] hover:bg-white/90 transition-colors flex items-center gap-2"
          >
            INVEST IN THE ICO
            <ChevronIcon />
          </a>
        </nav>
      </div>
    </>
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
