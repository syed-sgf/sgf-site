import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Calculators & Planning Tools | Starting Gate Financial",
  description:
    "Free commercial financing calculators: SBA loan payment estimator, DSCR calculator, MCA true cost tool, FICA tip credit estimator, and working capital calculator. Built for business owners — no guesswork.",
  openGraph: {
    title: "Financial Calculators & Planning Tools | Starting Gate Financial",
    description:
      "Model your financing before you apply. Deterministic calculators for SBA loans, DSCR, MCA, FICA tip credit, and working capital.",
  },
};

const G = {
  green: "#118241",
  dark: "#082B09",
  gold: "#CE9562",
};

const calculators = [
  {
    id: "01",
    href: "/tools/business-loan-calculator",
    title: "SBA Loan Calculator",
    subtitle: "Estimate monthly payments & total cost",
    description:
      "Enter your loan amount, interest rate, and term in years to calculate your exact monthly payment, annual debt service, and total cost of capital over the loan life.",
    tags: ["SBA Loans", "Term Loans", "Payment Planning"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h4" />
      </svg>
    ),
  },
  {
    id: "02",
    href: "/tools/dscr-calculator",
    title: "DSCR Calculator",
    subtitle: "Debt service coverage ratio",
    description:
      "Enter monthly rental income, monthly operating expenses, and annual debt service to calculate your DSCR and annual NOI. Used by lenders to assess CRE and rental property deals.",
    tags: ["Commercial Real Estate", "Rental Loans", "Fix & Flip"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
        <path d="M3 17l4-8 4 5 3-4 4 7" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    id: "03",
    href: "/tools/working-capital-calculator",
    title: "Working Capital Calculator",
    subtitle: "Estimate short-term capital needs",
    description:
      "Enter your monthly revenue, monthly expenses, and desired coverage period to estimate how much working capital you may need to bridge cash flow gaps.",
    tags: ["Working Capital", "Business Lines", "Equipment"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    id: "04",
    href: "/tools/mca-calculator",
    title: "MCA True Cost Calculator",
    subtitle: "Merchant cash advance planning tool",
    description:
      "Enter the advance amount and factor rate to see the true total payback. Factor rates obscure real cost — this tool makes it transparent before you commit.",
    tags: ["Merchant Cash Advance", "Cost Transparency"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    id: "05",
    href: "/tools/fica-tip-credit-calculator",
    title: "FICA Tip Credit Calculator",
    subtitle: "IRC § 45B employer tax credit",
    description:
      "Estimate the federal tax credit available to restaurant, hospitality, and food & beverage operators on FICA taxes paid on tipped employee wages.",
    tags: ["Restaurants", "Hospitality", "Tax Credit"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
  },
];

export default function ToolsHubPage() {
  return (
    <main style={{ fontFamily: "var(--font-source-sans)", color: "#1e293b", background: "#fff" }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
            color: G.gold, fontWeight: 600, marginBottom: "1.25rem",
          }}>
            Planning Tools
          </p>
          <h1 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem",
            maxWidth: 700,
          }}>
            Calculators &amp; Planning Tools
          </h1>
          <p style={{
            fontSize: "1.1rem", color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8, maxWidth: 600,
          }}>
            Deterministic calculators built for clarity — not assumptions. Model
            your financing before you apply. No approvals, no advisory logic — just math.
          </p>
        </div>
      </section>

      {/* ── Why These Tools ──────────────────────────────────────── */}
      <section style={{ background: "#f8f6f1", padding: "3rem 2rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem",
        }} className="sgf-tools-why-grid">
          {[
            { title: "Deterministic Only", body: "Every output is a direct result of your inputs. No scoring models, no AI inferences, no assumptions baked in." },
            { title: "Decision Support", body: "Use these tools to pressure-test a deal before talking to a lender — or to walk into a consultation better prepared." },
            { title: "No Approval Language", body: "These calculators do not determine eligibility. They estimate. Final terms are set by lenders, not by tools." },
          ].map(({ title, body }) => (
            <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-playfair)", fontSize: "1rem",
                  fontWeight: 700, color: G.dark, marginBottom: "0.4rem",
                }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calculator Cards ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem",
          }} className="sgf-calc-grid">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                style={{
                  display: "flex", gap: "1.5rem", alignItems: "flex-start",
                  border: "1px solid #e2e8f0", padding: "2rem",
                  textDecoration: "none", color: "inherit",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  background: "#fff",
                }}
                className="sgf-calc-card"
              >
                {/* Number + Icon */}
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: 52, height: 52,
                    background: G.dark, color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "0.5rem",
                  }}>
                    {calc.icon}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-playfair)", fontSize: "0.75rem",
                    fontWeight: 700, color: G.gold, letterSpacing: "0.1em",
                  }}>
                    {calc.id}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <h2 style={{
                    fontFamily: "var(--font-playfair)", fontSize: "1.2rem",
                    fontWeight: 700, color: G.dark, marginBottom: "0.25rem",
                    lineHeight: 1.3,
                  }}>
                    {calc.title}
                  </h2>
                  <p style={{
                    fontSize: "0.8rem", color: G.gold, fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    marginBottom: "0.75rem",
                  }}>
                    {calc.subtitle}
                  </p>
                  <p style={{
                    fontSize: "0.875rem", color: "#475569",
                    lineHeight: 1.7, marginBottom: "1rem",
                  }}>
                    {calc.description}
                  </p>
                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                    {calc.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: "0.7rem", fontWeight: 600,
                        background: "#f1f5f9", color: "#475569",
                        padding: "0.2rem 0.6rem", letterSpacing: "0.05em",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: "0.875rem", fontWeight: 700,
                    color: G.green,
                  }}>
                    Open calculator →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────────── */}
      <section style={{
        background: "#f8f6f1", padding: "2.5rem 2rem",
        borderTop: "1px solid #e2e8f0",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.8,
          }}>
            All calculators on this page provide estimates for planning purposes only. Results do not constitute a financing offer, commitment, or approval. 
            Final loan terms, rates, and eligibility are determined by lenders and subject to underwriting. 
            Starting Gate Financial arranges commercial financing on behalf of business owners and does not make lending decisions.
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section style={{
        background: G.dark, padding: "4rem 2rem",
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, marginBottom: "1rem",
        }}>
          Ready to talk numbers?
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700, color: "#fff", marginBottom: "1rem",
        }}>
          Schedule a Financing Consultation
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.6)", fontSize: "0.95rem",
          maxWidth: 480, marginBottom: "2rem", lineHeight: 1.75,
        }}>
          Run your numbers here, then bring them to a consultation.
          We&rsquo;ll review your deal structure and tell you honestly what&rsquo;s fundable.
        </p>
        <Link href="/contact" style={{
          background: G.gold, color: G.dark, padding: "0.875rem 2.5rem",
          fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
          fontFamily: "var(--font-source-sans)", letterSpacing: "0.05em",
          display: "inline-block",
        }}>
          Schedule a Consultation →
        </Link>
      </section>

    </main>
  );
}
