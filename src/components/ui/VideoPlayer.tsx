'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const PlayIcon = () => (
  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 6.13a1.5 1.5 0 010 2.74l-8.25 4.5A1.5 1.5 0 011 12v-9a1.5 1.5 0 012.25-1.37l8.25 4.5Z" fill="black" stroke="black" strokeWidth="1.15" strokeLinejoin="round" />
  </svg>
)

const SpinnerIcon = ({ size }: { size: number }) => (
  <svg className="animate-spin" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="3" strokeOpacity="0.25" />
    <path fill="black" fillOpacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
)

async function findBestSource(sources: string[]): Promise<number> {
  return new Promise((resolve) => {
    let settled = false
    let failures = 0

    sources.forEach((url, index) => {
      fetch(url, {
        method: 'HEAD',
        redirect: 'manual',
        signal: AbortSignal.timeout(8000),
      })
        .then((res) => {
          if (!settled && (res.ok || res.type === 'opaqueredirect')) {
            settled = true
            resolve(index)
          } else {
            failures++
            if (failures === sources.length && !settled) resolve(0)
          }
        })
        .catch(() => {
          if (settled) return
          failures++
          if (failures === sources.length && !settled) resolve(0)
        })
    })
  })
}

export default function VideoPlayer({
  src,
  poster,
  title,
  label,
}: {
  src: string | string[]
  poster: string
  title: string
  label: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [probing, setProbing] = useState(false)
  const [srcIndex, setSrcIndex] = useState(0)
  const probed = useRef(false)
  const sources = Array.isArray(src) ? src : [src]

  useEffect(() => {
    if (!started) return
    const video = videoRef.current
    if (!video) return

    video.load()

    let switched = false
    function tryNext() {
      if (switched) return
      switched = true
      setSrcIndex(prev => {
        const next = prev + 1
        if (next < sources.length) return next
        // All sources exhausted — show poster
        setStarted(false)
        return 0
      })
    }

    video.play().catch((err: unknown) => {
      // AbortError is expected when load() supersedes play() — ignore it.
      if (err instanceof DOMException && err.name === 'AbortError') return
      tryNext()
    })

    let stallTimer: ReturnType<typeof setTimeout>

    function onError() { tryNext() }

    function onStalled() {
      // stalled fires after ~3 s of no data; give 4 s more before switching
      stallTimer = setTimeout(() => {
        if (video && video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) tryNext()
      }, 4000)
    }

    function onProgress() { clearTimeout(stallTimer) }

    video.addEventListener('error', onError)
    video.addEventListener('stalled', onStalled)
    video.addEventListener('progress', onProgress)
    video.addEventListener('playing', onProgress)

    return () => {
      clearTimeout(stallTimer)
      video.removeEventListener('error', onError)
      video.removeEventListener('stalled', onStalled)
      video.removeEventListener('progress', onProgress)
      video.removeEventListener('playing', onProgress)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, srcIndex])

  function handlePlay() {
    if (sources.length <= 1 || probed.current) {
      setStarted(true)
      return
    }
    setProbing(true)
    findBestSource(sources).then((index) => {
      setSrcIndex(index)
      probed.current = true
      setProbing(false)
      setStarted(true)
    })
  }

  const hasOverlayText = label || title

  return (
    <>
      <video
        ref={videoRef}
        controls
        preload="none"
        src={sources[srcIndex]}
        onEnded={() => { setStarted(false); setSrcIndex(0) }}
        className={`absolute inset-0 w-full h-full object-cover ${started ? '' : 'hidden'}`}
      />
      {!started && (
        <div className="absolute inset-0 cursor-pointer" onClick={probing ? undefined : handlePlay}>
          <Image src={poster} alt={title || 'Video'} fill sizes="(min-width: 1024px) 60vw, (min-width: 768px) 70vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          {hasOverlayText ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,58,58,0.71)] to-[rgba(0,0,0,0.71)]" />
              {label && <span className="absolute top-8 left-8 font-mono text-[20px] text-white">{label}</span>}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0">
                    {probing ? <SpinnerIcon size={20} /> : <PlayIcon />}
                  </div>
                  <span className="font-body text-[24px] text-[#B8B8B8]">{probing ? 'Loading…' : 'Watch Video'}</span>
                </div>
                {title && <h3 className="font-display text-[28px] md:text-[34px] font-normal leading-[1]">{title}</h3>}
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center">
                {probing ? <SpinnerIcon size={16} /> : <PlayIcon />}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
