"use client";

import { useState } from "react";

interface NewsletterFormProps {
  className?: string;
  variant?: "pill" | "underline" | "compact";
}

export default function NewsletterForm({
  className = "",
  variant = "pill",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up newsletter signup
    setEmail("");
  };

  const isCompact = variant === "compact";

  const wrapperStyles =
    variant === "underline"
      ? "flex items-center border-b border-[rgba(212,212,212,0.37)] pb-3"
      : variant === "compact"
        ? "flex items-center border-b border-white pb-2"
        : "flex items-center border border-border-default rounded-full px-6 py-3";

  const textSize = isCompact ? "text-[16px]" : "text-[25px]";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${wrapperStyles} ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="EMAIL ADDRESS"
        className={`bg-transparent font-display ${textSize} text-white placeholder:text-white flex-1 min-w-0 outline-none`}
        required
      />
      <span className={`text-white mx-${isCompact ? "2" : "3"} font-display ${textSize}`}>|</span>
      <button
        type="submit"
        className={`font-display ${textSize} text-white hover:text-accent-cyan transition-colors shrink-0`}
      >
        SUBMIT
      </button>
    </form>
  );
}
