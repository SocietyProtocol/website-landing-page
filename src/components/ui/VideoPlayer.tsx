'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

const PlayIcon = () => (
  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 6.13a1.5 1.5 0 010 2.74l-8.25 4.5A1.5 1.5 0 011 12v-9a1.5 1.5 0 012.25-1.37l8.25 4.5Z" fill="black" stroke="black" strokeWidth="1.15" strokeLinejoin="round" />
  </svg>
)

export default function VideoPlayer({
  src,
  poster,
  title,
  label,
}: {
  src: string
  poster: string
  title: string
  label: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function handlePlay() {
    const video = videoRef.current
    if (!video) return
    setStarted(true)
    video.play().catch(() => setStarted(false))
  }

  const hasOverlayText = label || title

  return (
    <>
      <video
        ref={videoRef}
        controls
        preload="none"
        src={src}
        onEnded={() => setStarted(false)}
        className={`absolute inset-0 w-full h-full object-cover ${started ? '' : 'hidden'}`}
      />
      {!started && (
        <div className="absolute inset-0 cursor-pointer" onClick={handlePlay}>
          <Image src={poster} alt={title || 'Video'} fill sizes="(min-width: 1024px) 60vw, (min-width: 768px) 70vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          {hasOverlayText ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,58,58,0.71)] to-[rgba(0,0,0,0.71)]" />
              {label && <span className="absolute top-8 left-8 font-mono text-[20px] text-white">{label}</span>}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0">
                    <PlayIcon />
                  </div>
                  <span className="font-body text-[24px] text-[#B8B8B8]">Watch Video</span>
                </div>
                {title && <h3 className="font-display text-[28px] md:text-[34px] font-normal leading-[1]">{title}</h3>}
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center">
                <PlayIcon />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
