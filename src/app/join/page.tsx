import type { Metadata } from "next";
import NewsletterForm from "@/components/ui/NewsletterForm";

export const metadata: Metadata = { title: "Join" };

export default function Join() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/group-131-bg.png)" }}
    >
      {/* 1. Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Mission Statement
        </span>
        <h1 className="font-heading text-5xl md:text-[66px] font-normal leading-[1] max-w-4xl">
          Help shape the future of humanity
        </h1>
      </section>

      {/* 2. Top Cards Row */}
      <section className="max-w-[1400px] mx-auto px-8 pb-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Discord Card */}
          <a
            href="#"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968]"
            style={{ backgroundImage: "url(/images/vector-l58.png)" }}
          >
            <img
              src="/images/vector-l59.png"
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-3 min-h-[220px] shrink-0 rounded-b-[28px] px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l57.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Join the Discord
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* Newsletter Card */}
          <div className="md:col-span-2 relative flex flex-col justify-between rounded-[38px] aspect-[1781/968]">
            <img
              src="/images/vector-l64-1.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[38px]"
              aria-hidden="true"
            />
            <img
              src="/images/vector-l65-1.png"
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10">
              <h3 className="font-display text-[52px] font-normal leading-[1] text-white max-w-[648px]">
                Stay Updated on Project Developments
              </h3>
              <div className="mt-auto">
                <NewsletterForm variant="underline" />
                <p className="font-body text-[20px] text-[#C2C2C2] mt-3">
                  Subscribe to our newsletter to stay in the loop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Cards Row */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Forum Card */}
          <a
            href="#"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968]"
            style={{ backgroundImage: "url(/images/vector-l58.png)" }}
          >
            <img
              src="/images/vector-l59.png"
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-3 min-h-[220px] shrink-0 rounded-b-[28px] px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l57.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Explore the Forum
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* VIP Community Card */}
          <a
            href="#"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968]"
            style={{ backgroundImage: "url(/images/vector-l58.png)" }}
          >
            <img
              src="/images/vector-l59.png"
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-3 min-h-[220px] shrink-0 rounded-b-[28px] px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l57.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Join the VIP Community
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>

          {/* Codebase Card */}
          <a
            href="#"
            className="group relative flex flex-col justify-end bg-[length:100%_100%] bg-center bg-no-repeat aspect-[870/968]"
            style={{ backgroundImage: "url(/images/vector-l52.png)" }}
          >
            <img
              src="/images/vector-l59.png"
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none z-20"
              aria-hidden="true"
            />
            <div
              className="relative z-10 mx-3 mb-3 min-h-[220px] shrink-0 rounded-b-[28px] px-8 pb-8 pt-12 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/vector-l57.png)" }}
            >
              <h3 className="font-display text-[38px] font-normal leading-[1] mb-2">
                Explore the Codebase
              </h3>
              <p className="font-body text-[20px] text-[#BFBCBC]">
                Meet like minded people passionate about building.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* 4. Social Media */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <h2 className="font-display text-3xl md:text-[41px] font-normal mb-10">
          Follow Us on Social Media
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* X */}
          <a
            href="https://x.com"
            className="flex items-center gap-4 rounded-[38px] bg-[#151515] border border-[#4F4F4F] px-6 h-[99px] hover:border-text-muted transition-colors"
          >
            <SocialIcon name="x" />
            <span className="font-body text-[23px] text-white">X</span>
            <svg
              className="ml-auto w-4 h-4 text-white"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Farcaster */}
          <a
            href="https://warpcast.com"
            className="flex items-center gap-4 rounded-[38px] bg-[#151515] border border-[#4F4F4F] px-6 h-[99px] hover:border-text-muted transition-colors"
          >
            <SocialIcon name="farcaster" />
            <span className="font-body text-[23px] text-white">Farcaster</span>
            <svg
              className="ml-auto w-4 h-4 text-white"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Lens */}
          <a
            href="https://lens.xyz"
            className="flex items-center gap-4 rounded-[38px] bg-[#151515] border border-[#4F4F4F] px-6 h-[99px] hover:border-text-muted transition-colors"
          >
            <img src="/images/vector-l49.png" alt="Lens" className="w-[37px] h-[33px]" />
            <span className="font-body text-[23px] text-white">Lens</span>
            <svg
              className="ml-auto w-4 h-4 text-white"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

/* Social Icons */

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "x":
      return (
        <svg
          width="33"
          height="33"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "farcaster":
      return (
        <svg
          width="33"
          height="33"
          viewBox="0 0 1000 1000"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" />
          <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
          <path d="M693.333 746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.444H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667V351.111H868.889L897.778 253.333H720V746.667H693.333Z" />
        </svg>
      );
    case "lens":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    default:
      return null;
  }
}
