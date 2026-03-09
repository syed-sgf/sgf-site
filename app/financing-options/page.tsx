import Link from "next/link";

/* ── Design tokens ───────────────────────────────────────────────────── */
const G = {
  dark:     "#082B09",
  primary:  "#118241",
  gold:     "#CE9562",
  cream:    "#F8F6F1",
  border:   "#E2DDD6",
  textDark: "#0F172A",
  textMid:  "#475569",
  textLight:"#94A3B8",
  slate50:  "#F8FAFC",
  serif:    "var(--font-playfair)",
  sans:     "var(--font-source-sans)",
};

/* ── Section header (flex + column + alignItems center pattern) ────── */
function SectionHeader({
  eyebrow, h2, sub, light = false,
}: {
  eyebrow: string; h2: string; sub: string; light?: boolean;
}) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      textAlign: "center", marginBottom: "3.5rem",
    }}>
      <p style={{
        fontSize: "11px", letterSpacing: "0.2em",
        textTransform: "uppercase" as const,
        color: G.gold, fontWeight: "600",
        marginBottom: "1rem", fontFamily: G.sans,
      }}>{eyebrow}</p>
      <h2 style={{
        fontFamily: G.serif,
        fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
        fontWeight: "700",
        color: light ? "white" : G.textDark,
        lineHeight: "1.2", marginBottom: "1rem", textAlign: "center",
      }}>{h2}</h2>
      <p style={{
        fontSize: "1rem",
        color: light ? "rgba(255,255,255,0.55)" : G.textMid,
        maxWidth: "480px", lineHeight: "1.75",
        fontFamily: G.sans, textAlign: "center",
      }}>{sub}</p>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────────── */
const corePrograms = [
  {
    title: "Business LOC & Term Loans",
    desc:  "Revolving lines of credit and fixed-term loans structured around your operating cycle, revenue pattern, and repayment capacity.",
    href:  "/financing-options/business-loc-term-loans",
  },
  {
    title: "Commercial Real Estate",
    desc:  "Purchase, refinance, or cash-out on owner-occupied or investment commercial property with conventional or agency financing.",
    href:  "/financing-options/commercial-real-estate",
  },
  {
    title: "SBA Financing",
    desc:  "SBA 7(a) and 504 programs for businesses that need longer terms, lower down payments, or access to capital not available through conventional lending.",
    href:  "/financing-options/sba-financing",
  },
  {
    title: "Equipment Financing",
    desc:  "Asset-backed financing for machinery, vehicles, and technology — structured so the equipment's useful life aligns with the repayment schedule.",
    href:  "/financing-options/equipment-financing",
  },
  {
    title: "Fix & Flip Loans",
    desc:  "Short-term bridge financing for residential and small commercial renovation projects, underwritten on the after-repair value of the property.",
    href:  "/financing-options/fix-and-flip",
  },
  {
    title: "DSCR Rental Loans",
    desc:  "Long-term rental property loans underwritten on property cash flow rather than personal income — built for real estate investors.",
    href:  "/financing-options/dscr-rental-loans",
  },
  {
    title: "Franchise Financing",
    desc:  "Capital for franchise acquisition, build-out, and expansion — structured with lenders familiar with franchise disclosure agreements and brand requirements.",
    href:  "/financing-options/franchise-financing",
  },
  {
    title: "Accounts Receivable",
    desc:  "Invoice factoring and AR-backed lines of credit that convert outstanding receivables into working capital without adding term debt.",
    href:  "/financing-options/accounts-receivable",
  },
  {
    title: "Startup Financing",
    desc:  "Capital solutions for pre-revenue and early-stage businesses, including SBA programs, equipment-backed structures, and unsecured options where applicable.",
    href:  "/financing-options/startup-financing",
  },
];

const howToThink = [
  {
    title: "Working Capital vs. Asset-Backed",
    body:  "Working capital financing — lines of credit, term loans, invoice factoring — is repaid from operating cash flow. Asset-backed financing is secured by something tangible: real estate, equipment, or receivables. The right structure depends on what the capital is actually being used for, not just how much you need.",
  },
  {
    title: "Short-Term vs. Long-Term",
    body:  "Short-term financing (under 24 months) makes sense for inventory, bridge gaps, or seasonal cash needs. Long-term financing — typically 5 to 25 years — is appropriate for capital assets, real estate, or business acquisition. Matching the repayment horizon to the purpose of the capital keeps debt service manageable.",
  },
  {
    title: "Startup vs. Established",
    body:  "Lenders underwrite startups and established businesses differently. Established businesses are evaluated on historical cash flow and tax returns. Startups are evaluated on projections, collateral, personal credit, and sometimes industry experience. The financing options available — and how they're structured — differ accordingly.",
  },
];

