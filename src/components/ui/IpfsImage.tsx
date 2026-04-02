'use client'

import { useState, ImgHTMLAttributes } from 'react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  sources: string[]
}

export default function IpfsImage({ sources, ...props }: Props) {
  const [srcIndex, setSrcIndex] = useState(0)

  function handleError(e: React.SyntheticEvent<HTMLImageElement>) {
    const failedSrc = e.currentTarget.src  // capture before setState
    setSrcIndex((prev) => {
      if (failedSrc !== sources[prev]) return prev  // stale event, ignore
      return prev + 1 < sources.length ? prev + 1 : prev
    })
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={sources[srcIndex]} onError={handleError} />
  )
}
