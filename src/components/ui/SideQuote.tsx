interface SideQuoteProps {
  title?: string
  children: React.ReactNode
}

export default function SideQuote({ title, children }: SideQuoteProps) {
  const content = (
    <>
      {title && <p className="mb-1 text-sm font-bold text-white">{title}</p>}
      <div className="text-sm leading-relaxed text-[#dadada]">{children}</div>
    </>
  )

  return (
    <>
      {/* Desktop: positioned in left sidebar column (40px padding + 1px border + 24px gap = 65px) */}
      <div className="not-prose hidden md:block relative h-0 overflow-visible">
        <aside
          className="absolute w-[271px] rounded-[40px] border border-[#505050] bg-[#1a1f2a] p-4"
          style={{ right: 'calc(100% + 65px)' }}
        >
          {content}
        </aside>
      </div>

      {/* Mobile: inline callout */}
      <aside className="not-prose md:hidden my-4 rounded-[40px] border border-[#505050] bg-[#1a1f2a] p-4">
        {content}
      </aside>
    </>
  )
}
