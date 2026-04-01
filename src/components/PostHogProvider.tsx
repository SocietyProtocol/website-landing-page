'use client'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    posthog.capture('$pageview')
  }, [pathname, searchParams])
  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: '2026-01-30',
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <PageviewTracker />
      {children}
    </PHProvider>
  )
}
