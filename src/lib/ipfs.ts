import mediaCids from "@/data/media-cids.json";

/**
 * Given any IPFS HTTP gateway URL, returns an array of equivalent URLs
 * across multiple gateways so the caller can try them in order.
 *
 * Supports:
 *   - Subdomain form: https://CID.ipfs.GATEWAY/path
 *   - Path form:      https://GATEWAY/ipfs/CID/path
 *
 * Non-IPFS URLs are returned as-is (single-element array).
 */
export function ipfsWithFallbacks(url: string): string[] {
  const subdomain = url.match(/^(https?):\/\/([a-z0-9]+)\.ipfs\.[^/]+\/(.+)$/)
  if (subdomain) {
    const [, scheme, cid, path] = subdomain
    return [
      url,
      `${scheme}://${cid}.ipfs.dweb.link/${path}`,
      `https://ipfs.io/ipfs/${cid}/${path}`,
    ]
  }

  const pathForm = url.match(/^(https?):\/\/[^/]+\/ipfs\/([a-z0-9]+)\/(.+)$/)
  if (pathForm) {
    const [, scheme, cid, path] = pathForm
    return [
      url,
      `${scheme}://${cid}.ipfs.dweb.link/${path}`,
    ]
  }

  return [url]
}

/**
 * Returns the source URL array for a video. Checks media-cids.json by
 * filename first (R2 primary + IPFS fallbacks), then falls back to
 * ipfsWithFallbacks for raw IPFS URLs, or a single-element array otherwise.
 */
export function videoSources(url: string): string[] {
  const filename = url.split('/').pop()
  if (filename && filename in mediaCids) {
    return mediaCids[filename as keyof typeof mediaCids]
  }
  return ipfsWithFallbacks(url)
}
