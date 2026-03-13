"use client";

import Link from "next/link";
import { useState } from "react";

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

function HoverCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? G.gold : "#e2e8f0"}`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? `0 4px 16px rgba(206,149,98,0.12)` : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const industryIcons: Record<string, React.ReactNode> = {
  construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-6h6v6" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  oil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M12 2v6M8 6l4-4 4 4M3 10h18M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10" />
    </svg>
  ),
  realestate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10" />
    </svg>
  ),
  professional: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  ),
  trucking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
  ),
};

const whoWeServe = [
  { key: "construction", label: "Construction & Contractors" },
  { key: "food", label: "Restaurants & Food Service" },
  { key: "healthcare", label: "Healthcare & Medical Practices" },
  { key: "oil", label: "Oil & Gas Operators" },
  { key: "realestate", label: "Real Estate Investors" },
  { key: "professional", label: "Professional Services" },
  { key: "trucking", label: "Trucking & Logistics" },
  { key: "retail", label: "Retail & Franchise Operators" },
];

const principles = [
  {
    n: "01",
    title: "Lender-Aligned Structuring",
    body: "We organize your financial package the way underwriters actually review it — not the way it looks on your desk. Complete documentation, clean narratives, no surprises at credit review.",
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

const compliance = [
  "Starting Gate Financial arranges commercial financing on behalf of business owners and investors. We do not make lending decisions, set interest rates, or guarantee approval outcomes.",
  "All financing is subject to lender underwriting, credit review, and final approval. Terms, rates, and program eligibility are determined by individual lenders.",
  "We do not charge upfront fees for deal review, consultation, or application preparation. Compensation is earned at closing and paid by the lender.",
  "We operate in compliance with applicable commercial lending regulations and do not engage in consumer mortgage lending.",
];

// ── Reusable centered section header (defeats global p { max-width: 62ch }) ──
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      textAlign: "center", marginBottom: "2.5rem",
    }}>
      <p style={{
        fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
        color: G.gold, fontWeight: 600, marginBottom: "0.6rem",
        maxWidth: "none", width: "auto",
      }}>
        {eyebrow}
      </p>
      <h2 style={{
        fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)",
        fontWeight: 700, color: dark ? "#fff" : G.dark,
        marginBottom: "0.75rem", lineHeight: 1.25,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: "1rem", color: dark ? "rgba(255,255,255,0.65)" : G.textMid,
          lineHeight: 1.8, maxWidth: 600, margin: "0 auto",
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        minHeight: 480,
        display: "flex", alignItems: "center",
        overflow: "hidden",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }} />
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)",
        }} />
        {/* Gold bottom accent */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 3, background: G.gold,
        }} />

        {/* ✅ FIX: flex column + alignItems center to center all hero content */}
        <div style={{
          position: "relative", zIndex: 2,
          width: "100%",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
          padding: "5rem 2rem 4rem",
        }}>
          <div style={{ maxWidth: 680 }}>
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
              marginBottom: "1.5rem",
            }}>
              Commercial Financing Structured the Way Lenders Expect
            </h1>
            <p style={{
              fontSize: "1.05rem", color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85, marginBottom: "2.5rem",
              maxWidth: 580, margin: "0 auto 2.5rem",
            }}>
              Starting Gate Financial is a commercial financing firm based in
              Richardson, TX. We structure and place business financing for
              owner-operators, real estate investors, and growth-stage companies
              across the United States.
            </p>
            {/* ✅ FIX: justifyContent center on stat row */}
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { label: "Location", value: "Richardson, TX" },
                { label: "Coverage", value: "Nationwide" },
                { label: "Compensation", value: "No Upfront Fees" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{
                    fontSize: "0.65rem", letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)", marginBottom: "0.3rem",
                  }}>{label}</p>
                  <p style={{
                    fontFamily: G.serif, fontSize: "1rem",
                    fontWeight: 700, color: G.gold,
                  }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Serve ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: G.cream, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* ✅ FIX: SectionHeader component handles centering */}
          <SectionHeader
            eyebrow="Who We Serve"
            title="Owner-Operators & Investors Across Every Industry"
            subtitle="We work with established businesses and growth-stage operators who need financing structured correctly — not just submitted."
          />

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
          }} className="sgf-about-industries">
            {whoWeServe.map(({ key, label }) => (
              <HoverCard key={key} style={{ padding: "1.5rem 1.25rem" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: G.green,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  {industryIcons[key]}
                </div>
                <p style={{
                  fontSize: "0.875rem", fontWeight: 700,
                  color: G.textDark, lineHeight: 1.4, margin: 0,
                }}>
                  {label}
                </p>
              </HoverCard>
            ))}
          </div>

          <p style={{ marginTop: "1.75rem", textAlign: "center", fontSize: "0.875rem", color: G.textMid }}>
            Not sure if we cover your industry?{" "}
            <Link href="/industries" style={{ color: G.green, fontWeight: 700, textDecoration: "none" }}>
              View all industries we serve →
            </Link>
          </p>
        </div>
      </section>

      {/* ── 3. Our Approach ──────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* ✅ FIX: SectionHeader component handles centering */}
          <SectionHeader
            eyebrow="Our Approach"
            title="How Starting Gate Financial Structures Deals"
            subtitle="Most declined applications fail at the file level — incomplete documentation, wrong program fit, or narratives that don't match the numbers. We fix that before submission."
          />

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem",
          }} className="sgf-about-principles">
            {principles.map(({ n, title, body }) => (
              <HoverCard key={n} style={{ padding: "2rem" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 36, height: 36,
                  background: G.cream,
                  border: `1px solid ${G.border}`,
                  marginBottom: "1rem",
                }}>
                  <span style={{
                    fontFamily: G.serif, fontSize: "0.75rem",
                    fontWeight: 700, color: G.green, letterSpacing: "0.05em",
                  }}>{n}</span>
                </div>
                <h3 style={{
                  fontFamily: G.serif, fontSize: "1.1rem",
                  fontWeight: 700, color: G.dark,
                  marginBottom: "0.75rem", lineHeight: 1.3,
                }}>{title}</h3>
                <p style={{
                  fontSize: "0.875rem", color: G.textMid,
                  lineHeight: 1.8, margin: 0,
                }}>{body}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Experience & Positioning ──────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: G.dark }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem",
          alignItems: "start",
        }} className="sgf-about-exp-grid">
          <div>
            <p style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, marginBottom: "0.75rem",
            }}>Experience &amp; Positioning</p>
            <h2 style={{
              fontFamily: G.serif, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              fontWeight: 700, color: "#fff",
              marginBottom: "1.25rem", lineHeight: 1.2,
            }}>
              Built Around What Lenders Actually Require
            </h2>
            <p style={{
              fontSize: "0.95rem", color: "rgba(255,255,255,0.7)",
              lineHeight: 1.85, marginBottom: "1.25rem",
            }}>
              Starting Gate Financial was founded on a straightforward
              observation: most small business owners don&rsquo;t lose financing
              because their business isn&rsquo;t fundable — they lose it because
              their file isn&rsquo;t structured correctly. Lenders decline
              applications, not businesses.
            </p>
            <p style={{
              fontSize: "0.95rem", color: "rgba(255,255,255,0.7)",
              lineHeight: 1.85, marginBottom: "1.25rem",
            }}>
              Our positioning is built around closing the gap between what a
              borrower brings to the table and what a lender&rsquo;s credit
              policy requires — working in SBA guidelines, understanding
              commercial real estate underwriting, and knowing which lenders
              are active in which deal types.
            </p>
            <p style={{
              fontSize: "0.95rem", color: "rgba(255,255,255,0.7)",
              lineHeight: 1.85,
            }}>
              Based in the Dallas-Fort Worth market, we operate nationwide
              across all major commercial financing categories.
            </p>
          </div>

          <div>
            <p style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, marginBottom: "1.25rem",
            }}>Programs We Place</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {programs.map((p) => (
                <div key={p} style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "background 0.2s",
                }}>
                  <span style={{ color: G.gold, fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
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
        padding: "3.5rem 2rem",
        background: G.cream,
        borderTop: `1px solid ${G.border}`,
        borderBottom: `1px solid ${G.border}`,
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Compliance & Responsibility"
            title="How We Operate"
          />
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
          }} className="sgf-about-compliance">
            {compliance.map((text, i) => (
              <HoverCard key={i} style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    flexShrink: 0, width: 28, height: 28,
                    background: G.cream,
                    border: `1px solid ${G.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.7rem", fontWeight: 700, color: G.green,
                    fontFamily: G.serif,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p style={{
                    fontSize: "0.85rem", color: G.textMid,
                    lineHeight: 1.8, margin: 0,
                  }}>{text}</p>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Soft CTA ─────────────────────────────────────────── */}
      <section style={{
        background: G.dark, padding: "4.5rem 2rem",
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
      }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, marginBottom: "1rem",
        }}>Work With Us</p>
        <h2 style={{
          fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700, color: "#fff",
          marginBottom: "1rem", maxWidth: 520,
        }}>
          Start With a Conversation
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.6)", fontSize: "0.95rem",
          maxWidth: 460, marginBottom: "2rem", lineHeight: 1.8,
        }}>
          No cost. No obligation. A direct conversation about your deal,
          your structure, and whether we&rsquo;re the right fit.
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
  );
}