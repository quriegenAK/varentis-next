# Varentis — AI & Data Architecture

Production Next.js website for Varentis (Ignitable Inc.).

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion |
| CMS | Sanity v3 |
| Fonts | next/font (Playfair Display, JetBrains Mono, Inter) |
| Deployment | Vercel |
| Analytics | Plausible (add separately) |

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create Sanity project
```bash
npx sanity@latest init --project varentis
```
Copy your Project ID from https://sanity.io/manage.

### 3. Configure environment
```bash
cp .env.local.example .env.local
# Edit .env.local with your Sanity project ID
```

### 4. Run dev server
```bash
npm run dev          # Next.js on :3000
npm run sanity       # Sanity Studio on :3333
```

---

## Sanity Studio

Access the Studio at http://localhost:3333 (dev) or deploy separately:
```bash
cd sanity
npx sanity deploy
```

### Article fields
- **Title** — headline (used for slug generation)
- **Slug** — URL-safe identifier (auto-generated from title)
- **Published At** — datetime
- **Category** — architecture | regulated-ai | data-platforms | scientific
- **Read Time** — minutes (integer)
- **Excerpt** — 200 char max, shown in article cards
- **Cover Image** — optional, with hotspot support
- **Body** — Portable Text (blocks, images, code blocks)

---

## Deployment (Vercel)

```bash
npx vercel --prod
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SITE_URL`

---

## Project Structure

```
varentis-next/
├── app/
│   ├── layout.tsx              # Root layout, fonts, theme
│   ├── page.tsx                # Home page
│   ├── globals.css             # Design tokens + base styles
│   └── articles/
│       ├── page.tsx            # Article index
│       └── [slug]/page.tsx     # Individual article (Portable Text)
├── components/
│   ├── nav/Nav.tsx             # Fixed nav + theme toggle
│   ├── sections/               # Hero, Philosophy, Services, etc.
│   └── ui/                     # Button, Tag, Cursor, Footer, Reveal
├── lib/
│   └── sanity.ts               # Client, types, GROQ queries, fetchers
├── sanity/
│   ├── sanity.config.ts        # Studio config
│   └── schemas/article.ts      # Article document schema
└── .env.local.example          # Environment variables template
```

---

## Design System

### Themes
Both dark and light are fully designed. Toggle persists in `localStorage` under key `vt-theme`.

### Fonts
- **Playfair Display** — headings, numbers, editorial weight
- **JetBrains Mono** — body, labels, UI text, terminal blocks
- **Inter** — paragraph prose, descriptions

### Gold tokens
```css
--gold:    #c49e4e  (dark) / #96740a  (light)
--gold-hi: #dbb96a  (dark) / #7a5e06  (light)
--gold-lo: #8a6e30  (dark) / #c4a44e  (light)
```

---

## Cal.com Integration

Buttons linking to scheduling use `https://cal.com/ash-khan`. 
Update this URL across:
- `components/sections/index.tsx` — Engage section CTA
- `components/sections/index.tsx` — Contact section CTA  
- `app/articles/[slug]/page.tsx` — Article end CTA

---

*Varentis · Ignitable Inc. · varentis.com*
