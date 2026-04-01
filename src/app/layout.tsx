import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Society Protocol",
    template: "%s | Society Protocol",
  },
  description:
    "A decentralized protocol for building the foundations of a new social contract.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body>
        <PostHogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
