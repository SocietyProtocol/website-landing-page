interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-sm tracking-widest text-text-muted uppercase ${className}`}
    >
      / {children}
    </span>
  );
}
