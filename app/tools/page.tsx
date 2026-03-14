"use client";

import { useState } from "react";
import Link from "next/link";

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
        color: G.gold, fontWeight: 600, margin: "0 0 0.6rem 0", maxWidth: "none",
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

// ── Consistent icon set — all white stroke on G.green circle ──────
const icons = {
  businessLoan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
      <line x1="8" y1="18" x2="12" y2="18" />
    </svg>
  ),
  dscr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  mca: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  fica: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="22" height="22" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

const tools = [
  {
    href: "/tools/business-loan-calculator",
    icon: icons.businessLoan,
    tag: "Amortization Included",
    label: "Business Loan Calculator",
    description:
      "Estimate monthly payments and total interest for any term loan with a full amortization schedule.",
    ariaLabel: "Open Business Loan Calculator",
  },
  {
    href: "/tools/dscr-calculator",
    icon: icons.dscr,
    tag: "Real Estate & Investment",
    label: "DSCR Calculator",
    description:
      "Calculate your Debt Service Coverage Ratio to understand how property cash flow compares to loan obligations.",
    ariaLabel: "Open DSCR Calculator",
  },
  {
    href: "/tools/mca-calculator",
    icon: icons.mca,
    tag: "Fast Capital",
    label: "MCA Planning Tool",
    description:
      "Estimate total repayment for a Merchant Cash Advance using advance amount and factor rate.",
    ariaLabel: "Open MCA Planning Tool",
  },
  {
    href: "/tools/fica-tip-calculator",
    icon: icons.fica,
    tag: "Tax Credit",
    label: "FICA Tip Credit Calculator",
    description:
      "Estimate your FICA tip tax credit for restaurant and food service businesses based on reported tip income.",
    ariaLabel: "Open FICA Tip Credit Calculator",
  },
];

function ToolCard({
  href, icon, tag, label, description, ariaLabel,
}: (typeof tools)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column",
        background: "#fff",
        border: `1px solid ${hovered ? G.gold : G.border}`,
        boxShadow: hovered ? "0 4px 20px rgba(206,149,98,0.15)" : "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
        padding: "2rem",
        textDecoration: "none", color: "inherit",
        cursor: "pointer",
      }}
    >
      {/* Icon — consistent G.green circle, white SVG */}
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: G.green,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1rem", flexShrink: 0,
      }}>
        {icon}
      </div>

      {/* Tag pill */}
      <span style={{
        display: "inline-block",
        background: G.cream, color: G.gold,
        fontSize: "0.65rem", letterSpacing: "0.08em",
        textTransform: "uppercase",
        border: `1px solid ${G.border}`,
        padding: "0.2rem 0.65rem",
        marginBottom: "0.75rem",
        fontWeight: 600, alignSelf: "flex-start",
        fontFamily: G.sans,
      }}>
        {tag}
      </span>

      {/* Label */}
      <h3 style={{
        fontFamily: G.serif, fontSize: "1.1rem",
        fontWeight: 700, color: G.dark,
        margin: "0 0 0.5rem", lineHeight: 1.3,
      }}>
        {label}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "0.875rem", color: G.textMid,
        lineHeight: 1.7, flex: 1,
        margin: "0 0 1.25rem", maxWidth: "none",
      }}>
        {description}
      </p>

      {/* CTA */}
      <p style={{
        fontSize: "0.875rem", fontWeight: 700,
        color: G.green, margin: 0, maxWidth: "none",
      }}>
        Use Calculator →
      </p>
    </Link>
  );
}

