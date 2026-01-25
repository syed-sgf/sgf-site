# Copilot Instructions — sgf-site

This file gives concise, actionable guidance for AI coding agents working in this repository.

Project snapshot
- Framework: Next.js (app router) + TypeScript.
- Styling: Tailwind CSS (styles in `app/globals.css`).
- Entry: `app/page.tsx` contains the public homepage and many small shared components.

Quick dev commands
- Start dev server: `npm run dev` (runs `next dev`).
- Build for production: `npm run build`.
- Start production server: `npm run start`.
- Lint: `npm run lint` (uses `eslint`).

Big-picture architecture
- Single Next.js app using the `/app` directory (React Server Components by default).
- `app/page.tsx` is a server component (no `use client` at top). It defines the homepage and several small UI components inline (e.g., `Section`, `Card`, `TechCard`, `ReviewCard`).
- Styling is utility-first via Tailwind; components rely on class names (e.g., `max-w-7xl`, `rounded-2xl`).
- Public assets go in `public/` and can be referenced by absolute paths.

Conventions & patterns to follow
- Preserve Server vs Client component boundaries: if you add client state or hooks (e.g., `useState`, `useEffect`), add `use client` at the top and create a separate client component file under `app/` or `app/components/`.
- Small presentational components are currently colocated in `app/page.tsx`. When adding complexity, extract them to a `app/components/` folder and keep the same TypeScript props style.
- Keep types explicit for component props (see existing function signatures in `app/page.tsx`).
- Tailwind classes are the ground truth for styling — prefer class-based changes over ad-hoc CSS unless a global style is required in `app/globals.css`.

Project-specific notes (examples)
- Placeholder reviews live in `app/page.tsx` in the `reviews` array — replace with real data or wire up an API if needed.
- SEO metadata is defined via the exported `metadata` object at the top of `app/page.tsx`.
- External links (e.g., Google review link) include `target="_blank" rel="noreferrer"` — follow this pattern for external anchors.

Integration & deployment
- Intended for Vercel deployment (standard Next.js app). No serverless functions or API routes are present currently.

Risky changes to avoid
- Don’t add client-only React hooks to files that lack `use client` — this will break server component rendering.
- Avoid renaming or removing the default export `HomePage` in `app/page.tsx` without updating routes.

If you need more context
- Start by reading `app/page.tsx` (homepage + components) and `app/globals.css` (global styles).
- Use `package.json` scripts for local runs and `next` docs for router/component behavior.

Ask the human if:
- You need a canonical list of routes to modify routing behavior.
- There are intended API endpoints or external data sources to wire into the placeholder arrays (e.g., `reviews`).

End of file
