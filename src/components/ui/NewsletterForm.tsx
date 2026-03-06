"use client";

import { useState } from "react";

interface NewsletterFormProps {
  className?: string;
  variant?: "pill" | "underline";
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

  const wrapperStyles =
    variant === "underline"
      ? "flex items-center border-b border-[rgba(212,212,212,0.37)] pb-3"
      : "flex items-center border border-border-default rounded-full px-6 py-3";

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
        className="bg-transparent font-display text-[25px] text-white placeholder:text-white flex-1 outline-none"
        required
      />
      <span className="text-white mx-3 font-display text-[25px]">|</span>
      <button
        type="submit"
        className="font-display text-[25px] text-white hover:text-accent-cyan transition-colors"
      >
        SUBMIT
      </button>
    </form>
  );
}
