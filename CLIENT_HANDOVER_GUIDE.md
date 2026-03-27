# Society Protocol — Client Handover Guide

## Overview

This guide contains everything needed to operate, maintain, and migrate the Society Protocol website independently.

### What Was Built

The site is a fully static Next.js 15 application with:

- **TinaCMS Cloud** — visual editor for non-technical content editing
- **Storacha** — permanent IPFS + Filecoin storage (every deploy is archived)
- **Cloudflare Pages** — fast global serving via CDN
- **GitHub Actions** — automated CI/CD pipeline (self-hosted runner)

Every push to the `main` branch automatically builds the site, uploads it to IPFS via Storacha, and deploys it to Cloudflare Pages. No manual deploys are needed.

### Architecture

```
Content editor
    │
    └─► TinaCMS admin (/admin)
            │ commits MDX to GitHub
            ▼
        GitHub repo (main branch)
            │ triggers on push
            ▼
        GitHub Actions (self-hosted runner)
            ├─► npm run build  →  out/  (static HTML/CSS/JS)
            ├─► Storacha upload  →  IPFS CID (permanent archive)
            └─► Cloudflare Pages deploy  →  live site
```

### Current Live URLs

| URL                                    | Purpose                                    |
|----------------------------------------|--------------------------------------------|
| `https://new.societyprotocol.io`       | Live site (current, before domain cutover) |
| `https://new.societyprotocol.io/admin` | TinaCMS editor                             |
| `https://storacha.link/ipfs/<CID>`     | Permanent IPFS archive of each deploy      |

---

## 1. Accounts & Access Required

You need owner or admin access to the following:

| Service       | URL                 | Purpose                             |
|---------------|---------------------|-------------------------------------|
| GitHub        | github.com          | Source code, Actions CI/CD, Secrets |
| TinaCMS Cloud | app.tina.io         | Visual content editor               |
| Storacha      | storacha.network    | IPFS/Filecoin storage               |
| Cloudflare    | dash.cloudflare.com | DNS, Pages hosting                  |

---

## 2. GitHub Secrets Setup

All secrets live in the GitHub repository under **Settings → Secrets and variables → Actions**.

### Required Secrets

#### `TINACLIENTID` and `TINATOKEN`

