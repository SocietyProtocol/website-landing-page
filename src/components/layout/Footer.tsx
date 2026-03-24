"use client";

import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "@/data/navigation";
import { useMailchimpSubscribe } from "@/hooks/useMailchimpSubscribe";

export default function Footer() {
  const { email, setEmail, status, message, handleSubscribe, resetStatus } =
    useMailchimpSubscribe();

  return (
    <footer className="relative bg-bg-footer text-text-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 pt-20 pb-10">
        {/* Top section: columns + email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto_auto] gap-x-12 gap-y-10 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[25px] text-text-muted mb-8">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-display text-[21px] text-text-muted hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay Updated */}
          <div className="max-w-[300px] lg:max-w-none">
            <h4 className="font-display text-[25px] text-text-muted mb-8">
              STAY UPDATED
            </h4>
            <form onSubmit={handleSubscribe}>
              <div className="flex items-center border-b border-white pb-2">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); resetStatus(); }}
                  className="bg-transparent font-display text-[16px] lg:text-[25px] text-text-muted placeholder:text-text-muted flex-1 min-w-0 outline-none"
                  required
                />
                <span className="text-[#CFCFCF] mx-2 font-display text-[16px] lg:text-[25px]">|</span>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="font-display text-[16px] lg:text-[25px] text-[#CFCFCF] hover:text-white transition-colors shrink-0"
                >
                  SUBMIT
                </button>
              </div>
              {status === "success" && (
                <p className="font-display text-[14px] text-green-400 mt-2">{message}</p>
              )}
              {status === "error" && (
                <p className="font-display text-[14px] text-red-400 mt-2">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-white mb-10" />

        {/* Large SOCIETY PROTOCOL text + logo */}
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-10">
          <Image
            src="/Vector G148.png"
            alt="Society Protocol Logo"
            width={100}
            height={100}
            className="h-[60px] md:h-[100px] w-auto brightness-0 invert md:order-2"
          />
          <h2 className="font-display text-[60px] md:text-[105px] leading-[100px] tracking-[-0.02em] text-white text-center md:text-left md:order-1">
            SOCIETY PROTOCOL
          </h2>
        </div>

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

    </footer>
  );
}
