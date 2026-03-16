# CLAUDE.md — SGF Site Governance File
# Active Spec Version: v1.4
# Last Updated: Sprint 1

## GOVERNING DOCUMENTS
All build decisions defer to these documents in priority order:
1. Website Architecture & Page Registry v1.4
2. Internal Linking Matrix & Ruleset v1.0
3. Build Phase Execution Plan v1.0
4. Individual spec documents (Homepage, Programs, Industries, Calculators, Industries, Technology)

## CANONICAL ROUTE NAMESPACES

### Programs Hub
- Hub: /financing-options
- Detail pages: /financing-options/[slug]
- BANNED: /financing/* (legacy — must not exist)

### Canonical Program Slugs (exact, no variations)
| Program | Slug |
|---|---|
| Business LOC & Term Loans | business-loc-term-loans |
| Commercial Real Estate Financing | commercial-real-estate |
| SBA Financing | sba-financing |
| Equipment Financing | equipment-financing |
| Fix & Flip Loans | fix-and-flip |
| DSCR Rental Loans | dscr-rental-loans |
| Franchise Financing | franchise-financing |
| Accounts Receivable Financing | accounts-receivable-financing |
| Startup Financing | startup-financing |
| Merchant Cash Advance | merchant-cash-advance |

### Industries Hub
- Hub: /industries
- Detail pages: /industries/[slug]

### Canonical Industry Slugs (exact, no variations)
| Industry | Slug |
|---|---|
| Construction | construction |
| Restaurants & Food | restaurants-food |
| Medical & Healthcare | medical-healthcare |
| Retail & E-Commerce | retail-ecommerce |
| Trucking & Transportation | trucking-transportation |
| Professional Services | professional-services |
| Oil & Gas Services | oil-gas-services |

### Tools Hub
- Hub: /tools
- Detail pages: /tools/[slug]

### Canonical Calculator Slugs (exact — all 5 are governed, all are public)
| Calculator | Slug |
|---|---|
| Business Loan Calculator | business-loan-calculator |
| DSCR Calculator | dscr-calculator |
| MCA Calculator | mca-calculator |
| Working Capital Calculator | working-capital-calculator |
| FICA Tip Credit Calculator | fica-tip-credit-calculator |

## INTERNAL LINKING RULES (Non-Negotiable)
- Homepage → hubs only (no detail pages, no calculators directly)
- Hubs → detail pages only (downward)
- Program pages → calculators (lateral), programs hub (upward), max 3 related programs
- Industry pages → program pages (lateral), industries hub (upward), Tools Hub — NEVER to calculators directly
- Calculator pages → Tools Hub (upward), relevant program pages (lateral), consultation CTA
- NO calculator may link to another calculator
- NO page may link directly to /apply/app* (application steps)

## BANNED LANGUAGE (never appear in hero, hubs, tools, industry pages)
- "brokerage" (except legal/disclosures pages)
- "capital advisor" / "capital advisory"
- "commercial loan brokerage"
- "other brokers"
- SaaS/platform language
- Dashboard metaphors
- Approval claims
- Rate guarantees

## APPROVED POSITIONING LANGUAGE
- "commercial financing firm"
- "financing team"
- "funding guidance"
- "capital planning"
- "financing review"

## CTA RULES
- Calculator pages: "Schedule a Consultation"
- Program pages: "Schedule a Consultation" or "Start a Financing Review"
- Hub pages: "See Which Programs You Qualify For" / "Start a Financing Review"
- Homepage: "Apply / Get Qualified" (primary), "Explore Financing Options" (secondary)
- NEVER: urgency language, approval-based language, calculator-to-calculator CTAs

## BRAND TOKENS
- Colors: dark green #082B09, primary green #118241, gold #CE9562, cream #F8F6F1
- Fonts: Playfair Display (headings), Source Sans 3 (body)
- Tailwind v4: use @import 'tailwindcss' — never @tailwind directives, no tailwind.config.ts

## WHAT REQUIRES A NEW SPEC VERSION TO CHANGE
- Any new program, calculator, or industry page
- Any change to the linking matrix
- Any CTA strategy deviation
- Any new route namespace