1. Log in to [app.tina.io](https://app.tina.io)
2. Open your project → **Settings**
3. Copy **Client ID** → set as `TINACLIENTID`
4. Generate a **Read-only Token** → set as `TINATOKEN`

#### `STORACHAPRINCIPAL`

This is the Storacha agent key used by CI to authenticate uploads.

```bash
# Install Storacha CLI
npm install -g @storacha/cli

# Create a new agent key (outputs JSON with did and key)
storacha key create --json
```

Copy the `key` field from the output → set as `STORACHAPRINCIPAL`.
Copy the `did` field — you'll need it for the next step.

#### `W3PROOF`

This is a delegation proof that authorizes the agent key to upload to your Storacha space.

```bash
# List your spaces to find the DID
storacha space ls

# Select the space you want to use
storacha space use <space-did>

# Create a delegation proof for the agent DID from the previous step
storacha delegation create <agent-did> \
  -c space/blob/add \
  -c space/index/add \
  -c filecoin/offer \
  -c upload/add \
  --base64
```

The output (a long base64 string) → set as `W3PROOF`.

#### `DNSAPITOKEN`

This is a Cloudflare API token used to deploy to Cloudflare Pages and manage DNS.

1. In Cloudflare dashboard → **My Profile → API Tokens → Create Token**
2. Use **Custom Token** with these permissions:
   - `Account > Cloudflare Pages > Edit`
   - `Zone > DNS > Edit` (select the `societyprotocol.io` zone)
3. Copy the token → set as `DNSAPITOKEN`

> **Note:** Two previous API tokens were revoked during development. If `DNSAPITOKEN` is already set but deploys fail with auth errors, create a new token using the steps above and replace the secret.

#### `CLOUDFLAREACCOUNTID`

1. In Cloudflare dashboard, any page shows your **Account ID** in the right sidebar
2. Copy it → set as `CLOUDFLAREACCOUNTID`

> This secret may not be set yet — it is required for Cloudflare Pages deploys.

### Secrets Summary

| Secret                | Status                  | Source                         |
|-----------------------|-------------------------|--------------------------------|
| `TINACLIENTID`        | Likely set              | TinaCMS Cloud project settings |
| `TINATOKEN`           | Likely set              | TinaCMS Cloud project settings |
| `STORACHAPRINCIPAL`   | Likely set              | `storacha key create --json`   |
| `W3PROOF`             | Likely set              | `storacha delegation create`   |
| `DNSAPITOKEN`         | Needs verification      | Cloudflare API token           |
| `CLOUDFLAREACCOUNTID` | Likely missing — add it | Cloudflare dashboard sidebar   |

### Secrets to Delete (Deprecated)

These are no longer used and can be safely deleted from GitHub Secrets:

- `DNSRECORDID`
- `WEBHOSTNAMEID`
- `W3PRINCIPAL`
- `DNSZONEID` (only keep if you still need it for DNS changes)

---

## 3. TinaCMS Cloud — Content Editing

### Accessing the Editor

1. Go to `https://new.societyprotocol.io/admin`
2. Log in with your GitHub account (OAuth)
3. You have access to the full visual editor

### Content Collections

| Collection | Location              | Purpose                         |
|------------|-----------------------|---------------------------------|
| Posts      | `content/posts/`      | Blog articles and intro content |
| Roles      | `content/roles/`      | Open positions (Join page)      |
| Roadmap    | `content/roadmap/`    | Roadmap entries                 |
| Whitepaper | `content/whitepaper/` | Whitepaper content              |
| Glossary   | `content/glossary/`   | Glossary entries                |
| Ideology   | `content/ideology/`   | Ideology page content           |
| Team       | `content/team/`       | Team members and advisors       |

### Publishing Workflow

1. Open the editor at `/admin`
2. Select a collection and create or edit content
3. Click **Save** — TinaCMS commits the MDX file to GitHub
4. GitHub Actions triggers automatically (~2–5 minutes)
5. The site goes live with your changes

Changes are visible in the GitHub repo under the `content/` directory.

### Post Fields Reference

When creating a blog post, the key fields are:

| Field         | Description                                                  |
|---------------|--------------------------------------------------------------|
| `title`       | Article headline                                             |
| `slug`        | URL path (e.g. `my-article` → `/articles/my-article`)       |
| `description` | Short summary shown in cards                                 |
| `date`        | Publication date                                             |
| `author`      | Author name                                                  |
| `image`       | Cover image (used in article hero)                           |
| `cardImage`   | Thumbnail for article cards (falls back to `image` if empty) |
| `isIntro`     | Mark as intro/featured content                               |
| `order`       | Sort order for intro articles                                |
| `body`        | Full article content (rich MDX editor)                       |

---

## 4. Cloudflare Pages — Custom Domain Setup

The Cloudflare Pages project is named **`society-protocol`**.

### Add `new.societyprotocol.io`

1. In Cloudflare dashboard → **Pages** → `society-protocol`
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `new.societyprotocol.io`
5. Cloudflare will automatically configure the DNS record (since the domain is already in your Cloudflare account)
6. SSL is provisioned automatically within a few minutes

---

## 5. Domain Migration: societyprotocol.io → New Deployment

When ready to retire the old site and point the apex domain to this new deployment:

### Step 1 — Verify the new site

Confirm `https://new.societyprotocol.io` is fully working end-to-end before touching the main domain.

### Step 2 — Add `societyprotocol.io` to Cloudflare Pages

1. In Cloudflare dashboard → **Pages** → `society-protocol` → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `societyprotocol.io`
4. Cloudflare will prompt you to update or confirm the DNS records

### Step 3 — Update DNS records

In Cloudflare **DNS** for `societyprotocol.io`:

- Delete or replace any `A` or `CNAME` records pointing to the old host
- Cloudflare Pages will have added a `CNAME` record for `societyprotocol.io` pointing to `society-protocol.pages.dev`
- Also add `www` → `societyprotocol.io` redirect if needed (Pages supports this)

### Step 4 — Verify SSL

Cloudflare auto-provisions an SSL certificate. Check that `https://societyprotocol.io` loads correctly (usually within 5–15 minutes).

### Step 5 — Retire the old site

Once `societyprotocol.io` is confirmed live on the new deployment:
- Shut down or redirect the old hosting
- Remove `new.societyprotocol.io` as a custom domain from Pages (or keep it as an alias)

---

## 6. Media Upload (~4GB)

Large media files are stored on IPFS via Storacha and referenced by their content ID (CID). The upload script handles this.

### Prerequisites

```bash
npm install -g @storacha/cli
storacha space use <space-did>   # select the correct space
```

### Accessing Uploaded Media

Files are accessible at:
```
https://storacha.link/ipfs/<CID>
```

After running the script, rebuild and redeploy the site so the new CID mappings are included.

---

## 7. Checking Deploy Status

1. Go to the GitHub repository → **Actions** tab
2. The latest workflow run is named `Deploy to IPFS + Cloudflare Pages`
3. A green checkmark = deployed successfully
4. Click any run to see the deploy summary, including the IPFS CID for that deploy

---

## 8. Pending Items Checklist

Complete these items in order:

- [ ] **Add `CLOUDFLAREACCOUNTID` secret** to GitHub (see Section 2 — likely missing)
- [ ] **Verify `DNSAPITOKEN`** is valid — push a test change and check if the deploy step succeeds; if it fails with auth errors, create a new token
- [ ] **Add custom domain `new.societyprotocol.io`** in Cloudflare Pages dashboard (see Section 4)
- [ ] **Upload media (~4GB)** via `./scripts/upload-media.sh` (see Section 6)
- [ ] **Create placeholder pages via TinaCMS**: Whitepaper, Glossary, Ideology, Roadmap — currently these pages are linked in the footer/nav but have no content
- [ ] **Wire newsletter form** — the subscribe form on the site is not connected to any backend; needs a form service or API endpoint
- [ ] **Full end-to-end test**: create an article in TinaCMS → wait for deploy → confirm it appears on the live site
- [ ] **Domain cutover**: point `societyprotocol.io` to Cloudflare Pages (see Section 5) when ready

---

## 9. Local Development Reference

For developers making code changes:

```bash
# Install dependencies
npm install

# Start Next.js dev server (port 3000)
npm run dev

# Start TinaCMS local editor alongside dev server
npm run tinacms

# Build static export (output goes to out/)
npm run build

# Preview the static build locally
npx serve out/
```

Content files are plain MDX in `content/` — they can be edited directly in any text editor.
