"use client";

import { useState } from "react";
import Link from "next/link";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";

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

function formatComma(raw: string): string {
  const cleaned = raw.replace(/[^\d.]/g, "");
  const parts = cleaned.split(".");
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.length > 1 ? intPart + "." + parts[1] : intPart;
}

function fmt(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(n);
}

type Results = {
  dscr: number;
  annualNOI: number;
  annualIncome: number;
  annualExpenses: number;
  lendableCashFlow: number;
  annualDebtService: number;
};

function calcDSCR(
  annualIncome: number,
  annualExpenses: number,
  loanAmount: number,
  interestRate: number
): Results | null {
  if (!isFinite(annualIncome) || annualIncome <= 0) return null;
  if (!isFinite(annualExpenses) || annualExpenses < 0) return null;
  if (!isFinite(loanAmount) || loanAmount <= 0) return null;
  if (!isFinite(interestRate) || interestRate <= 0) return null;

  const annualNOI = annualIncome - annualExpenses;
  const lendableCashFlow = annualNOI;
  // 25-year amortization standard for DSCR loans
  const monthlyRate = interestRate / 100 / 12;
  const n = 25 * 12;
  const monthlyPayment =
    loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);
  const annualDebtService = monthlyPayment * 12;
  const dscr = annualDebtService > 0 ? annualNOI / annualDebtService : 0;

  return {
    dscr,
    annualNOI,
    annualIncome,
    annualExpenses,
    lendableCashFlow,
    annualDebtService,
  };
}

function HoverCard({
  children, style = {}, dark = false,
}: {
  children: React.ReactNode; style?: React.CSSProperties; dark?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: dark ? G.dark : "#fff",
        border: `1px solid ${hovered ? G.gold : G.border}`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 16px rgba(206,149,98,0.12)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow, title, subtitle, dark = false,
}: {
  eyebrow: string; title: React.ReactNode; subtitle?: string; dark?: boolean;
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

function CalcInput({
  label, value, onChange, placeholder, tooltip,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; tooltip?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showTip, setShowTip] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <label style={{
          fontSize: "0.875rem", fontWeight: 700, color: G.textDark,
          fontFamily: G.sans, margin: 0,
        }}>
          {label}
        </label>
        {tooltip && (
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span
              onMouseEnter={() => setShowTip(true)}
              onMouseLeave={() => setShowTip(false)}
              style={{ color: G.gold, cursor: "help", fontSize: "0.9rem", lineHeight: 1 }}
            >ℹ</span>
            {showTip && (
              <span style={{
                position: "absolute", bottom: "calc(100% + 6px)", left: "50%",
                transform: "translateX(-50%)", background: G.dark, color: "#fff",
                fontSize: "0.75rem", lineHeight: 1.5, padding: "0.6rem 0.875rem",
                width: 220, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                pointerEvents: "none", whiteSpace: "normal",
              }}>
                {tooltip}
              </span>
            )}
          </span>
        )}
      </div>
      <input
        type="text" value={value}
        onChange={(e) => onChange(formatComma(e.target.value))}
        placeholder={placeholder} autoComplete="off"
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%", padding: "0.75rem 1rem",
          border: `1px solid ${focused ? G.green : G.border}`,
          fontSize: "1rem", fontFamily: G.sans, color: G.textDark,
          outline: "none", boxSizing: "border-box", background: "#fff",
          transition: "border-color 0.15s",
        }}
      />
    </div>
  );
}

function CalcButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: G.green, color: "#fff", padding: "0.875rem 2.5rem",
        fontWeight: 700, fontSize: "1rem", fontFamily: G.sans,
        letterSpacing: "0.05em", border: "none", cursor: "pointer", width: "100%",
      }}
    >
      {label}
    </button>
  );
}

