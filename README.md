# Society Protocol

A fully static, decentralized website for Society Protocol — built with Next.js and deployed to IPFS.

## Stack

- **Framework**: Next.js 15 (App Router, `output: "export"`)
- **Content**: MDX files managed via TinaCMS
- **Styling**: Tailwind CSS 4 + `@tailwindcss/typography`
- **Hosting**: IPFS via Storacha (web3.storage) + Filecoin persistence
- **Addressing**: IPNS (mutable decentralized) + DNSLink (human-readable domain)
- **CI/CD**: GitHub Actions — build, upload, publish

## Getting Started

```bash
npm install
npm run dev          # Next.js dev server (port 3000)
npm run tinacms      # TinaCMS + Next.js dev server (admin UI at /admin)
npm run build        # Static export to out/
```

## Project Structure

```
content/             # MDX content files
  posts/             #   Blog articles
  handbook/          #   Handbook sections
  glossary/          #   Glossary
  ideology/          #   Ideology page
  whitepaper/        #   Whitepaper
  roles/             #   Open roles
  team/              #   Team members
src/
  app/               # Next.js App Router pages
  components/        # React components (layout + ui)
  data/              # Static data (navigation, media CIDs)
  lib/               # MDX utilities
  styles/            # Global CSS
tina/                # TinaCMS schema and generated types
public/              # Static assets (images, fonts, favicon)
scripts/             # Deployment helper scripts
docs/                # Architecture and deployment documentation
```

## Deployment

The site deploys to IPFS through a fully decentralized pipeline:

1. Content is edited via TinaCMS (visual UI) or directly in MDX files
2. Changes are committed to GitHub
3. GitHub Actions builds the static export
4. Storacha uploads the build to IPFS + Filecoin
5. IPNS record is updated for mutable addressing
6. DNSLink TXT record points the domain to the latest CID

Three access methods are available:

| Method | URL | Properties |
|--------|-----|------------|
| Direct CID | `https://<cid>.ipfs.w3s.link` | Immutable, permanent |
| IPNS | `https://<ipns-key>.ipns.w3s.link` | Mutable, decentralized |
| Domain | `https://societyprotocol.org` | Human-readable, DNSLink |

See [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md) for full setup instructions.

## Documentation

- [Deployment Architecture](docs/DEPLOYMENT_ARCHITECTURE.md) — IPFS/Filecoin strategy and access methods
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md) — Step-by-step setup for the full pipeline
- [IPFS CMS Spec](docs/IPFS_CMS_SPEC.md) — Complete system specification
- [TinaCMS + IPFS Plan](docs/TINACMS_IPFS_PLAN.md) — Implementation plan and checklist

## License

All rights reserved.
