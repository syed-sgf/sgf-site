export type KeyStat = { label: string; value: string };

export type Industry = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  commonFinancingNeeds: string[];
  /** Slugs that correspond to products in lib/financing-data.ts */
  relevantProducts: string[];
  keyStats: [KeyStat, KeyStat, KeyStat];
};

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction & Contractors",
    subtitle: "Financing built for contractors and the trades",
    description:
      "Construction businesses face unique cash flow challenges — project-based revenue, equipment-intensive operations, and long payment cycles demand capital that moves with your business. We structure financing around how contractors actually operate.",
    commonFinancingNeeds: [
      "Equipment financing for heavy machinery, cranes, and fleet",
      "Working capital lines to bridge project draw cycles",
      "Commercial real estate for office, yard, and storage space",
      "SBA loans for business acquisition and expansion",
      "Accounts receivable financing on contractor invoices",
    ],
    relevantProducts: [
      "equipment-financing",
      "business-loc",
      "accounts-receivable",
      "commercial-real-estate",
      "sba-loans",
    ],
    keyStats: [
      { label: "Equipment Finance Range", value: "$50K–$5M" },
      { label: "A/R Advance Rate", value: "Up to 90%" },
      { label: "Typical Draw Cycle", value: "30–60 days" },
    ],
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Capital for restaurants, food producers, and hospitality operators",
    description:
      "Food and beverage businesses operate on thin margins with capital-intensive buildouts, volatile commodity costs, and seasonal revenue patterns. We match restaurant owners and food producers with financing structured around the realities of the industry.",
    commonFinancingNeeds: [
      "Buildout and renovation financing for new concepts",
      "Equipment financing for kitchen, bar, and HVAC systems",
      "Working capital for seasonal and cyclical cash flow gaps",
      "SBA loans for franchise launches and multi-unit expansion",
      "Merchant cash advance for fast, short-term liquidity",
    ],
    relevantProducts: [
      "sba-loans",
      "equipment-financing",
      "business-loc",
      "merchant-cash-advance",
      "franchise-financing",
    ],
    keyStats: [
      { label: "Average Buildout Cost", value: "$150K–$500K" },
      { label: "Equipment Finance Range", value: "$25K–$500K" },
      { label: "SBA Loan Terms", value: "Up to 25 years" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Medical Practices",
    subtitle: "Structured financing for physicians, dentists, and healthcare operators",
    description:
      "Healthcare practices require specialized financing — from diagnostic equipment and practice acquisitions to working capital that bridges insurance reimbursement cycles. We work with physicians, dentists, and healthcare operators to structure capital that fits how practices generate revenue.",
    commonFinancingNeeds: [
      "Medical and dental equipment financing",
      "Practice acquisition and partnership buyout loans",
      "Working capital to bridge insurance reimbursement cycles",
      "Buildout financing for new practice locations",
      "SBA loans for practice expansion and real estate",
    ],
    relevantProducts: [
      "equipment-financing",
      "sba-loans",
      "business-loc",
      "commercial-real-estate",
      "startup-financing",
    ],
    keyStats: [
      { label: "Equipment Finance Range", value: "$50K–$2M" },
      { label: "Practice Acquisition Loans", value: "Up to $5M" },
      { label: "Reimbursement Lag (avg)", value: "30–90 days" },
    ],
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    subtitle: "Capital solutions for upstream, midstream, and oilfield services",
    description:
      "Oil and gas businesses operate in a capital-intensive, cyclical environment where access to equipment and working capital determines whether you capture opportunities or lose them to better-financed competitors. We structure financing around the operational realities of the energy sector.",
    commonFinancingNeeds: [
      "Heavy equipment and fleet financing for oilfield operations",
      "Working capital lines for drilling and service contracts",
      "Accounts receivable financing on operator invoices",
      "Commercial real estate for field offices and operations facilities",
      "Business lines of credit for operational flexibility",
    ],
    relevantProducts: [
      "equipment-financing",
      "business-loc",
      "accounts-receivable",
      "commercial-real-estate",
      "merchant-cash-advance",
    ],
    keyStats: [
      { label: "Equipment Finance Range", value: "$100K–$5M" },
      { label: "A/R Advance Rate", value: "Up to 90%" },
      { label: "Funding Timeline", value: "5–15 business days" },
    ],
  },
  {
    slug: "real-estate-investors",
    title: "Real Estate Investors",
    subtitle: "Financing for buy-and-hold, fix-and-flip, and commercial investors",
    description:
      "Real estate investors need lenders who understand the deal — not just the borrower. Whether you're scaling a rental portfolio, flipping residential properties, or acquiring commercial assets, we structure capital around the income and equity in the real estate itself.",
    commonFinancingNeeds: [
      "DSCR rental loans for portfolio growth without W-2 requirements",
      "Fix-and-flip bridge financing with fast close timelines",
      "Commercial real estate acquisition and refinance loans",
      "Cash-out refinance on stabilized investment properties",
      "Business lines of credit for earnest money and closing costs",
    ],
    relevantProducts: [
      "rental-loans",
      "fix-and-flip",
      "commercial-real-estate",
      "business-loc",
      "accounts-receivable",
    ],
    keyStats: [
      { label: "DSCR Loans", value: "Up to $5M" },
      { label: "Fix & Flip LTC", value: "Up to 90%" },
      { label: "Commercial RE", value: "$500K–$25M+" },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
