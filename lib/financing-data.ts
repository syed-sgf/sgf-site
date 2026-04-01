export type FinancingProduct = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  useCases: string[];
  minAmount: string;
  maxAmount: string;
  termRange: string;
  ctaText: string;
};

export const products: FinancingProduct[] = [
  {
    slug: "business-loc-term-loans",
    title: "Business Lines of Credit & Term Loans",
    subtitle: "Flexible working capital structured around your cash flow",
    description:
      "Access revolving credit lines and fixed-term loans structured around your business cash flow. Whether you need ongoing liquidity or a one-time capital infusion, we match you with lenders whose underwriting fits your profile.",
    keyFeatures: [
      "Revolving credit lines from $25K to $500K",
      "Fixed-rate term loans with predictable monthly payments",
      "Draw-as-needed flexibility on lines of credit",
      "Funding timelines vary by lender and documentation readiness",
      "Collateral requirements vary by program and lender",
      "Transparent fee structures with no hidden costs",
    ],
    useCases: [
      "Bridge seasonal cash flow gaps",
      "Fund inventory purchases ahead of peak season",
      "Cover payroll during slow revenue months",
      "Finance small equipment or software purchases",
      "Manage accounts payable more strategically",
    ],
    minAmount: "$25,000",
    maxAmount: "$1,000,000",
    termRange: "6 months – 10 years",
    ctaText: "Start Pre-Qualification",
  },
  {
    slug: "commercial-real-estate",
    title: "Commercial Real Estate Financing",
    subtitle: "Acquisition, refinance, and construction for income-producing properties",
    description:
      "We source and structure commercial real estate financing for investors, owner-occupants, and developers. From stabilized properties to ground-up construction, we align your deal with lenders who specialize in commercial real estate underwriting.",
    keyFeatures: [
      "Loan amounts from $500K to $25M+",
      "LTV up to 75% on most property types",
      "Fixed and variable rate options available",
      "Interest-only periods available on select programs",
      "Structured process tailored for experienced investors",
      "Multi-family, retail, office, industrial, and mixed-use eligible",
    ],
    useCases: [
      "Acquire income-producing commercial property",
      "Refinance existing commercial real estate debt",
      "Cash-out refinance for portfolio expansion",
      "Reposition or renovate a stabilized asset",
      "Fund ground-up commercial construction",
    ],
    minAmount: "$500,000",
    maxAmount: "$25,000,000+",
    termRange: "5 – 30 years",
    ctaText: "Discuss Your Property",
  },
  {
    slug: "sba-financing",
    title: "SBA Financing",
    subtitle: "Government-backed financing for owner-operated businesses",
    description:
      "SBA 7(a) and 504 loans offer the lowest long-term cost of capital for qualified owner-operated businesses. We structure your application the way lenders and the SBA expect — improving approval outcomes and preserving your equity.",
    keyFeatures: [
      "SBA 7(a) loans up to $5 million",
      "SBA 504 for real estate and heavy equipment up to $5.5M",
      "Terms up to 25 years for real estate, 10 years for working capital",
      "Variable interest rates tied to WSJ Prime",
      "Lower down payment requirements than conventional loans",
      "Eligible for acquisition, expansion, and refinance",
    ],
    useCases: [
      "Purchase or expand an owner-operated business",
      "Acquire commercial real estate with owner-occupancy",
      "Refinance high-cost existing business debt",
      "Finance a business acquisition or partner buyout",
      "Fund franchise startup or multi-unit expansion",
    ],
    minAmount: "$150,000",
    maxAmount: "$5,500,000",
    termRange: "10 – 25 years",
    ctaText: "Check SBA Eligibility",
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    subtitle: "Finance the tools your business runs on",
    description:
      "Equipment financing lets you preserve working capital while acquiring the machinery, vehicles, and technology your business needs. The equipment serves as collateral, enabling competitive rates even for businesses with limited balance sheet strength.",
    keyFeatures: [
      "Finance up to 100% of equipment cost",
      "Soft costs (installation, shipping) may be included",
      "Fixed monthly payments for predictable budgeting",
      "Available for new and used equipment",
      "Full ownership at loan maturity",
      "No blanket lien on business assets in most cases",
    ],
    useCases: [
      "Purchase construction or manufacturing machinery",
      "Finance commercial vehicles and fleet expansion",
      "Acquire medical, dental, or lab equipment",
      "Upgrade restaurant or food service equipment",
      "Purchase or lease technology infrastructure",
    ],
    minAmount: "$20,000",
    maxAmount: "$5,000,000",
    termRange: "2 – 7 years",
    ctaText: "Finance Your Equipment",
  },
  {
    slug: "fix-and-flip",
    title: "Fix and Flip Loans",
    subtitle: "Short-term bridge capital for residential investment properties",
    description:
      "Fix-and-flip financing provides fast, asset-based capital for investors acquiring and renovating residential properties. Loan decisions are driven by the property and the deal — not just personal credit — making this program accessible to both seasoned and first-time investors.",
    keyFeatures: [
      "Loan-to-cost up to 92%",
      "After-repair value (ARV) lending up to 70%",
      "Timeline varies by lender and title/documentation readiness",
      "Interest-only payments during the renovation period",
      "Flexible draw schedules for renovation disbursements",
      "Programs available for first-time and experienced investors",
    ],
    useCases: [
      "Acquire and renovate single-family homes",
      "Purchase distressed or bank-owned properties",
      "Complete light to heavy residential rehab projects",
      "Fund multi-unit residential renovation",
      "Bridge to a stabilized long-term rental hold",
    ],
    minAmount: "$75,000",
    maxAmount: "$3,000,000",
    termRange: "6 – 36 months",
    ctaText: "Fund Your Next Flip",
  },
  {
    slug: "dscr-rental-loans",
    title: "DSCR Rental Loans",
    subtitle: "DSCR-based financing for long-term rental portfolios",
    description:
      "DSCR rental loans qualify based on the property's income — not the borrower's personal tax returns. Ideal for investors with multiple properties or complex income structures who need a straightforward path to long-term financing.",
    keyFeatures: [
      "Qualification based on debt service coverage ratio (DSCR)",
      "No personal income or tax return verification required",
      "Loan amounts from $100K to $5M+",
      "30-year fixed, ARM, and interest-only options",
      "Single-family, 2–4 unit, and small multi-family eligible",
      "Available for purchase, rate/term refinance, and cash-out",
    ],
    useCases: [
      "Acquire long-term buy-and-hold rental properties",
      "Refinance existing rental portfolio debt",
      "Cash-out equity from stabilized rentals",
      "Transition a completed flip to a long-term rental",
      "Build a scalable portfolio without W-2 income requirements",
    ],
    minAmount: "$100,000",
    maxAmount: "$5,000,000",
    termRange: "30 years (fixed/ARM)",
    ctaText: "Qualify Your Rental",
  },
  {
    slug: "franchise-financing",
    title: "Franchise Financing",
    subtitle: "Structured capital for franchise startup and expansion",
    description:
      "Franchise financing combines SBA programs with conventional lending to help franchisees open new units or expand existing locations. We understand FDD requirements, franchisor approval processes, and how lenders underwrite franchise deals.",
    keyFeatures: [
      "SBA 7(a) franchise financing up to $5M",
      "Covers franchise fees, buildout, and working capital",
      "Pre-approved franchise brands with streamlined underwriting",
      "New unit and multi-unit development programs",
      "Conventional franchise acquisition financing available",
      "Equipment and FF&E may be included in the loan",
    ],
    useCases: [
      "Open a first franchise location",
      "Expand to multiple units within a territory",
      "Acquire an existing franchise resale",
      "Refinance high-cost franchise startup debt",
      "Fund a new brand launch or concept conversion",
    ],
    minAmount: "$150,000",
    maxAmount: "$5,000,000",
    termRange: "10 – 25 years",
    ctaText: "Structure Your Franchise Deal",
  },
  {
    slug: "accounts-receivable-financing",
    title: "Accounts Receivable Financing",
    subtitle: "Turn outstanding invoices into immediate working capital",
    description:
      "Accounts receivable financing advances capital against your outstanding invoices — giving you liquidity today rather than waiting 30, 60, or 90 days for customers to pay. Ideal for businesses with strong receivables but inconsistent cash flow timing.",
    keyFeatures: [
      "Advance rates up to 90% of eligible receivables",
      "No long-term contracts required on many programs",
      "Factoring and asset-based lending structures available",
      "Approval driven by receivable quality, not credit score",
      "Scalable — funding grows as your receivables grow",
      "Compatible with most existing bank credit facilities",
    ],
    useCases: [
      "Bridge the gap on slow-paying government or corporate clients",
      "Fund payroll and operations between invoice payments",
      "Accelerate growth without taking on fixed-term debt",
      "Manage seasonal revenue fluctuations",
      "Support rapid hiring or project ramp-up",
    ],
    minAmount: "$50,000",
    maxAmount: "$10,000,000",
    termRange: "Revolving (30–90 days)",
    ctaText: "Unlock Your Receivables",
  },
  {
    slug: "startup-financing",
    title: "Startup Financing",
    subtitle: "Capital pathways for early-stage and pre-revenue businesses",
    description:
      "Startup financing requires creative structuring — traditional lenders require 2+ years in business, so we focus on programs that evaluate the founder, the industry, and the plan. SBA loans, equipment financing, and alternative capital are all viable paths.",
    keyFeatures: [
      "SBA startup programs for qualified borrowers",
      "Collateral-backed lending for early-stage companies",
      "Equipment financing with manufacturer support programs",
      "Revenue-based options for post-launch businesses",
      "Franchise-specific startup programs with dedicated underwriting tracks",
      "Capitalization plan structuring for bank presentation",
    ],
    useCases: [
      "Fund a business acquisition as a market entry strategy",
      "Launch a franchise location with an SBA loan",
      "Acquire equipment to begin initial operations",
      "Bridge early-stage revenue gaps with short-term capital",
      "Structure a capitalization plan lenders will approve",
    ],
    minAmount: "$25,000",
    maxAmount: "$5,000,000",
    termRange: "Varies by program",
    ctaText: "Explore Startup Options",
  },
  {
    slug: "merchant-cash-advance",
    title: "Merchant Cash Advance",
    subtitle: "Last-resort short-term advance for businesses that cannot access conventional financing",
    description:
      "Merchant cash advances carry high effective rates and short repayment terms. SGF reviews MCA as a last-resort option when conventional financing is not available. If you are considering an MCA, use our calculator to understand the true cost before committing.",
    keyFeatures: [
      "Repayment tied to daily or weekly sales volume",
      "No fixed monthly payment — payments flex with revenue",
      "Factor rates vary based on risk profile and advance term",
      "Underwriting based on revenue volume, not credit score",
      "Collateral requirements vary by provider",
      "Suitable only when conventional financing options have been exhausted",
    ],
    useCases: [
      "Bridge a short-term cash flow emergency",
      "Fund a time-sensitive inventory purchase",
      "Supplement existing credit lines when they fall short",
      "Cover an unexpected equipment repair or replacement",
      "Smooth revenue during a slow seasonal period",
    ],
    minAmount: "$10,000",
    maxAmount: "$500,000",
    termRange: "3 – 18 months",
    ctaText: "Evaluate an MCA",
  },
];

export function getProduct(slug: string): FinancingProduct | undefined {
  return products.find((p) => p.slug === slug);
}

// Curated Unsplash photo IDs — one per financing slug
// Format: https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1600&q=80
export const heroImageMap: Record<string, string> = {
  "business-loc-term-loans":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  // Business finance / desk with paperwork & cash flow charts

  "commercial-real-estate":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  // Glass office tower / commercial property exterior

  "sba-financing":
    "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1600&q=80",
  // Small business owner / storefront consultation

  "equipment-financing":
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
  // Industrial machinery / manufacturing floor

  "fix-and-flip":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  // House under construction / renovation framing exterior

  "dscr-rental-loans":
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
  // Suburban rental property exterior

  "franchise-financing":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  // Restaurant / franchise storefront interior

  "accounts-receivable-financing":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  // Invoice / business paperwork on desk

  "startup-financing":
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
  // Startup team at whiteboard / ideation

  "merchant-cash-advance":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  // POS terminal / card payment / retail counter
};
