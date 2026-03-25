"use client";

import { useState } from "react";

const MAILCHIMP_URL =
  "https://societyprotocol.us20.list-manage.com/subscribe/post-json?u=e4c90918b48dc5f1f4642a6f4&id=cd804a9940&f_id=00c150e6f0";

export type SubscribeStatus = "idle" | "loading" | "success" | "error";

export function useMailchimpSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const callbackName = `__mcCb_${Date.now()}`;
      const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`;
      const callbackPromise = new Promise<{ result: string; msg: string }>((resolve) => {
        (window as unknown as Record<string, unknown>)[callbackName] = (data: { result: string; msg: string }) => {
          resolve(data);
          delete (window as unknown as Record<string, unknown>)[callbackName];
        };
      });

      const script = document.createElement("script");
      script.src = url;
      document.body.appendChild(script);
      document.body.removeChild(script);

      const data = await callbackPromise;
      if (data.result === "success") {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage(data.msg.replace(/<[^>]*>/g, "") || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const resetStatus = () => setStatus("idle");

  return { email, setEmail, status, message, handleSubscribe, resetStatus };
}
