export type PartnerType = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  whoIsThis: string[];
  whatYouDo: string[];
  whatWeProvide: string[];
  notAFit: string[];
  faqs: { q: string; a: string }[];
};

export const partners: PartnerType[] = [
  {
    slug: "ic-broker",
    title: "Independent Contractor Broker",
    tagline: "Build a book of business. Earn on every closed deal.",
    description:
      "IC Brokers operate as licensed, commission-based intermediaries who originate commercial financing transactions under the Starting Gate Financial umbrella. If you're a seasoned finance professional ready to run your own deals with institutional backing, this program is built for you.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    whoIsThis: [
      "Former bankers, lenders, or underwriters seeking independence",
      "Mortgage professionals expanding into commercial finance",
      "Finance consultants looking for a formal origination platform",
      "Experienced brokers seeking better lender access and deal support",
    ],
    whatYouDo: [
      "Originate commercial loan opportunities from your existing network",
      "Pre-qualify clients using SGF underwriting criteria",
      "Submit complete deal packages through the SGF intake platform",
      "Stay involved through underwriting, structuring, and close",
    ],
    whatWeProvide: [
      "Access to SGF's full lender network across all financing programs",
      "Deal structuring support and underwriting guidance",
      "Marketing materials, co-branded resources, and process documentation",
      "Competitive commission structure on every funded transaction",
    ],
    notAFit: [
      "Individuals without prior commercial finance or lending experience",
      "Part-time hobbyists — this program requires active origination",
      "Anyone seeking a guaranteed salary or draw structure",
      "Applicants who cannot represent clients with professionalism and compliance",
    ],
    faqs: [
      {
        q: "Do I need a license to participate as an IC Broker?",
        a: "Licensing requirements vary by state and deal type. Commercial lending in most states does not require a license, but certain deal types (SBA, residential-adjacent) may. We walk through requirements during onboarding.",
      },
      {
        q: "How are commissions structured?",
        a: "Commission rates are defined in the IC Broker Agreement and vary by program type and deal size. All compensation is transaction-based with no upfront fees.",
      },
      {
        q: "What does the onboarding process look like?",
        a: "After your application is reviewed, you'll complete a brief vetting call, review and sign the IC Broker Agreement, and receive access to deal submission protocols and SGF's lender network overview.",
      },
      {
        q: "Can I bring my own lender relationships?",
        a: "Yes. IC Brokers may leverage their own lender relationships alongside SGF's network, provided all transactions are properly documented and compliant.",
      },
    ],
  },
  {
    slug: "referral-partner",
    title: "Referral Partner",
    tagline: "Send us a name. Earn when they close.",
    description:
      "The Referral Partner program is built for professionals who regularly encounter business owners needing capital — but whose primary work isn't finance. If you're a trusted advisor in your field and your clients need business financing, we make it easy to refer and rewarding when deals fund.",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    whoIsThis: [
      "CPAs and bookkeepers advising small business clients",
      "Business attorneys handling acquisitions or expansions",
      "Commercial real estate agents and brokers",
      "Insurance agents, financial planners, and wealth advisors",
    ],
    whatYouDo: [
      "Identify clients who need business or commercial financing",
      "Make a warm introduction to the SGF team",
      "Stay connected as a trusted advisor — we handle the financing",
    ],
    whatWeProvide: [
      "A seamless referral experience — one call or email is all it takes",
      "Deal updates and closing notifications so you stay informed",
      "Referral compensation on funded transactions",
      "A financing resource your clients can trust without risk to your reputation",
    ],
    notAFit: [
      "Professionals seeking to actively originate or structure deals",
      "Referrers expecting guaranteed placement or approval for clients",
      "Anyone looking to white-label or resell SGF services independently",
    ],
    faqs: [
      {
        q: "How do I make a referral?",
        a: "Once enrolled, you'll receive a direct referral line and simple intake process. A warm email introduction or phone call is all it takes — we take it from there.",
      },
      {
        q: "Do I need to stay involved in the deal?",
        a: "No. Your role ends at the introduction. We handle qualification, structuring, underwriting, and close. You'll receive a notification when the deal funds.",
      },
      {
        q: "When and how are referral fees paid?",
        a: "Referral fees are paid upon successful funding. Terms are defined in the Referral Partner Agreement signed during onboarding.",
      },
      {
        q: "Is there a minimum volume requirement?",
        a: "No. There is no minimum referral volume. Active referrers may qualify for enhanced compensation tiers over time.",
      },
    ],
  },
  {
    slug: "cpa-accountant",
    title: "CPA & Accounting Partner",
    tagline: "Your clients need capital. We speak your language.",
    description:
      "CPAs and accounting professionals sit at the center of their clients' financial lives — which means you often see the need for financing before anyone else does. The SGF CPA Partner program makes it easy to connect your clients with the right commercial financing while protecting the trust you've built.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    whoIsThis: [
      "CPA firms and solo practitioners with small business client bases",
      "Bookkeepers and financial controllers embedded in client operations",
      "Tax advisors who review business financials and identify capital gaps",
      "Accounting professionals seeking to deepen client relationships",
    ],
    whatYouDo: [
      "Flag clients who may benefit from business financing during routine advisory",
      "Make a warm introduction to the SGF team — no pitch required",
      "Optionally assist with financial document prep to accelerate underwriting",
    ],
    whatWeProvide: [
      "A financing process built on the same documentation you already work with",
      "Clear, jargon-free communication so you stay informed",
      "Referral compensation on funded transactions",
      "A trusted capital resource you can confidently recommend to clients",
    ],
    notAFit: [
      "Practices without active small business or commercial client relationships",
      "CPAs seeking to underwrite or structure deals independently",
      "Firms with compliance restrictions on referral compensation — consult your ethics board first",
    ],
    faqs: [
      {
        q: "Will SGF disrupt my client relationship?",
        a: "No. We operate as a capital resource behind your advisory, not in front of it. Your client relationship stays yours.",
      },
      {
        q: "Can I assist with document preparation to speed up underwriting?",
        a: "Yes, and it often helps. Our underwriting checklist maps directly to standard financial statements and tax returns you already have.",
      },
      {
        q: "Are referral fees compliant with CPA ethics rules?",
        a: "Referral compensation rules vary by state board and firm type. We recommend reviewing AICPA Rule 503 and your state's guidance before enrolling. We're happy to provide documentation for your review.",
      },
    ],
  },
  {
    slug: "real-estate-agent",
    title: "Real Estate Agent & Broker Partner",
    tagline: "Close more deals. Add capital to the conversation.",
    description:
      "Commercial and investment real estate transactions often stall on financing. The SGF Real Estate Partner program gives agents and brokers a direct line to commercial capital — so more of your deals actually close, and your clients come back.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    whoIsThis: [
      "Commercial real estate agents and brokers",
      "Residential agents working with investor clients",
      "Property managers advising owners on acquisitions",
      "Real estate attorneys or consultants adjacent to transactions",
    ],
    whatYouDo: [
      "Identify transactions where your client needs commercial or investment financing",
      "Introduce them to SGF early in the process — before the search, not after",
      "Stay connected as the deal advisor while we handle capital structure",
    ],
    whatWeProvide: [
      "Fast qualification feedback so your clients know what they can do",
      "Access to CRE, fix-and-flip, DSCR rental, and SBA financing programs",
      "Deal support through close — including lender coordination",
      "Referral compensation on funded transactions",
    ],
    notAFit: [
      "Agents focused exclusively on residential owner-occupied transactions",
      "Partners expecting SGF to source real estate opportunities",
      "Anyone expecting guaranteed financing approval for clients",
    ],
    faqs: [
      {
        q: "When in the transaction should I introduce SGF?",
        a: "Early is always better. Pre-qualification before the property search ensures your client knows their real budget. Last-minute financing introductions carry more risk for everyone.",
      },
      {
        q: "What commercial financing programs does SGF offer for real estate?",
        a: "We work across commercial real estate, fix-and-flip, DSCR rental loans, SBA owner-occupied real estate, and construction bridge financing. See our financing programs for full detail.",
      },
      {
        q: "Do you work with residential investor clients?",
        a: "Yes — DSCR rental loans and fix-and-flip programs are specifically structured for residential investment properties. We do not originate primary residence mortgages.",
      },
    ],
  },
];
