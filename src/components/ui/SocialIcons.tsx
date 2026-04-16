export interface SocialLinksProps {
  x?: string;
  farcaster?: string;
  lens?: string;
}

export function SocialLinks({ socials }: { socials?: SocialLinksProps }) {
  if (!socials) return null;
  return (
    <div className="flex gap-3 mt-2">
      {socials.x && (
        <a href={socials.x} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
          <XIcon />
        </a>
      )}
      {socials.farcaster && (
        <a href={socials.farcaster} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
          <FarcasterIcon />
        </a>
      )}
      {socials.lens && (
        <a href={socials.lens} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
          <LensIcon />
        </a>
      )}
    </div>
  );
}

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FarcasterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 1000"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" />
      <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
      <path d="M693.333 746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.444H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667V351.111H868.889L897.778 253.333H720V746.667H693.333Z" />
    </svg>
  );
}

export function LensIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 52 33"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M44.675 27.2285C33.4825 34.9278 18.4757 34.9089 7.36335 27.2615C2.03378 23.5983 -2.46968 17.5512 1.53339 11.2303C4.78117 6.09903 11.593 5.08409 16.2617 9.18158C16.7338 3.78121 20.9398 0 26.005 0C31.0561 0 35.2763 3.8473 35.72 9.19102C39.8506 5.53727 45.7844 5.9102 49.4192 9.89439C52.3413 13.0997 52.7945 17.5795 50.4672 21.2758C49.0133 23.688 47.1345 25.5338 44.675 27.2237V27.2285Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function NostrIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.68 0C5.23 0 0 5.23 0 11.68v8.64C0 26.77 5.23 32 11.68 32h8.64C26.77 32 32 26.77 32 20.32V11.68C32 5.23 26.77 0 20.32 0zm4.1 23.37l-5.06-8.59v8.59H6.37V8.63h4.35l5.06 8.59V8.63h4.35v14.74z" />
    </svg>
  );
}
