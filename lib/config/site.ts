// ─────────────────────────────────────────────────────────────
// SGF Site Configuration — Single Source of Truth
// Governs: metadata, canonical URLs, OG, robots, sitemap
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Starting Gate Financial",
  tagline: "SBA Loans & Business Financing, Built for Approval",
  description:
    "Starting Gate Financial structures SBA loans, commercial real estate, and working capital deals the way underwriters expect — so your file gets funded, not declined.",
  url: "https://startinggatefinancial.com",
  previewUrl: "https://sgf-site-ten.vercel.app",
  locale: "en_US",
  address: {
    street: "803 Business Parkway",
    city: "Richardson",
    state: "TX",
    zip: "75081",
    full: "803 Business Parkway, Richardson, TX 75081",
  },
  phone: "+12149231694",
  phoneFormatted: "+1 (214) 923-1694",
  email: "info@startinggatefinancial.com",
  social: {
    linkedin: "https://www.linkedin.com/company/starting-gate-financial",
  },
} as const;

// ── Canonical route registry (locked — matches architecture spec) ──
export const routes = {
  home: "/",
  financingHub: "/financing-options",
  financing: (slug: string) => `/financing-options/${slug}`,
  industriesHub: "/industries",
  industry: (slug: string) => `/industries/${slug}`,
  toolsHub: "/tools",
  tool: (slug: string) => `/tools/${slug}`,
  contact: "/contact",
  apply: "/apply",
  about: "/about",
  partners: "/partners",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  technology: "/technology",
  privacy: "/privacy",
  terms: "/terms",
  disclosures: "/disclosures",
  accessibility: "/accessibility",
} as const;

// ── Financing program slugs (canonical) ──
export const financingPrograms = [
  "sba-financing",
  "commercial-real-estate",
  "business-loc-term-loans",
  "equipment-financing",
  "fix-and-flip-loans",
  "dscr-rental-loans",
  "franchise-financing",
  "accounts-receivable-financing",
  "startup-financing",
  "merchant-cash-advance",
] as const;

// ── Industry slugs (canonical) ──
export const industrySlugList = [
  "construction-contractors",
  "food-beverage",
  "healthcare-medical",
  "oil-gas",
  "real-estate-investors",
] as const;

// ── Calculator slugs (canonical) ──
export const calculatorSlugs = [
  "business-loan-calculator",
  "dscr-calculator",
  "working-capital-calculator",
  "mca-calculator",
  "fica-tip-calculator",
] as const;
