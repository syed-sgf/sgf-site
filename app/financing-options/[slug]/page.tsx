import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, heroImageMap } from "@/lib/financing-data";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import FaqAccordion from "@/components/FaqAccordion";

const isProd = process.env.VERCEL_ENV === "production";


export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.title} | Starting Gate Financial`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.title} | Starting Gate Financial`,
      description: product.description.substring(0, 160),
      url: `https://startinggatefinancial.com/financing-options/${slug}`,
      siteName: "Starting Gate Financial",
      type: "website",
    },
    alternates: { canonical: `https://startinggatefinancial.com/financing-options/${slug}` },
    robots: isProd
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

const G = {
  dark: "#082B09",
  primary: "#118241",
  gold: "#CE9562",
  cream: "#F8F6F1",
  border: "#E2DDD6",
  textDark: "#0F172A",
  textMid: "#475569",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

const goodFitMap: Record<string, string[]> = {
  "business-loc-term-loans": ["Businesses with seasonal or cyclical revenue", "Companies needing ongoing access to working capital", "Operators managing 30–90 day invoice cycles", "Businesses with 2+ years operating history"],
  "commercial-real-estate": ["Owner-operators purchasing their business premises", "Investors acquiring income-producing properties", "Developers seeking construction-to-perm financing", "Businesses refinancing existing commercial debt"],
  "sba-financing": ["Businesses that can't qualify for conventional financing", "Acquisitions requiring longer amortization periods", "Startups with strong projections but limited history", "Owner-occupied real estate purchases"],
  "equipment-financing": ["Businesses needing specific equipment to operate", "Companies preserving working capital for operations", "Operators replacing or upgrading existing equipment", "Businesses with strong equipment collateral"],
  "fix-and-flip": ["Experienced investors with a documented track record", "Projects with clear ARV and defined exit strategy", "Investors with access to renovation contractors", "Short-term bridge needs with defined timelines"],
  "dscr-rental-loans": ["Investors building long-term rental portfolios", "Properties with stable, documentable rental income", "Investors who prefer asset-based underwriting", "Landlords refinancing existing rental debt"],
  "franchise-financing": ["Established franchise brands with proven unit economics", "Operators with industry experience and liquidity", "Multi-unit expansion with existing franchise agreements", "First-time franchisees with strong financial profiles"],
  "accounts-receivable-financing": ["B2B businesses with creditworthy commercial clients", "Companies with 30–90 day payment cycles", "Businesses experiencing rapid growth", "Operators needing to fund payroll or inventory"],
  "startup-financing": ["Pre-revenue businesses with strong founder profiles", "Companies with signed contracts or LOIs", "SBA-eligible startups with industry experience", "Businesses with sufficient collateral or equity injection"],
  "merchant-cash-advance": ["Businesses needing capital within 24–72 hours", "High-volume card processors needing short-term bridge", "Operators with strong daily revenue who can't wait", "Businesses using MCA as a last resort bridge only"],
};

const notFitMap: Record<string, string[]> = {
  "business-loc-term-loans": ["Startups under 1 year with no revenue history", "Businesses with recent bankruptcies or tax liens", "Companies seeking capital for real estate purchases", "Borrowers needing a one-time lump sum only"],
  "commercial-real-estate": ["Businesses purchasing residential rental properties", "Borrowers with debt-service coverage below 1.20x", "Properties with environmental issues or title problems", "Speculative land purchases with no development plan"],
  "sba-financing": ["Businesses in ineligible SBA industries", "Borrowers who need funding in under 30 days", "Companies with unresolved federal tax debt", "Real estate investors buying non-owner-occupied property"],
  "equipment-financing": ["General working capital needs unrelated to equipment", "Businesses with no clear equipment collateral", "Startups with no revenue or operating history", "Equipment purchases under $10K — often not worth structuring"],
  "fix-and-flip": ["First-time investors with no rehab experience", "Projects without a clear comparable sales analysis", "Borrowers who need long-term hold financing", "Properties in markets with poor liquidity or comps"],
  "dscr-rental-loans": ["Properties that are vacant with no lease in place", "Owner-occupied properties — not investor programs", "Borrowers needing fast close with no documentation", "Properties with below-market or subsidized rents"],
  "franchise-financing": ["Unproven or emerging franchise concepts", "Operators with no industry or management experience", "Franchises with unresolved litigation or FDD issues", "Borrowers with significant consumer debt load"],
  "accounts-receivable-financing": ["B2C businesses with retail consumers as clients", "Businesses with disputed or aged receivables", "Companies with receivables under $25K monthly", "Industries with high chargeback or return rates"],
  "startup-financing": ["Pre-idea stage with no business plan or financials", "Borrowers with recent foreclosures or judgments", "Businesses in high-risk or SBA-ineligible industries", "Operators unwilling to provide personal guarantee"],
  "merchant-cash-advance": ["Businesses that qualify for conventional financing", "Long-term capital needs — MCA is expensive short-term bridge", "Businesses with thin margins that can't absorb factor rates", "Operators already carrying multiple MCA positions"],
};

const structureMap: Record<string, string> = {
  "business-loc-term-loans": "Revolving credit lines draw and repay like a credit card — you borrow what you need, repay it, and access it again. Term loans provide a lump sum repaid over a fixed schedule with predictable monthly payments. Both are structured around your business cash flow and creditworthiness, not hard assets.",
  "commercial-real-estate": "CRE loans are typically structured as first-lien mortgages on the subject property, amortized over 20–25 years with balloon payments at 5, 7, or 10 years. SBA 504 structures split financing between a conventional first lien and an SBA debenture. Bridge loans are shorter-term with interest-only periods.",
  "sba-financing": "SBA 7(a) loans are partially guaranteed by the federal government, allowing lenders to extend credit to businesses that wouldn't qualify conventionally. SBA 504 loans split financing between a bank (50%) and a Certified Development Company (40%) with a 10% equity injection. Terms extend to 25 years for real estate.",
  "equipment-financing": "Equipment loans use the financed equipment as collateral, reducing risk for the lender. The equipment's useful life typically defines the loan term. Leases may be structured as operating or capital leases depending on accounting and tax objectives.",
  "fix-and-flip": "Fix and flip loans are typically structured as short-term bridge loans with interest-only payments during the renovation period. The loan covers purchase price plus a portion of renovation costs, with the after-repair value (ARV) as the primary underwriting metric.",
  "dscr-rental-loans": "DSCR loans underwrite the property's rental income rather than the borrower's personal income. The debt service coverage ratio — net operating income divided by total debt service — must typically exceed 1.20x. These are long-term, fully amortizing loans structured like conventional mortgages.",
  "franchise-financing": "Franchise financing is typically structured as SBA 7(a) loans, which recognize franchise agreements as collateral and allow longer amortization. Conventional financing may also apply for multi-unit operators with existing cash flow. Lenders evaluate both the borrower profile and the franchise brand's unit economics.",
  "accounts-receivable-financing": "Accounts receivable financing advances a percentage of outstanding invoices — typically 70–85% — with the remainder held in reserve until the client pays. The advance is repaid when the invoice is collected. Factoring transfers collection responsibility to the lender; invoice financing keeps collections in-house.",
  "startup-financing": "Startup financing is often structured through SBA programs that allow projections-based underwriting with limited operating history. Equity injection requirements (typically 10–30%) and personal guarantees are standard. Collateral is evaluated broadly — not just business assets.",
  "merchant-cash-advance": "An MCA is not a loan — it's a purchase of future receivables at a discount. Repayment is structured as a fixed percentage of daily card sales or ACH debits, which means payments fluctuate with revenue. Factor rates (not APR) determine the total repayment amount.",
};

const faqMap: Record<string, {q: string; a: string}[]> = {
  "business-loc-term-loans": [
    { q: "What's the difference between a line of credit and a term loan?", a: "A line of credit is revolving — you draw, repay, and reuse it. A term loan is a one-time lump sum with a fixed repayment schedule. Lines of credit work best for ongoing working capital needs; term loans suit one-time investments." },
    { q: "How is the credit limit determined?", a: "Lenders evaluate your annual revenue, cash flow, time in business, and creditworthiness. Limits typically range from 10–20% of annual revenue for well-qualified borrowers." },
    { q: "Do I need collateral for a business line of credit?", a: "Not always. Unsecured lines are available for strong-credit borrowers, but higher limits often require a blanket lien on business assets or real estate collateral." },
  ],
  "commercial-real-estate": [
    { q: "What is the minimum down payment for commercial real estate?", a: "Conventional CRE loans typically require 20–30% down. SBA 504 programs can reduce the equity requirement to 10% for owner-occupied properties." },
    { q: "What is debt service coverage ratio (DSCR)?", a: "DSCR measures whether a property generates enough income to cover its debt payments. A 1.25x DSCR means the property earns 25% more than the annual debt payment. Most lenders require 1.20–1.25x minimum." },
    { q: "Can I use CRE financing to renovate an existing property?", a: "Yes. Construction-to-permanent loans fund both acquisition and renovation, converting to a long-term mortgage upon project completion." },
  ],
  "sba-financing": [
    { q: "How long does an SBA loan take to close?", a: "SBA 7(a) loans typically close in 30–90 days depending on lender, loan size, and documentation completeness. SBA Express loans can close faster but have lower guarantee percentages." },
    { q: "What credit score do I need for an SBA loan?", a: "Most SBA lenders look for a personal credit score of 650 or above, though some programs have flexibility. Business credit history and overall financial profile matter equally." },
    { q: "Can I use an SBA loan to buy a business?", a: "Yes. SBA 7(a) loans are commonly used for business acquisitions and include goodwill in the financing, which conventional lenders typically won't fund." },
  ],
  "equipment-financing": [
    { q: "What types of equipment qualify?", a: "Most business-use equipment qualifies — machinery, vehicles, medical devices, restaurant equipment, construction equipment, technology, and more. The equipment must be identifiable and have a determinable useful life." },
    { q: "Is equipment financing the same as an equipment lease?", a: "No. With financing, you own the equipment and build equity. With a lease, you use the equipment for a period and may have buyout options at the end. The right structure depends on your tax strategy and long-term needs." },
    { q: "Can I finance used equipment?", a: "Yes, though lenders will assess the equipment's age, condition, and remaining useful life. Used equipment financing is common for vehicles, construction equipment, and manufacturing machinery." },
  ],
  "fix-and-flip": [
    { q: "What is after-repair value (ARV) and why does it matter?", a: "ARV is the estimated value of the property after renovations are complete. Lenders use ARV to determine the maximum loan amount — typically 65–75% of ARV. Strong comps and a credible renovation budget are essential." },
    { q: "How fast can a fix and flip loan close?", a: "Hard money and bridge lenders often close in 7–14 days. Speed depends on property evaluation, borrower experience, and documentation readiness." },
    { q: "Do I need prior experience to qualify?", a: "Most lenders prefer borrowers with at least one completed flip. First-time investors may qualify with a strong financial profile, larger down payment, and experienced contractor partnerships." },
  ],
  "dscr-rental-loans": [
    { q: "Does my personal income matter for a DSCR loan?", a: "No. DSCR loans qualify the property based on rental income relative to debt service — not your personal W-2 or tax returns. This is particularly useful for self-employed investors or those with complex income structures." },
    { q: "What DSCR ratio do lenders require?", a: "Most lenders require a minimum DSCR of 1.20x, meaning the property earns 20% more than the debt payment. Some portfolio lenders will go to 1.0x with compensating factors." },
    { q: "Can I use a DSCR loan for short-term rentals?", a: "Some lenders accept short-term rental income from platforms like Airbnb, but they typically require a 12-month operating history and apply a haircut to projected income." },
  ],
  "franchise-financing": [
    { q: "Does the franchise brand affect my loan terms?", a: "Yes significantly. Established brands with strong unit economics receive more favorable terms. Lenders evaluate the FDD, franchise failure rates, and brand support systems when underwriting." },
    { q: "Can I finance my franchise fee with SBA financing?", a: "Yes. SBA 7(a) loans can include the initial franchise fee, leasehold improvements, equipment, and working capital in a single loan structure." },
    { q: "What is a typical equity injection requirement?", a: "SBA franchise loans typically require 10–20% equity injection from the borrower. Multi-unit expansions backed by existing cash flow may qualify for lower injection requirements." },
  ],
  "accounts-receivable-financing": [
    { q: "What is the difference between factoring and invoice financing?", a: "With factoring, you sell your invoices to a lender who collects directly from your clients. With invoice financing, you retain collection responsibility and use invoices as collateral. Factoring is faster but clients know you've used a lender." },
    { q: "How quickly can I access funds?", a: "After initial setup (3–5 days), ongoing advances typically fund within 24 hours of invoice submission. This makes AR financing one of the fastest capital deployment tools available." },
    { q: "Does the creditworthiness of my clients matter?", a: "Yes. Because repayment depends on your clients paying their invoices, lenders evaluate the credit quality of your client base — not just your business. Invoices from creditworthy commercial clients command better advance rates." },
  ],
  "startup-financing": [
    { q: "Can I get a business loan with no revenue?", a: "Yes, through certain SBA programs and lenders that underwrite projections. Strong personal credit, industry experience, equity injection, and a detailed business plan are typically required." },
    { q: "What is an equity injection?", a: "An equity injection is the borrower's own cash contribution to the project. SBA startup loans typically require 10–30% equity injection, demonstrating skin in the game and reducing lender risk." },
    { q: "Do I need a business plan?", a: "For startup financing, yes. Lenders need to evaluate your revenue projections, market analysis, management team, and capital use plan. A well-structured business plan significantly improves approval odds." },
  ],
  "merchant-cash-advance": [
    { q: "What is a factor rate and how does it work?", a: "A factor rate (e.g., 1.30) is multiplied by the advance amount to determine total repayment. A $100,000 advance at 1.30 means you repay $130,000 total — regardless of how quickly you pay it off." },
    { q: "Is an MCA right for my business?", a: "MCAs are expensive capital. They work best as a short-term bridge when you have a specific, high-ROI use of funds and a clear repayment event on the horizon. They are not appropriate for ongoing operating costs." },
    { q: "Can I qualify if I've been declined elsewhere?", a: "MCA underwriting is based primarily on daily revenue volume and consistency, not credit score. Businesses declined for traditional financing often qualify, though at higher cost." },
  ],
};

export default async function FinancingSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const goodFit = goodFitMap[product.slug] || product.useCases;
  const notFit = notFitMap[product.slug] || [];
  const structure = structureMap[product.slug] || product.description;
  const faqs = faqMap[product.slug] || [];

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Financing Programs", path: "/financing-options" },
    { name: product.title, path: `/financing-options/${product.slug}` },
  ]);

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))) }} />
      )}

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "5rem 2rem 4rem",
          borderBottom: `3px solid ${G.gold}`,
          backgroundImage: heroImageMap[product.slug]
            ? `url(${heroImageMap[product.slug]})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: heroImageMap[product.slug]
              ? "rgba(8, 43, 9, 0.82)"
              : G.dark,
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Link href="/financing-options" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontFamily: G.sans, textDecoration: "none" }}>Financing Programs</Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: G.gold, fontFamily: G.sans }}>{product.title}</span>
          </div>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1rem", fontFamily: G.sans }}>Financing Program</p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "1.25rem", textAlign: "center" }}>{product.title}</h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", lineHeight: "1.75", maxWidth: "600px", fontFamily: G.sans, textAlign: "center", marginBottom: "2.5rem" }}>{product.description}</p>

          {/* Stats bar */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", padding: "1.5rem 2rem", background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.1)`, borderRadius: "4px", width: "100%" }} className="fin-stats">
            {[
              { label: "Loan Range", value: `${product.minAmount} – ${product.maxAmount}` },
              { label: "Term Range", value: product.termRange },
              { label: "Structure", value: product.subtitle },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center", flex: 1, minWidth: "140px" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontFamily: G.sans, marginBottom: "0.3rem" }}>{stat.label}</p>
                <p style={{ fontSize: "0.95rem", color: G.gold, fontFamily: G.sans, fontWeight: "600" }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>


      {/* USE CASES */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>What It&apos;s Used For</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem", textAlign: "center" }}>Common Use Cases</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="fin-grid-3">
            {product.useCases.map((uc) => (
              <div key={uc} style={{ padding: "1.25rem 1.5rem", background: "#fff", border: `1px solid ${G.border}`, borderLeft: `3px solid ${G.primary}`, borderRadius: "3px", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: G.primary, fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                <p style={{ fontSize: "0.9rem", color: G.textDark, lineHeight: "1.6", margin: 0, fontFamily: G.sans }}>{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={{ padding: "4rem 2rem", background: "#fff", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Program Details</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem", textAlign: "center" }}>Key Features</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="fin-grid-2">
            {product.keyFeatures.map((f) => (
              <div key={f} style={{ padding: "1rem 1.5rem", background: G.cream, border: `1px solid ${G.border}`, borderRadius: "3px", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: G.gold, fontSize: "0.9rem", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
                <p style={{ fontSize: "0.9rem", color: G.textDark, lineHeight: "1.6", margin: 0, fontFamily: G.sans }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>How It Works</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem", textAlign: "center" }}>How This Financing Is Structured</h2>
          </div>
          <div style={{ padding: "2rem", background: "#fff", border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "3px" }}>
            <p style={{ fontSize: "1rem", color: G.textDark, lineHeight: "1.8", margin: 0, fontFamily: G.sans }}>{structure}</p>
          </div>
        </div>
      </section>

      {/* GOOD FIT / NOT A FIT */}
      <section style={{ padding: "4rem 2rem", background: "#fff", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Fit Assessment</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem", textAlign: "center" }}>Is This the Right Program?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="fin-grid-2">
            <div style={{ padding: "2rem", background: G.cream, border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "3px" }}>
              <p style={{ fontFamily: G.serif, fontSize: "1.05rem", fontWeight: "700", color: G.textDark, marginBottom: "1.25rem" }}>✓ This program IS a good fit when:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {goodFit.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: G.textDark, lineHeight: "1.5", fontFamily: G.sans }}>
                    <span style={{ color: G.primary, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: "2rem", background: G.cream, border: `1px solid ${G.border}`, borderTop: `3px solid #94a3b8`, borderRadius: "3px" }}>
              <p style={{ fontFamily: G.serif, fontSize: "1.05rem", fontWeight: "700", color: G.textDark, marginBottom: "1.25rem" }}>✗ This program is NOT the right fit when:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {notFit.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: G.textMid, lineHeight: "1.5", fontFamily: G.sans }}>
                    <span style={{ color: "#94a3b8", flexShrink: 0 }}>✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section style={{ padding: "4rem 2rem", background: G.cream }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Common Questions</p>
              <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem", textAlign: "center" }}>Frequently Asked Questions</h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* RELATED PROGRAMS */}
      <section style={{ padding: "4rem 2rem", background: "#fff", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Keep Exploring</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0", textAlign: "center" }}>Related Programs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="fin-grid-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/financing-options/${p.slug}`} style={{ padding: "1.5rem", background: G.cream, border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "3px", textDecoration: "none", display: "block" }}>
                <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.4rem" }}>{p.title}</p>
                <p style={{ fontSize: "0.82rem", color: G.textMid, margin: "0 0 0.75rem", fontFamily: G.sans }}>{p.subtitle}</p>
                <span style={{ fontSize: "0.8rem", color: G.primary, fontWeight: "600", fontFamily: G.sans }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem", borderTop: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>Ready to Move Forward</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>{product.ctaText}</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "2rem", fontFamily: G.sans }}>No cost. No obligation. A direct conversation about whether this program fits your deal.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }} className="fin-cta-btns">
            <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Request a Financing Review</Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>View All Programs</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