// DSCR risk band
function DSCRBand({ dscr }: { dscr: number }) {
  const bands = [
    {
      range: "≤ 1.15",
      label: "High Risk",
      note: "Likely loan decline",
      check: dscr <= 1.15,
      color: "#B91C1C",
      bg: "#FEF2F2",
      border: "#FECACA",
    },
    {
      range: "1.16 – 1.24",
      label: "Marginal",
      note: "May need restructuring",
      check: dscr > 1.15 && dscr < 1.25,
      color: "#B45309",
      bg: "#FFFBEB",
      border: "#FDE68A",
    },
    {
      range: "≥ 1.25",
      label: "Bankable",
      note: "Meets lender requirements",
      check: dscr >= 1.25,
      color: G.green,
      bg: "#F0FDF4",
      border: "#BBF7D0",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <p style={{
        fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
        color: G.textMid, margin: "0 0 0.5rem 0", maxWidth: "none", fontWeight: 600,
      }}>
        DSCR Risk Assessment
      </p>
      {bands.map((b) => (
        <div
          key={b.label}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.875rem 1rem",
            background: b.check ? b.bg : "#fff",
            border: `1px solid ${b.check ? b.border : G.border}`,
            transition: "all 0.2s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{
              width: 10, height: 10, borderRadius: "50%",
              background: b.check ? b.color : G.border,
              flexShrink: 0, display: "inline-block",
            }} />
            <div>
              <p style={{
                fontSize: "0.875rem", fontWeight: b.check ? 700 : 500,
                color: b.check ? b.color : G.textMid, margin: 0, maxWidth: "none",
              }}>
                {b.label}
              </p>
              <p style={{
                fontSize: "0.75rem", color: G.textMid,
                margin: 0, maxWidth: "none",
              }}>
                {b.note}
              </p>
            </div>
          </div>
          <span style={{
            fontSize: "0.8rem", fontWeight: 700,
            color: b.check ? b.color : G.textMid,
            fontFamily: G.serif,
          }}>
            {b.range}
          </span>
        </div>
      ))}
      <p style={{
        fontSize: "0.75rem", color: G.textMid, fontStyle: "italic",
        margin: "0.25rem 0 0", maxWidth: "none",
      }}>
        No threshold is a guarantee of approval. Lender standards vary.
      </p>
    </div>
  );
}

const faqs = [
  {
    q: "Can I use DSCR for both real estate and business loans?",
    a: "Yes — DSCR is used in both commercial real estate and business financing to assess repayment capacity. For real estate, lenders use property income versus debt service. For business loans, they use business cash flow versus total debt obligations.",
  },
  {
    q: "How do I improve my DSCR?",
    a: "You can improve your DSCR by increasing NOI (through higher revenue or lower expenses) or by lowering debt service via refinancing at a better rate, extending the loan term, or making a larger down payment to reduce the borrowed principal.",
  },
  {
    q: "What does a DSCR lender look at beyond the ratio itself?",
    a: "Most DSCR lenders also review property condition, market rent stability, borrower credit score, loan-to-value (LTV), and whether the income used is verified or projected. A strong DSCR on paper doesn't guarantee approval if other underwriting factors raise concerns.",
  },
  {
    q: "Is a DSCR loan the same as a conventional investment property loan?",
    a: "No. DSCR loans are specifically underwritten using property cash flow rather than the borrower's personal income or tax returns. This makes them popular with self-employed investors and those with multiple properties. Conventional loans typically require full income documentation and debt-to-income (DTI) analysis.",
  },
  {
    q: "Can I use projected or pro forma income in a DSCR calculation?",
    a: "Some lenders allow market rent projections for vacant or newly acquired properties, but most prefer documented rent rolls or lease agreements. Using inflated projections without documentation is one of the most common reasons DSCR loan files are declined at underwriting.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${G.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "1.25rem 0",
          background: "none", border: "none", cursor: "pointer",
          textAlign: "left", gap: "1rem",
        }}
      >
        <span style={{
          fontFamily: G.serif, fontSize: "1rem", fontWeight: 700,
          color: G.dark, lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          color: G.gold, fontSize: "1.25rem", flexShrink: 0,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
        }}>+</span>
      </button>
      {open && (
        <p style={{
          fontSize: "0.9rem", color: G.textMid, lineHeight: 1.8,
          padding: "0 0 1.25rem", margin: 0, maxWidth: "none",
        }}>
          {a}
        </p>
      )}
    </div>
  );
}

// Related program card
function ProgramCard({
  label, href, dark = false,
}: {
  label: string; href: string; dark?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => {}}
      style={{ textDecoration: "none" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: dark ? G.dark : G.cream,
          border: `1px solid ${hovered ? G.gold : G.border}`,
          padding: "1.5rem",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxShadow: hovered ? "0 4px 16px rgba(206,149,98,0.12)" : "none",
          textAlign: "center",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "0.5rem",
        }}
      >
        <p style={{
          fontFamily: G.serif, fontSize: "1rem", fontWeight: 700,
          color: dark ? "#fff" : G.dark, margin: 0, maxWidth: "none",
          lineHeight: 1.3,
        }}>
          {label}
        </p>
        <span style={{
          fontSize: "0.8rem", color: dark ? G.gold : G.green,
          fontWeight: 600,
        }}>
          View Program →
        </span>
      </div>
    </Link>
  );
}

