import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-[120px] font-medium mb-6">404</h1>
        <p className="font-body text-xl text-text-secondary mb-10">
          This page doesn&apos;t exist in any timeline.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest bg-white text-black rounded-full px-8 py-3.5 hover:bg-white/90 transition-colors"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
