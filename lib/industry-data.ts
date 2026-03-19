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
    title: "Construction",
    subtitle: "Financing built for contractors and the trades",
    description:
      "Construction businesses face unique cash flow challenges — project-based revenue, equipment-intensive operations, and long payment cycles demand capital that moves with your business. We structure financing around how contractors actually operate.",
    commonFinancingNeeds: [
      "Equipment financing for heavy machinery, cranes, and fleet",
      "Working capital lines to bridge project draw cycles",
      "Accounts receivable financing to accelerate contractor invoice collections",
      "Commercial real estate financing for owner-occupied facilities",
      "SBA financing for business acquisition and expansion",
    ],
    relevantProducts: [
      "equipment-financing",
      "accounts-receivable-financing",
      "commercial-real-estate",
      "business-loc-term-loans",
      "sba-financing",
    ],
    keyStats: [
      { label: "Equipment Finance Range", value: "$50K–$5M" },
      { label: "A/R Advance Rate", value: "Up to 90%" },
      { label: "Typical Draw Cycle", value: "30–60 days" },
    ],
  },
  {
    slug: "restaurants-food",
    title: "Restaurants & Food",
    subtitle: "Capital for restaurants, food producers, and hospitality operators",
    description:
      "Food and beverage businesses operate on thin margins with capital-intensive buildouts, volatile commodity costs, and seasonal revenue patterns. We match restaurant owners and food producers with financing structured around the realities of the industry.",
    commonFinancingNeeds: [
      "Buildout and renovation financing for new concepts",
      "Equipment financing for kitchen, bar, and HVAC systems",
      "Working capital for seasonal and cyclical cash flow gaps",
      "SBA financing for franchise launches and multi-unit expansion",
      "Merchant cash advance for fast, short-term liquidity",
    ],
    relevantProducts: [
      "sba-financing",
      "equipment-financing",
      "business-loc-term-loans",
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
    slug: "medical-healthcare",
    title: "Medical & Healthcare",
    subtitle: "Structured financing for physicians, dentists, and healthcare operators",
    description:
      "Healthcare practices require specialized financing — from diagnostic equipment and practice acquisitions to working capital that bridges insurance reimbursement cycles. We work with physicians, dentists, and healthcare operators to structure capital that fits how practices generate revenue.",
    commonFinancingNeeds: [
      "Medical and dental equipment financing",
      "Practice acquisition and partnership buyout loans",
      "Working capital to bridge insurance reimbursement cycles",
      "Buildout financing for new practice locations",
      "SBA financing for practice expansion and real estate",
    ],
    relevantProducts: [
      "equipment-financing",
      "sba-financing",
      "business-loc-term-loans",
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
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    subtitle: "Growth capital for brick-and-mortar and online retail operators",
    description:
      "Retail and e-commerce businesses face inventory-driven cash cycles, seasonal demand swings, and platform fee pressures. We structure working capital, inventory financing, and equipment solutions that align with how retail operators actually generate revenue.",
    commonFinancingNeeds: [
      "Inventory financing to fund purchase orders and stock builds",
      "Working capital lines to manage seasonal revenue swings",
      "Equipment financing for POS systems, fixtures, and fulfillment infrastructure",
      "SBA financing for store acquisition and multi-location expansion",
      "Merchant cash advance for fast capital between inventory cycles",
    ],
    relevantProducts: [
      "business-loc-term-loans",
      "equipment-financing",
      "sba-financing",
      "merchant-cash-advance",
      "accounts-receivable-financing",
    ],
    keyStats: [
      { label: "Working Capital Lines", value: "$25K–$500K" },
      { label: "Inventory Cycle", value: "30–90 days" },
      { label: "SBA Loan Terms", value: "Up to 25 years" },
    ],
  },
  {
    slug: "trucking-transportation",
    title: "Trucking & Transportation",
    subtitle: "Fleet financing and working capital for trucking operators",
    description:
      "Trucking and transportation businesses run on tight margins with high equipment costs, fuel volatility, and invoice payment lags. We structure equipment financing, working capital lines, and accounts receivable solutions that match how freight businesses operate.",
    commonFinancingNeeds: [
      "Equipment financing for tractors, trailers, and commercial vehicles",
      "Accounts receivable financing to accelerate freight invoice collections",
      "Working capital lines to bridge fuel, maintenance, and payroll gaps",
      "SBA financing for fleet expansion and owner-operator buyouts",
      "Commercial real estate financing for terminals and yards",
    ],
    relevantProducts: [
      "equipment-financing",
      "accounts-receivable-financing",
      "business-loc-term-loans",
      "sba-financing",
      "commercial-real-estate",
    ],
    keyStats: [
      { label: "Equipment Finance Range", value: "$50K–$5M" },
      { label: "A/R Advance Rate", value: "Up to 90%" },
      { label: "Invoice Payment Lag", value: "30–60 days" },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    subtitle: "Financing for law firms, consultancies, and service businesses",
    description:
      "Professional services firms carry high receivables, predictable recurring revenue, and limited hard assets — making them well-suited for cash flow-based financing. We structure working capital, acquisition loans, and partner buyout financing for law firms, accounting practices, consultancies, and other service businesses.",
    commonFinancingNeeds: [
      "Working capital lines to bridge client billing and collections cycles",
      "SBA financing for firm acquisition and partner buyouts",
      "Accounts receivable financing on outstanding client invoices",
      "Equipment and technology financing for office infrastructure",
      "Startup financing for new practice formation",
    ],
    relevantProducts: [
      "business-loc-term-loans",
      "sba-financing",
      "accounts-receivable-financing",
      "equipment-financing",
      "startup-financing",
    ],
    keyStats: [
      { label: "Working Capital Lines", value: "$25K–$500K" },
      { label: "SBA Acquisition Loans", value: "Up to $5M" },
      { label: "Invoice Lag (avg)", value: "30–60 days" },
    ],
  },
  {
    slug: "oil-gas-services",
    title: "Oil & Gas Services",
    subtitle: "Financing for oilfield service and support businesses",
    description:
      "Oilfield service and support companies — contractors, equipment rental operators, transportation providers, and maintenance firms — face capital-intensive operations, long invoice cycles, and equipment-heavy balance sheets. We structure financing for service businesses that support the energy sector, not E&P operators.",
    commonFinancingNeeds: [
      "Heavy equipment and fleet financing for oilfield service operations",
      "Working capital lines for drilling and service contracts",
      "Accounts receivable financing on operator invoices",
      "SBA financing for business acquisition and expansion",
      "Commercial real estate for service yards and operations facilities",
    ],
    relevantProducts: [
      "equipment-financing",
      "business-loc-term-loans",
      "accounts-receivable-financing",
      "sba-financing",
      "commercial-real-estate",
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
    subtitle: "Financing for fix-and-flip, DSCR rental, and construction projects",
    description:
      "Real estate investors require fast, flexible capital that moves on deal timelines — not bank timelines. We structure fix-and-flip loans, DSCR rental financing, construction loans, and bridge capital for investors acquiring, rehabbing, and holding residential and commercial properties.",
    commonFinancingNeeds: [
      "Fix-and-flip loans for acquisition and rehab of residential and commercial properties",
      "DSCR rental loans based on property cash flow, not personal income",
      "New construction financing for ground-up residential and light commercial projects",
      "Bridge loans to close quickly while permanent financing is arranged",
      "Business lines of credit for repeat investors managing multiple projects",
    ],
    relevantProducts: [
      "fix-and-flip",
      "dscr-rental-loans",
      "commercial-real-estate",
      "business-loc-term-loans",
      "sba-financing",
    ],
    keyStats: [
      { label: "Fix & Flip Loan Range", value: "$75K–$5M" },
      { label: "DSCR Rental LTV", value: "Up to 80%" },
      { label: "Bridge Loan Terms", value: "6–24 months" },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