export default function DSCRCalculatorPage() {
  const [annualIncome, setAnnualIncome] = useState("");
  const [annualExpenses, setAnnualExpenses] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    setError("");
    const income = parseFloat(annualIncome.replace(/,/g, ""));
    const expenses = parseFloat(annualExpenses.replace(/,/g, ""));
    const loan = parseFloat(loanAmount.replace(/,/g, ""));
    const rate = parseFloat(interestRate.replace(/,/g, ""));
    const calc = calcDSCR(income, expenses, loan, rate);
    if (!calc) {
      setError("Please enter valid values in all fields.");
      return;
    }
    setResults(calc);
  }

  const relatedPrograms = [
    { label: "DSCR Rental Loans", href: "/financing-options/dscr-rental-loans", dark: true },
    { label: "Fix & Flip Loans", href: "/financing-options/fix-and-flip", dark: false },
    { label: "Commercial Real Estate Financing", href: "/financing-options/commercial-real-estate", dark: false },
    { label: "SBA Financing", href: "/financing-options/sba-financing", dark: true },
  ];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tools & Calculators", path: "/tools" },
    { name: "DSCR Calculator", path: "/tools/dscr-calculator" },
  ]);
  const faqLd = faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        position: "relative", minHeight: 400,
        display: "flex", alignItems: "center", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 3, background: G.gold,
        }} />
        <div style={{
          position: "relative", zIndex: 2, width: "100%",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", padding: "5rem 2rem 4rem",
        }}>
          <div style={{ maxWidth: 680 }}>
            {/* Issue 1 fix: "Financial Tools" not "Tools Hub" */}
            <p style={{
              fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
              color: G.gold, fontWeight: 600, margin: "0 0 0.5rem 0", maxWidth: "none",
            }}>
              Financial Tools
            </p>
            {/* Breadcrumb BELOW eyebrow, above H1 */}
            <p style={{
              fontSize: "0.8rem", color: "rgba(255,255,255,0.45)",
              margin: "0 0 1.25rem", maxWidth: "none",
            }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>
                Tools
              </Link>
              {" → "}DSCR Calculator
            </p>
            <h1 style={{
              fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem",
            }}>
              DSCR Calculator
            </h1>
            <p style={{
              fontSize: "1.05rem", color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85, maxWidth: 580, margin: "0 auto",
            }}>
              Calculate your Debt Service Coverage Ratio to understand how
              property cash flow compares to loan obligations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator Section ────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="DSCR Calculator"
            title="Calculate Your Debt Service Coverage Ratio"
            subtitle="Enter your annual income, expenses, and loan details. Results are estimates only — not a financing commitment."
          />

          {/* 3-column layout: Cash Flow | Debt Assumptions | DSCR Result */}
          <div className="sgf-dscr-grid">

            {/* Column 1 — Business Cash Flow */}
            <HoverCard style={{ padding: "2rem" }}>
              <p style={{
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: G.gold, fontWeight: 600, margin: "0 0 1.5rem", maxWidth: "none",
              }}>
                Business Cash Flow
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <CalcInput
                  label="Annual Income ($)"
                  value={annualIncome}
                  onChange={setAnnualIncome}
                  placeholder="120,000"
                  tooltip="Gross annual income from the property or business. Use documented income — rent rolls, tax returns, or bank statements."
                />
                <CalcInput
                  label="Annual Expenses ($)"
                  value={annualExpenses}
                  onChange={setAnnualExpenses}
                  placeholder="36,000"
                  tooltip="Total annual operating costs excluding debt service. Includes taxes, insurance, maintenance, management fees, and utilities."
                />
                {/* Lendable Cash Flow — calculated display */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{
                    fontSize: "0.875rem", fontWeight: 700,
                    color: G.textDark, fontFamily: G.sans, margin: 0,
                  }}>
                    Lendable Cash Flow (NOI)
                  </label>
                  <div style={{
                    padding: "0.75rem 1rem",
                    border: `1px solid ${G.border}`,
                    background: G.cream,
                    fontSize: "1rem", fontFamily: G.serif,
                    fontWeight: 700, color: G.green,
                  }}>
                    {annualIncome && annualExpenses
                      ? fmt(
                          parseFloat(annualIncome.replace(/,/g, "") || "0") -
                          parseFloat(annualExpenses.replace(/,/g, "") || "0")
                        )
                      : "—"}
                  </div>
                  <p style={{
                    fontSize: "0.75rem", color: G.textMid,
                    margin: 0, maxWidth: "none", fontStyle: "italic",
                  }}>
                    Annual Income minus Annual Expenses
                  </p>
                </div>
              </div>
            </HoverCard>

            {/* Column 2 — Debt Assumptions */}
            <HoverCard style={{ padding: "2rem" }}>
              <p style={{
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: G.gold, fontWeight: 600, margin: "0 0 1.5rem", maxWidth: "none",
              }}>
                Debt Assumptions
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <CalcInput
                  label="Loan Amount ($)"
                  value={loanAmount}
                  onChange={setLoanAmount}
                  placeholder="800,000"
                  tooltip="The total loan amount you are seeking. This is used to calculate the annual debt service based on a 25-year amortization."
                />
                <CalcInput
                  label="Interest Rate (%)"
                  value={interestRate}
                  onChange={setInterestRate}
                  placeholder="7.50"
                  tooltip="The annual interest rate for the loan. Enter as a percentage — e.g. 7.5 for 7.5%. Based on 25-year amortization standard."
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{
                    fontSize: "0.875rem", fontWeight: 700,
                    color: G.textDark, fontFamily: G.sans, margin: 0,
                  }}>
                    Est. Annual Debt Service
                  </label>
                  <div style={{
                    padding: "0.75rem 1rem",
                    border: `1px solid ${G.border}`,
                    background: G.cream,
                    fontSize: "1rem", fontFamily: G.serif,
                    fontWeight: 700, color: G.dark,
                  }}>
                    {loanAmount && interestRate ? (() => {
                      const loan = parseFloat(loanAmount.replace(/,/g, ""));
                      const rate = parseFloat(interestRate.replace(/,/g, "")) / 100 / 12;
                      const n = 25 * 12;
                      if (!isFinite(loan) || !isFinite(rate) || rate <= 0) return "—";
                      const pmt = loan * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
                      return fmt(pmt * 12);
                    })() : "—"}
                  </div>
                  <p style={{
                    fontSize: "0.75rem", color: G.textMid,
                    margin: 0, maxWidth: "none", fontStyle: "italic",
                  }}>
                    Based on 25-year amortization
                  </p>
                </div>
                <CalcButton label="Calculate DSCR" onClick={handleCalculate} />
                {error && (
                  <p style={{
                    color: "#B91C1C", fontSize: "0.85rem",
                    margin: 0, maxWidth: "none",
                  }}>
                    {error}
                  </p>
                )}
              </div>
            </HoverCard>

            {/* Column 3 — DSCR Result */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {results ? (
                <>
                  {/* Big DSCR number */}
                  <HoverCard style={{ padding: "2rem", textAlign: "center" }}>
                    <p style={{
                      fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: G.gold, fontWeight: 600, margin: "0 0 0.75rem", maxWidth: "none",
                    }}>
                      Debt Service Coverage Ratio
                    </p>
                    <p style={{
                      fontFamily: G.serif, fontSize: "3.5rem", fontWeight: 700,
                      color: results.dscr >= 1.25 ? G.green : results.dscr >= 1.15 ? "#B45309" : "#B91C1C",
                      margin: "0 0 0.25rem", lineHeight: 1, maxWidth: "none",
                    }}>
                      {results.dscr.toFixed(2)}
                    </p>
                    <p style={{
                      fontSize: "0.85rem", color: G.textMid,
                      margin: 0, maxWidth: "none",
                    }}>
                      {results.dscr >= 1.25
                        ? "Bankable — Meets lender requirements"
                        : results.dscr >= 1.15
                        ? "Marginal — May need restructuring"
                        : "High Risk — Likely loan decline"}
                    </p>
                  </HoverCard>

                  {/* Supporting numbers */}
                  <HoverCard style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {[
                        { label: "Annual NOI", value: fmt(results.annualNOI) },
                        { label: "Annual Debt Service", value: fmt(results.annualDebtService) },
                        { label: "Lendable Cash Flow", value: fmt(results.lendableCashFlow) },
                      ].map(({ label, value }) => (
                        <div key={label} style={{
                          display: "flex", justifyContent: "space-between",
                          alignItems: "center", paddingBottom: "0.75rem",
                          borderBottom: `1px solid ${G.border}`,
                        }}>
                          <span style={{
                            fontSize: "0.85rem", color: G.textMid,
                          }}>
                            {label}
                          </span>
                          <span style={{
                            fontFamily: G.serif, fontWeight: 700,
                            color: G.dark, fontSize: "0.95rem",
                          }}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </HoverCard>

                  {/* Risk band */}
                  <HoverCard style={{ padding: "1.5rem" }}>
                    <DSCRBand dscr={results.dscr} />
                  </HoverCard>

                  <p style={{
                    fontSize: "0.8rem", color: G.textMid, fontStyle: "italic",
                    margin: 0, maxWidth: "none",
                  }}>
                    This calculation is for estimation purposes only. Actual underwriting criteria may vary by lender.
                  </p>
                </>
              ) : (
                <HoverCard style={{ padding: "2rem" }}>
                  <p style={{
                    fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: G.gold, fontWeight: 600, margin: "0 0 0.75rem", maxWidth: "none",
                    textAlign: "center",
                  }}>
                    DSCR Result
                  </p>
                  {/* Static risk band preview */}
                  <DSCRBand dscr={-1} />
                  <p style={{
                    color: G.textMid, fontSize: "0.875rem", fontStyle: "italic",
                    textAlign: "center", margin: "1.25rem 0 0", maxWidth: "none",
                  }}>
                    Enter your numbers and click &ldquo;Calculate DSCR&rdquo; to see your result.
                  </p>
                </HoverCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────── */}
      <section style={{ background: "#f8f6f1", padding: "1.5rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <p style={{ fontSize: "0.78rem", color: "#64748b", fontStyle: "italic", textAlign: "center", maxWidth: 780, margin: "0 auto", lineHeight: 1.7 }}>
          Results are estimates based on the inputs provided and standard assumptions. They do not represent a loan offer, approval, rate commitment, or lender decision. Actual terms are determined by lenders based on full underwriting review.
        </p>
      </section>

      {/* ── Related Programs ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Related Programs"
            title="Financing That Uses DSCR"
            subtitle="These programs are underwritten using debt service coverage ratio as a primary qualification metric."
          />
          {/* 4-card grid: green, cream, cream, green */}
          <div className="sgf-tools-grid">
            {relatedPrograms.map(({ label, href, dark }) => (
              <ProgramCard key={href} label={label} href={href} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="DSCR Calculator — Common Questions"
          />
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band — cream bg (Issue 5) ────────────────────────── */}
      <section style={{
        background: G.cream,
        borderTop: `1px solid ${G.border}`,
        padding: "4.5rem 2rem",
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
      }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, margin: "0 0 1rem", maxWidth: "none",
        }}>
          Ready to Review Your Numbers?
        </p>
        <h2 style={{
          fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700, color: G.dark, marginBottom: "1rem", maxWidth: 520,
        }}>
          Schedule a Consultation
        </h2>
        <p style={{
          color: G.textMid, fontSize: "0.95rem",
          maxWidth: 460, marginBottom: "2rem", lineHeight: 1.8,
        }}>
          Bring your estimates. We&rsquo;ll tell you how lenders will look at them.
        </p>
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center",
        }}>
          <Link href="/contact" style={{
            background: G.green, color: "#fff",
            padding: "0.875rem 2.5rem", fontWeight: 700,
            fontSize: "0.9rem", textDecoration: "none",
            fontFamily: G.sans, letterSpacing: "0.05em",
            display: "inline-block",
          }}>
            Schedule a Consultation →
          </Link>
          <Link href="/financing-options" style={{
            background: "transparent", color: G.dark,
            padding: "0.875rem 2rem", fontWeight: 600,
            fontSize: "0.875rem", textDecoration: "none",
            fontFamily: G.sans, letterSpacing: "0.05em",
            border: `1.5px solid ${G.border}`,
            display: "inline-block",
          }}>
            View Financing Programs
          </Link>
        </div>
      </section>

    </main>
  );
}