export default function ToolsHubPage() {
  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* ── SEO: page-level structured data ─────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Financial Tools & Calculators — Starting Gate Financial",
            "description":
              "Free business loan, DSCR, MCA, and FICA tip credit calculators built around real underwriting standards.",
            "url": "https://startinggatefinancial.com/tools",
            "publisher": {
              "@type": "Organization",
              "name": "Starting Gate Financial",
              "url": "https://startinggatefinancial.com",
            },
            "hasPart": tools.map((t) => ({
              "@type": "WebPage",
              "name": t.label,
              "url": `https://startinggatefinancial.com${t.href}`,
            })),
          }),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative", minHeight: 420,
          display: "flex", alignItems: "center", overflow: "hidden",
        }}
        aria-label="Tools Hub Hero"
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 3, background: G.gold,
        }} />
        <div style={{
          position: "relative", zIndex: 2, width: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center",
          padding: "5rem 2rem 4rem",
        }}>
          <div style={{ maxWidth: 680 }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, margin: "0 0 1.25rem", maxWidth: "none",
            }}>
              Financial Tools &amp; Calculators
            </p>
            <h1 style={{
              fontFamily: G.serif,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}>
              Estimate. Understand. Decide.
            </h1>
            <p style={{
              fontSize: "1.05rem", color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85, maxWidth: 580, margin: "0 auto",
            }}>
              Free financial calculators built around real underwriting
              standards — not marketing copy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator Cards Grid ─────────────────────────────────── */}
      <section
        style={{ padding: "4rem 2rem" }}
        aria-label="Our Financial Calculators"
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Our Tools"
            title="Four Calculators. One Purpose."
            subtitle="Run the numbers before the conversation. Each tool is built around how lenders actually evaluate deals."
          />
          {/* Issue 1 fix: 4 tools matching nav — Business Loan, DSCR, MCA, FICA */}
          {/* Issue 2 fix: all icons consistent — white SVG on G.green circle */}
          {/* Issue 3 fix: gold border on hover via ToolCard state */}
          {/* Issue 4 fix: sgf-tools-grid stacks to 1-col on mobile via globals.css */}
          <div className="sgf-tools-grid">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer Band ───────────────────────────────────────── */}
      <section
        style={{
          background: G.cream,
          borderTop: `1px solid ${G.border}`,
          borderBottom: `1px solid ${G.border}`,
          padding: "2.5rem 2rem",
        }}
        aria-label="Calculator Disclaimer"
      >
        <p style={{
          fontSize: "0.875rem", color: G.textMid, lineHeight: 1.8,
          maxWidth: 640, margin: "0 auto", textAlign: "center",
        }}>
          All calculators provide estimates only. Results are not loan
          approvals, rate quotes, or financing commitments. Final terms
          are determined by lenders.
        </p>
      </section>

      {/* ── CTA Band ─────────────────────────────────────────────── */}
      <section
        style={{
          background: G.dark, padding: "4.5rem 2rem",
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center",
        }}
        aria-label="Schedule a Consultation"
      >
        <p style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, margin: "0 0 1rem", maxWidth: "none",
        }}>
          Ready to Review Your Numbers?
        </p>
        <h2 style={{
          fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700, color: "#fff", marginBottom: "1rem", maxWidth: 520,
        }}>
          Schedule a Consultation
        </h2>
        <p style={{
          fontSize: "0.95rem", color: "rgba(255,255,255,0.65)",
          lineHeight: 1.8, maxWidth: 460, marginBottom: "2rem",
        }}>
          Bring your estimates. We&rsquo;ll tell you how lenders will
          look at them.
        </p>
        <div style={{
          display: "flex", gap: "1rem",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          <Link
            href="/contact"
            style={{
              background: G.gold, color: G.dark,
              padding: "0.875rem 2.5rem", fontWeight: 700,
              fontSize: "0.9rem", textDecoration: "none",
              fontFamily: G.sans, letterSpacing: "0.05em",
              display: "inline-block",
            }}
          >
            Schedule a Consultation →
          </Link>
          <Link
            href="/financing-options"
            style={{
              background: "transparent", color: "#fff",
              padding: "0.875rem 2rem", fontWeight: 600,
              fontSize: "0.875rem", textDecoration: "none",
              fontFamily: G.sans, letterSpacing: "0.05em",
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "inline-block",
            }}
          >
            View Financing Programs
          </Link>
        </div>
      </section>

    </main>
  );
}
