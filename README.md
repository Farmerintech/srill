# SRIL Integrated Services Web Application

Production-ready React application generated from the provided SRIL Integrated Services graphic.

## Extracted Source Content

- Brand: SRIL Integrated Services
- Tagline: Building. Connecting. Delivering Value.
- Who We Are: SRIL Integrated Services is a dynamic and solution-driven company committed to delivering quality and professional services across key sectors that drive national and global growth.
- Services:
  - Building Constructions & General Contracts
  - Federal Government Licensed Auctioning
  - Customs Licensed Freight Forwarding
  - Import & Export Services
- Values: Integrity, Professionalism, Reliability, Excellence, Partnership
- Closing line: "Your Partner in Construction, Logistics and Trade Excellence"

## Assumptions

- No phone number, email, website, office address, registration number, license number, or social media handles were visible in the graphic.
- The inquiry form is a UX enhancement for conversion. It is not shown in the source graphic and currently uses client-side validation only.
- The construction, freight, auctioning, shipping, and aviation imagery are represented through polished service cards and a source graphic preview. In a production deployment, replace or supplement `/public/sril-source.png` with licensed individual hero/service images.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

Deploy the generated `dist` directory to Vercel, Netlify, Cloudflare Pages, or any static hosting provider.

## Architecture

- `src/data/content.js`: extracted and organized content from the graphic
- `src/components`: reusable UI, navigation, cards, form, and layout components
- `src/pages`: route-level page components
- `src/styles/index.css`: Tailwind layers, tokens, focus states, and global utilities

State is intentionally lightweight and local: navigation state, form validation/submission state, and loading state are managed with React hooks. No global state library is needed for this content-led site.
