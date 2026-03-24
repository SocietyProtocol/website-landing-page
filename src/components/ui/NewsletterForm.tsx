"use client";

import { useMailchimpSubscribe } from "@/hooks/useMailchimpSubscribe";

interface NewsletterFormProps {
  className?: string;
  variant?: "pill" | "underline" | "compact";
}

export default function NewsletterForm({
  className = "",
  variant = "pill",
}: NewsletterFormProps) {
  const { email, setEmail, status, message, handleSubscribe, resetStatus } =
    useMailchimpSubscribe();

  const isCompact = variant === "compact";

  const wrapperStyles =
    variant === "underline"
      ? "flex items-center border-b border-[rgba(212,212,212,0.37)] pb-3"
      : variant === "compact"
        ? "flex items-center border-b border-white pb-2"
        : "flex items-center border border-border-default rounded-full px-6 py-3";

  const textSize = isCompact ? "text-[16px]" : "text-[25px]";

  return (
    <div>
      <form
        onSubmit={handleSubscribe}
        className={`${wrapperStyles} ${className}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); resetStatus(); }}
          placeholder="EMAIL ADDRESS"
          className={`bg-transparent font-display ${textSize} text-white placeholder:text-white flex-1 min-w-0 outline-none`}
          required
        />
        <span className={`text-white mx-${isCompact ? "2" : "3"} font-display ${textSize}`}>|</span>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`font-display ${textSize} text-white hover:text-accent-cyan transition-colors shrink-0`}
        >
          SUBMIT
        </button>
      </form>
      {status === "success" && (
        <p className="font-display text-[14px] text-green-400 mt-2">{message}</p>
      )}
      {status === "error" && (
        <p className="font-display text-[14px] text-red-400 mt-2">{message}</p>
      )}
    </div>
  );
}
