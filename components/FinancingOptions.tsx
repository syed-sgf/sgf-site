"use client";
import Link from "next/link";

const programs = [
  { title: "SBA Financing", desc: "Long-term capital for owner-operated growth", href: "/financing-options/sba-financing" },
  { title: "Commercial Real Estate", desc: "Acquisition, refinance, and construction execution", href: "/financing-options/commercial-real-estate" },
  { title: "Business LOC & Term Loans", desc: "Working capital and operational stability", href: "/financing-options/business-loc-term-loans" },
  { title: "Equipment Financing", desc: "Acquire without straining cash flow", href: "/financing-options/equipment-financing" },
  { title: "DSCR Rental Loans", desc: "Investment property financing on cash flow", href: "/financing-options/dscr-rental-loans" },
  { title: "Fix & Flip Loans", desc: "Short-term capital for rehab execution", href: "/financing-options/fix-and-flip" },
  { title: "Accounts Receivable", desc: "Turn outstanding invoices into working capital", href: "/financing-options/accounts-receivable-financing" },
  { title: "Franchise Financing", desc: "Structured capital for startup and expansion", href: "/financing-options/franchise-financing" },
  { title: "Merchant Cash Advance", desc: "Revenue-based advances for fast-moving businesses", href: "/financing-options/merchant-cash-advance" },
  { title: "Startup Financing", desc: "Capital pathways for early-stage businesses", href: "/financing-options/startup-financing" },
];

export default function FinancingOptions() {
  return (
    <section style={{ background: "white", padding: "6rem 0", borderBottom: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#CE9562", fontWeight: "600", marginBottom: "1rem",
            fontFamily: "var(--font-source-sans)", display: "block", textAlign: "center", width: "100%"
          }}>01 — Capital Solutions</p>
          <h2 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
            fontWeight: "700", color: "#0F172A", lineHeight: "1.2", marginBottom: "1rem"
          }}>Financing Paths Built for How<br />Businesses Actually Operate</h2>
          <p style={{
            fontSize: "1rem", color: "#64748B", maxWidth: "480px",
            margin: "0 auto", lineHeight: "1.75", fontFamily: "var(--font-source-sans)"
          }}>From SBA loans to commercial real estate — capital structured for your stage and sector.</p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          border: "1px solid #E2DDD6"
        }}>
          {programs.map((p, i) => (
            <Link key={p.href} href={p.href} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1.35rem 1.75rem", background: "white", textDecoration: "none",
              borderRight: i % 2 === 0 ? "1px solid #E2DDD6" : "none",
              borderBottom: "1px solid #E2DDD6",
              transition: "background 0.15s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#F8F6F1"}
            onMouseLeave={e => e.currentTarget.style.background = "white"}
            >
              <div>
                <p style={{
                  fontFamily: "var(--font-playfair)", fontSize: "0.98rem",
                  fontWeight: "600", color: "#0F172A", marginBottom: "0.2rem"
                }}>{p.title}</p>
                <p style={{ fontSize: "0.8rem", color: "#64748B", fontFamily: "var(--font-source-sans)" }}>{p.desc}</p>
              </div>
              <span style={{ color: "#CE9562", fontSize: "1rem", marginLeft: "1rem", flexShrink: 0 }}>→</span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <Link href="/financing-options" style={{
            fontSize: "0.88rem", fontWeight: "600", color: "#082B09",
            textDecoration: "none", borderBottom: "1px solid #CE9562",
            paddingBottom: "2px", fontFamily: "var(--font-source-sans)"
          }}>View all financing options →</Link>
        </div>
      </div>
    </section>
  );
}
