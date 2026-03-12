import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { localBusinessSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Starting Gate Financial",
  description:
    "Starting Gate Financial is a commercial loan brokerage based in Richardson, TX. We structure SBA loans, commercial real estate, and business capital for owner-operators and investors nationwide.",
  path: "/about",
});

const G = {
  green: "#118241",
  dark: "#082B09",
  gold: "#CE9562",
  cream: "#F8F6F1",
  border: "#E2DDD6",
  textDark: "#0F172A",
  textMid: "#475569",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

const principles = [
  {
    n: "01",
    title: "Lender-Aligned Structuring",
    body: "We organize your financial package the way underwriters actually review it — not the way it looks on your desk. That means complete documentation, clean narratives, and no surprises at credit review.",
  },
  {
    n: "02",
    title: "Honest Deal Assessment",
    body: "If a deal isn't fundable as structured, we say so early. We'd rather tell you what needs to change than waste your time — and ours — on a file that isn't ready.",
  },
  {
    n: "03",
    title: "Program Fit Over Volume",
    body: "We match each deal to the right lender and program based on structure, collateral, and use of proceeds. There is no one-size approach. Each deal is evaluated on its own terms.",
  },
  {
    n: "04",
    title: "No Upfront Fees",
    body: "We are compensated at closing by lenders. You pay nothing to engage us, nothing to have your deal reviewed, and nothing if we can't get it funded.",
  },
];

const whoWeServe = [
  { icon: "⚒", label: "Construction & Contractors" },
  { icon: "🍽", label: "Restaurants & Food Service" },
  { icon: "⚕", label: "Healthcare & Medical Practices" },
  { icon: "⛽", label: "Oil & Gas Operators" },
  { icon: "⬡", label: "Real Estate Investors" },
  { icon: "◈", label: "Professional Services" },
  { icon: "🚚", label: "Trucking & Logistics" },
  { icon: "◻", label: "Retail & Franchise Operators" },
];

const programs = [
  "SBA 7(a) & 504 Loans",
  "Commercial Real Estate Financing",
  "Business Lines of Credit & Term Loans",
  "Equipment Financing",
  "Fix & Flip / Bridge Loans",
  "DSCR Rental Loans",
  "Merchant Cash Advance",
  "Accounts Receivable Financing",
  "Startup Financing",
  "Franchise Financing",
];

export default function AboutPage() {
  const schema = localBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

        {/* ── 1. Institutional Hero ────────────────────────────────── */}
        <section style={{
          background: G.dark,
          padding: "5rem 2rem 4rem",
          borderBottom: `3px solid ${G.gold}`,
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, marginBottom: "1.25rem",
            }}>
              About Starting Gate Financial
            </p>
            <h1 style={{
              fontFamily: G.serif,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.2,
              marginBottom: "1.5rem", maxWidth: 720,
            }}>
              Commercial Financing Structured the Way Lenders Expect
            </h1>
            <p style={{
              fontSize: "1.1rem", color: "rgba(255,255,255,0.72)",
              lineHeight: 1.8, maxWidth: 620, marginBottom: "2rem",
            }}>
              Starting Gate Financial is a commercial loan brokerage based in
              Richardson, TX. We structure and place business financing for
              owner-operators, real estate investors, and growth-stage companies
              across the United States.
            </p>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Location", value: "Richardson, TX" },
                { label: "Coverage", value: "Nationwide" },
                { label: "Compensation", value: "No Upfront Fees" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{
                    fontSize: "0.65rem", letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.3rem",
                  }}>{label}</p>
                  <p style={{
                    fontFamily: G.serif, fontSize: "1rem",
                    fontWeight: 700, color: G.gold,
                  }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. Who We Serve ─────────────────────────────────────── */}
        <section style={{ padding: "4rem 2rem", background: G.cream, borderBottom: `1px solid ${G.border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, marginBottom: "0.75rem",
            }}>
              Who We Serve
            </p>
            <h2 style={{
              fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700, color: G.dark, marginBottom: "1rem",
            }}>
              Owner-Operators & Investors Across Every Industry
            </h2>
            <p style={{
              fontSize: "1rem", color: G.textMid, lineHeight: 1.8,
              maxWidth: 680, marginBottom: "2.5rem",
            }}>
              We work with established businesses and growth-stage operators who
              need financing structured correctly — not just submitted. Our clients
              span every industry that relies on commercial capital.
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
            }} className="sgf-about-industries">
              {whoWeServe.map(({ icon, label }) => (
                <div key={label} style={{
                  background: "#fff", border: `1px solid ${G.border}`,
                  borderLeft: `3px solid ${G.green}`,
                  padding: "1.25rem 1rem",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: G.textDark, lineHeight: 1.4 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: G.textMid }}>
              Not sure if we cover your industry?{" "}
              <Link href="/industries" style={{ color: G.green, fontWeight: 700, textDecoration: "none" }}>
                View all industries we serve →
              </Link>
            </p>
          </div>
        </section>

        {/* ── 3. How SGF Approaches Financing ─────────────────────── */}
        <section style={{ padding: "4rem 2rem", borderBottom: `1px solid ${G.border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, marginBottom: "0.75rem",
            }}>
              Our Approach
            </p>
            <h2 style={{
              fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700, color: G.dark, marginBottom: "1rem",
            }}>
              How Starting Gate Financial Structures Deals
            </h2>
            <p style={{
              fontSize: "1rem", color: G.textMid, lineHeight: 1.8,
              maxWidth: 680, marginBottom: "3rem",
            }}>
              Most declined applications fail at the file level — incomplete documentation,
              wrong program fit, or narratives that don&rsquo;t match the numbers. We fix
              that before submission. Our role is structuring, not just brokering.
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem",
            }} className="sgf-about-principles">
              {principles.map(({ n, title, body }) => (
                <div key={n} style={{
                  borderTop: `3px solid ${G.gold}`,
                  padding: "1.75rem",
                  background: G.cream,
                }}>
                  <p style={{
                    fontFamily: G.serif, fontSize: "0.7rem",
                    letterSpacing: "0.2em", color: G.gold,
                    fontWeight: 700, marginBottom: "0.75rem",
                  }}>{n}</p>
                  <h3 style={{
                    fontFamily: G.serif, fontSize: "1.1rem",
                    fontWeight: 700, color: G.dark, marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}>{title}</h3>
                  <p style={{
                    fontSize: "0.875rem", color: G.textMid,
                    lineHeight: 1.8, margin: 0,
                  }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Experience & Positioning ──────────────────────────── */}
        <section style={{ padding: "4rem 2rem", background: G.dark, borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem",
            alignItems: "start",
          }} className="sgf-about-exp-grid">
            <div>
              <p style={{
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: G.gold, fontWeight: 600, marginBottom: "0.75rem",
              }}>
                Experience & Positioning
              </p>
              <h2 style={{
                fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700, color: "#fff", marginBottom: "1.25rem", lineHeight: 1.2,
              }}>
                A Brokerage Built Around Lender Expectations
              </h2>
              <p style={{
                fontSize: "1rem", color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85, marginBottom: "1.25rem",
              }}>
                Starting Gate Financial was founded on a straightforward observation:
                most small business owners don&rsquo;t lose financing because their business
                isn&rsquo;t fundable — they lose it because their file isn&rsquo;t structured
                correctly. Lenders decline applications, not businesses.
              </p>
              <p style={{
                fontSize: "1rem", color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85, marginBottom: "1.25rem",
              }}>
                Our positioning is built around closing the gap between what a borrower
                brings to the table and what a lender&rsquo;s credit policy requires. That
                means working in SBA guidelines, understanding commercial real estate
                underwriting, and knowing which lenders are active in which deal types.
              </p>
              <p style={{
                fontSize: "1rem", color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85,
              }}>
                Based in the Dallas-Fort Worth market, we operate nationwide across
                all major commercial financing categories.
              </p>
            </div>
            <div>
              <p style={{
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: G.gold, fontWeight: 600, marginBottom: "1.25rem",
              }}>
                Programs We Place
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {programs.map((p) => (
                  <div key={p} style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}>
                    <span style={{ color: G.gold, fontSize: "0.75rem", flexShrink: 0 }}>◆</span>
                    <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}>{p}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: "1.25rem" }}>
                <Link href="/financing-options" style={{
                  fontSize: "0.875rem", fontWeight: 700,
                  color: G.gold, textDecoration: "none",
                }}>
                  Explore all financing programs →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Compliance & Responsibility ───────────────────────── */}
        <section style={{
          padding: "3rem 2rem",
          background: G.cream,
          borderTop: `1px solid ${G.border}`,
          borderBottom: `1px solid ${G.border}`,
        }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, marginBottom: "0.75rem",
            }}>
              Compliance & Responsibility
            </p>
            <h2 style={{
              fontFamily: G.serif, fontSize: "1.25rem",
              fontWeight: 700, color: G.dark, marginBottom: "1rem",
            }}>
              How We Operate
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Starting Gate Financial arranges commercial financing on behalf of business owners and investors. We do not make lending decisions, set interest rates, or guarantee approval outcomes.",
                "All financing is subject to lender underwriting, credit review, and final approval. Terms, rates, and program eligibility are determined by individual lenders.",
                "We do not charge upfront fees for deal review, consultation, or application preparation. Compensation is earned at closing and paid by the lender.",
                "We operate in compliance with applicable commercial lending regulations and do not engage in consumer mortgage lending.",
              ].map((text, i) => (
                <div key={i} style={{
                  display: "flex", gap: "1rem", alignItems: "flex-start",
                }}>
                  <span style={{
                    flexShrink: 0, width: 20, height: 20,
                    background: G.dark, color: G.gold,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.65rem", fontWeight: 700, marginTop: 2,
                  }}>
                    {i + 1}
                  </span>
                  <p style={{
                    fontSize: "0.875rem", color: G.textMid,
                    lineHeight: 1.8, margin: 0,
                  }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Soft CTA ─────────────────────────────────────────── */}
        <section style={{
          background: G.dark, padding: "4rem 2rem",
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center",
        }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: G.gold, fontWeight: 600, marginBottom: "1rem",
          }}>
            Work With Us
          </p>
          <h2 style={{
            fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 700, color: "#fff", marginBottom: "1rem", maxWidth: 560,
          }}>
            Start With a Conversation
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.6)", fontSize: "0.95rem",
            maxWidth: 480, marginBottom: "2rem", lineHeight: 1.8,
          }}>
            No cost. No obligation. A direct conversation about your deal,
            your structure, and whether SGF is the right fit.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{
              background: G.gold, color: G.dark,
              padding: "0.875rem 2.5rem", fontWeight: 700,
              fontSize: "0.9rem", textDecoration: "none",
              fontFamily: G.sans, letterSpacing: "0.05em",
              display: "inline-block",
            }}>
              Schedule a Consultation →
            </Link>
            <Link href="/financing-options" style={{
              background: "transparent", color: "#fff",
              padding: "0.875rem 2rem", fontWeight: 600,
              fontSize: "0.875rem", textDecoration: "none",
              fontFamily: G.sans, letterSpacing: "0.05em",
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "inline-block",
            }}>
              View Financing Programs
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
