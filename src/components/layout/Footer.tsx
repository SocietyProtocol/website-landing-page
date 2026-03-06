"use client";

import Link from "next/link";
import { footerColumns } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative bg-bg-footer text-text-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 pt-20 pb-10">
        {/* Top section: columns + email */}
        <div className="grid grid-cols-2 md:grid-cols-[auto_auto_auto_auto] gap-x-12 gap-y-10 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[25px] text-text-muted mb-8">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <a
                        href="#"
                        className="font-display text-[21px] text-text-muted hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-display text-[21px] text-text-muted hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay Updated */}
          <div>
            <h4 className="font-display text-[25px] text-text-muted mb-8">
              STAY UPDATED
            </h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center border-b border-white pb-2">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent font-display text-[25px] text-text-muted placeholder:text-text-muted flex-1 outline-none"
                />
                <span className="text-[#CFCFCF] mx-2 font-display text-[25px]">|</span>
                <button
                  type="submit"
                  className="font-display text-[25px] text-[#CFCFCF] hover:text-white transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-white mb-10" />

        {/* Large SOCIETY PROTOCOL text */}
        <h2 className="font-display text-[60px] md:text-[105px] leading-[100px] tracking-[0.002em] text-white mb-10">
          SOCIETY PROTOCOL
        </h2>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-[21px] text-text-muted">
            SOCIETY PROTOCOL
          </p>
          <p className="font-heading text-[21px] text-text-muted text-center">
            LEGAL | CREDITS
          </p>
          <p className="font-heading text-[21px] text-text-muted text-right">
            COPYRIGHT 2026
          </p>
        </div>
      </div>

      {/* Globe vector SVG (bottom-right) */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="white"
            strokeWidth="0.5"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="180"
            stroke="white"
            strokeWidth="0.5"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="50"
            ry="180"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="20"
            y1="140"
            x2="380"
            y2="140"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="20"
            y1="200"
            x2="380"
            y2="200"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="20"
            y1="260"
            x2="380"
            y2="260"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </footer>
  );
}