const howSGFStructures = [
  {
    title: "Documentation Readiness",
    body:  "Most deal delays come from incomplete or inconsistent documentation. We review your financials, tax returns, and entity structure before engaging lenders — so your file is submitted correctly the first time.",
  },
  {
    title: "Capital Structure Alignment",
    body:  "We match the financing structure to the actual use of capital. Mismatched structures — long-term debt for short-term needs, or short-term debt for capital expenditures — create repayment pressure that doesn't need to be there.",
  },
  {
    title: "Lender Fit",
    body:  "Different lenders have different credit appetites, industry preferences, and underwriting criteria. We submit files to lenders who are the right fit for your profile, not just whoever responds first.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────── */
export default function FinancingOptionsPage() {
  return (
    <main>

      {/* ── SECTION 1: Hero ─────────────────────────────────────── */}
      <section style={{
        background: G.cream,
        borderBottom: `1px solid ${G.border}`,
        padding: "5rem 2rem",
      }}>
        <div style={{
          maxWidth: "760px", margin: "0 auto",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: G.gold, fontWeight: "600",
            marginBottom: "1.25rem", fontFamily: G.sans,
          }}>Financing Programs</p>
          <h1 style={{
            fontFamily: G.serif,
            fontSize: "clamp(2.2rem, 4vw, 3rem)",
            fontWeight: "700", color: G.textDark,
            lineHeight: "1.15", marginBottom: "1.5rem",
            textAlign: "center",
          }}>
            Business Financing Programs,<br />Structured by Use Case
          </h1>
          <p style={{
            fontSize: "1.05rem", color: G.textMid,
            lineHeight: "1.8", maxWidth: "580px",
            fontFamily: G.sans, textAlign: "center",
          }}>
            Starting Gate Financial works as a capital advisor — not a product vendor. Every engagement starts with understanding how the capital will be used, what the business looks like on paper, and which financing structure actually fits. The programs below represent the range of options we work with across our lender network.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: How to Think About Business Financing ────── */}
      <section style={{
        background: G.slate50,
        padding: "5rem 2rem",
        borderBottom: `1px solid ${G.border}`,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Framework"
            h2="How to Think About Business Financing"
            sub="Before selecting a program, it helps to understand the distinctions that drive which structures are available — and appropriate — for your situation."
          />
          <div className="fo-think-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}>
            {howToThink.map((col) => (
              <div key={col.title} style={{
                padding: "2rem",
                background: "white",
                border: `1px solid ${G.border}`,
                borderTop: `3px solid ${G.gold}`,
              }}>
                <h3 style={{
                  fontFamily: G.serif,
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: G.textDark,
                  marginBottom: "0.85rem",
                  lineHeight: "1.3",
                }}>{col.title}</h3>
                <p style={{
                  fontSize: "0.92rem",
                  color: G.textMid,
                  lineHeight: "1.75",
                  fontFamily: G.sans,
                }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Core Financing Programs Grid ─────────────── */}
      <section style={{
        background: "white",
        padding: "5rem 2rem",
        borderBottom: `1px solid ${G.border}`,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Core Programs"
            h2="Financing Programs We Structure"
            sub="Each program below represents a category of capital we actively structure and submit through our lender network."
          />
          <div className="fo-programs-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}>
            {corePrograms.map((p) => (
              <div key={p.href} style={{
                padding: "1.75rem",
                border: `1px solid ${G.border}`,
                borderTop: `3px solid ${G.primary}`,
                background: "white",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                <h3 style={{
                  fontFamily: G.serif,
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: G.textDark,
                  lineHeight: "1.3",
                }}>{p.title}</h3>
                <p style={{
                  fontSize: "0.88rem",
                  color: G.textMid,
                  lineHeight: "1.7",
                  fontFamily: G.sans,
                  flexGrow: 1,
                }}>{p.desc}</p>
                <Link
                  href={p.href}
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    color: G.primary,
                    textDecoration: "none",
                    borderBottom: `1px solid ${G.primary}`,
                    paddingBottom: "1px",
                    alignSelf: "flex-start",
                    fontFamily: G.sans,
                  }}
                >
                  View Program Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Alternative Financing ────────────────────── */}
      <section style={{
        background: "#FDF8F3",
        padding: "5rem 2rem",
        borderTop: `1px solid #E8D9C8`,
        borderBottom: `1px solid #E8D9C8`,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", marginBottom: "3rem",
          }}>
            <p style={{
              fontSize: "11px", letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: G.gold, fontWeight: "600",
              marginBottom: "1rem", fontFamily: G.sans,
            }}>Alternative Capital</p>
            <h2 style={{
              fontFamily: G.serif,
              fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
              fontWeight: "700", color: G.textDark,
              lineHeight: "1.2", marginBottom: "1rem", textAlign: "center",
            }}>When Conventional Financing Isn't an Option</h2>
            <p style={{
              fontSize: "1rem", color: G.textMid,
              maxWidth: "520px", lineHeight: "1.75",
              fontFamily: G.sans, textAlign: "center",
            }}>
              Some businesses cannot qualify for bank or SBA financing due to time in business, credit profile, or revenue structure. The option below exists as a last-resort capital source — not a first recommendation.
            </p>
          </div>

          <div style={{ maxWidth: "540px", margin: "0 auto" }}>
            <div style={{
              padding: "2rem 2.25rem",
              border: `1px solid #D4B896`,
              borderTop: `3px solid ${G.gold}`,
              background: "white",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}>
              <div style={{
                display: "inline-block",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: G.gold,
                fontWeight: "700",
                fontFamily: G.sans,
                border: `1px solid ${G.gold}`,
                padding: "3px 8px",
                alignSelf: "flex-start",
              }}>Last Resort</div>
              <h3 style={{
                fontFamily: G.serif,
                fontSize: "1.25rem",
                fontWeight: "700",
                color: G.textDark,
                lineHeight: "1.3",
              }}>Merchant Cash Advance</h3>
              <p style={{
                fontSize: "0.92rem",
                color: G.textMid,
                lineHeight: "1.75",
                fontFamily: G.sans,
              }}>
                A merchant cash advance is a purchase of future receivables, not a loan. It carries factor rates — not interest rates — which translate to high effective APRs. We discuss MCAs only when a business has exhausted conventional options and needs bridge capital to stabilize operations.
              </p>
              <Link
                href="/financing-options/mca"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  color: G.primary,
                  textDecoration: "none",
                  borderBottom: `1px solid ${G.primary}`,
                  paddingBottom: "1px",
                  alignSelf: "flex-start",
                  fontFamily: G.sans,
                }}
              >
                View Program Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: How SGF Structures Financing ─────────────── */}
      <section style={{
        background: G.slate50,
        padding: "5rem 2rem",
        borderBottom: `1px solid ${G.border}`,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Our Approach"
            h2="How SGF Structures Financing"
            sub="The work we do before a lender ever sees your file determines whether a deal gets funded — and on what terms."
          />
          <div className="fo-structure-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}>
            {howSGFStructures.map((item, i) => (
              <div key={item.title} style={{
                padding: "2rem",
                background: "white",
                border: `1px solid ${G.border}`,
                position: "relative" as const,
              }}>
                <div style={{
                  fontSize: "clamp(2.5rem, 3vw, 3rem)",
                  fontFamily: G.serif,
                  fontWeight: "700",
                  color: G.gold,
                  opacity: 0.25,
                  lineHeight: "1",
                  marginBottom: "1rem",
                }}>0{i + 1}</div>
                <h3 style={{
                  fontFamily: G.serif,
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: G.textDark,
                  marginBottom: "0.85rem",
                  lineHeight: "1.3",
                }}>{item.title}</h3>
                <p style={{
                  fontSize: "0.92rem",
                  color: G.textMid,
                  lineHeight: "1.75",
                  fontFamily: G.sans,
                }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA Band ──────────────────────────────────── */}
      <section style={{
        background: G.dark,
        padding: "5rem 2rem",
        borderTop: `3px solid ${G.gold}`,
      }}>
        <div style={{
          maxWidth: "600px", margin: "0 auto",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: G.gold, fontWeight: "600",
            marginBottom: "1.25rem", fontFamily: G.sans,
            display: "block", textAlign: "center",
          }}>Ready to Move Forward?</p>
          <h2 style={{
            fontFamily: G.serif,
            fontSize: "clamp(2rem, 3vw, 2.8rem)",
            fontWeight: "700", color: "white",
            marginBottom: "1rem", lineHeight: "1.2", textAlign: "center",
          }}>Start a Financing Review</h2>
          <p style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "420px", margin: "0 auto 2.5rem",
            lineHeight: "1.75", fontFamily: G.sans, textAlign: "center",
          }}>No credit pull. No obligation.</p>
          <Link
            href="/apply"
            style={{
              display: "inline-block",
              background: "white",
              color: G.dark,
              padding: "0.9rem 2.5rem",
              fontSize: "0.88rem",
              fontWeight: "700",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              borderRadius: "2px",
              fontFamily: G.sans,
            }}
          >
            Discuss Your Financing Options
          </Link>
        </div>
      </section>

    </main>
  );
}
