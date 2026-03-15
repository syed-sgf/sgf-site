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

function formatComma(raw: string): string {
  const cleaned = raw.replace(/[^\d.]/g, "");
  const parts = cleaned.split(".");
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.length > 1 ? intPart + "." + parts[1] : intPart;
}

function fmt(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function fmtWhole(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

type Results = {
  totalPayback: number;
  costOfCapital: number;
  factorRateApplied: number;
  dailyPayment: number;
  weeklyPayment: number;
  repaymentDays: number;
  effectiveAPR: number;
};

function calcMCA(
  advanceAmount: number,
  factorRate: number,
  holdbackPct: number,
  monthlyCardSales: number,
  paymentBasis: string
): Results | null {
  if (!isFinite(advanceAmount) || advanceAmount <= 0) return null;
  if (!isFinite(factorRate) || factorRate < 1) return null;
  if (!isFinite(holdbackPct) || holdbackPct <= 0 || holdbackPct >= 100) return null;
  if (!isFinite(monthlyCardSales) || monthlyCardSales <= 0) return null;

  const totalPayback = advanceAmount * factorRate;
  const costOfCapital = totalPayback - advanceAmount;

  // Daily card sales based on 21 business days/month
  const dailyCardSales = monthlyCardSales / 21;
  const weeklyCardSales = monthlyCardSales / 4.33;

  const dailyPayment = dailyCardSales * (holdbackPct / 100);
  const weeklyPayment = weeklyCardSales * (holdbackPct / 100);

  // Repayment period in days
  const repaymentDays = Math.ceil(totalPayback / dailyPayment);

  // Effective APR — annualized cost of capital
  const yearsToRepay = repaymentDays / 365;
  const effectiveAPR = yearsToRepay > 0 ? (costOfCapital / advanceAmount / yearsToRepay) * 100 : 0;

  return {
    totalPayback,
    costOfCapital,
    factorRateApplied: factorRate,
    dailyPayment,
    weeklyPayment,
    repaymentDays,
    effectiveAPR,
  };
}

// ── Sub-components ─────────────────────────────────────────────────────

function HoverCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "#C9A84C" : G.border}`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 16px rgba(201,168,76,0.15)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.6rem 0", maxWidth: "none" }}>
        {eyebrow}
      </p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: G.dark, marginBottom: "0.75rem", lineHeight: 1.25 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: "1rem", color: G.textMid, lineHeight: 1.8, maxWidth: 640, margin: "0 auto" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function CalcInput({ label, value, onChange, placeholder, tooltip }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; tooltip?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showTip, setShowTip] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <label style={{ fontSize: "0.875rem", fontWeight: 700, color: G.textDark, fontFamily: G.sans, margin: 0 }}>{label}</label>
        {tooltip && (
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}
              style={{ color: G.gold, cursor: "help", fontSize: "0.9rem", lineHeight: 1 }}>ℹ</span>
            {showTip && (
              <span style={{
                position: "absolute", bottom: "calc(100% + 6px)", left: "50%",
                transform: "translateX(-50%)", background: G.dark, color: "#fff",
                fontSize: "0.75rem", lineHeight: 1.5, padding: "0.6rem 0.875rem",
                width: 220, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                pointerEvents: "none", whiteSpace: "normal",
              }}>{tooltip}</span>
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

function CalcSelect({ label, value, onChange, options, tooltip }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; tooltip?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showTip, setShowTip] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <label style={{ fontSize: "0.875rem", fontWeight: 700, color: G.textDark, fontFamily: G.sans, margin: 0 }}>{label}</label>
        {tooltip && (
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}
              style={{ color: G.gold, cursor: "help", fontSize: "0.9rem", lineHeight: 1 }}>ℹ</span>
            {showTip && (
              <span style={{
                position: "absolute", bottom: "calc(100% + 6px)", left: "50%",
                transform: "translateX(-50%)", background: G.dark, color: "#fff",
                fontSize: "0.75rem", lineHeight: 1.5, padding: "0.6rem 0.875rem",
                width: 220, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                pointerEvents: "none", whiteSpace: "normal",
              }}>{tooltip}</span>
            )}
          </span>
        )}
      </div>
      <select
        value={value} onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%", padding: "0.75rem 1rem",
          border: `1px solid ${focused ? G.green : G.border}`,
          fontSize: "1rem", fontFamily: G.sans, color: G.textDark,
          outline: "none", boxSizing: "border-box", background: "#fff",
          transition: "border-color 0.15s", appearance: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23475569' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center",
        }}
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function ResultRow({ label, value, highlight = false, sub }: { label: string; value: string; highlight?: boolean; sub?: string }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      padding: "0.875rem 0", borderBottom: `1px solid ${G.border}`,
    }}>
      <div>
        <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600, color: highlight ? G.dark : G.textMid, fontFamily: G.sans }}>{label}</p>
        {sub && <p style={{ margin: "0.2rem 0 0", fontSize: "0.75rem", color: G.textMid, fontStyle: "italic" }}>{sub}</p>}
      </div>
      <p style={{
        margin: 0, fontFamily: G.serif, fontSize: highlight ? "1.4rem" : "1.1rem",
        fontWeight: 700, color: highlight ? G.green : G.dark, textAlign: "right",
      }}>{value}</p>
    </div>
  );
}

// ProgramCard — DSCR alternating dark/cream style
function ProgramCard({ label, href, dark = false }: { label: string; href: string; dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
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
        <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: dark ? "#fff" : G.dark, margin: 0, lineHeight: 1.3 }}>{label}</p>
        <span style={{ fontSize: "0.8rem", color: dark ? G.gold : G.green, fontWeight: 600 }}>Learn More →</span>
      </div>
    </Link>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is a Merchant Cash Advance (MCA)?",
    a: "A Merchant Cash Advance is a type of business funding where a company receives a lump sum in exchange for a percentage of future sales. It is not a loan — repayment is made through daily or weekly deductions from your revenue (called the holdback or retrieval rate). MCAs are fast but typically more expensive than traditional financing.",
  },
  {
    q: "What is a factor rate?",
    a: "A factor rate is a decimal multiplier used to calculate your total repayment amount. For example, a $50,000 advance at a 1.35 factor rate means you repay $67,500 total — regardless of how quickly you pay it back. Factor rates are not the same as interest rates and do not compound over time.",
  },
  {
    q: "How does the holdback percentage work?",
    a: "The holdback (also called the retrieval rate) is the percentage of your daily or weekly credit and debit card sales that goes toward MCA repayment. If your holdback is 15% and you process $5,000 in card sales on a given day, $750 is automatically remitted to the MCA provider. On slower days you pay less; on busier days you pay more.",
  },
  {
    q: "What is Effective APR and why does Texas require it?",
    a: "Effective APR expresses the true annualized cost of your MCA as a percentage. Texas Senate Bill 2677 requires commercial finance providers — including MCA funders — to disclose the APR to borrowers so they can compare costs across different financing products. The APR shown here is an estimate based on your projected repayment period.",
  },
  {
    q: "How accurate is this calculator?",
    a: "The calculator provides estimates based on the inputs you enter. Actual daily payments will vary because they are tied to real-time card sales volume. The repayment period and APR are approximations — your actual experience may be faster or slower depending on your revenue.",
  },
  {
    q: "Can I apply for an MCA through Starting Gate Financial?",
    a: "Yes! We partner with top MCA providers and can help you compare offers to find the best fit for your business. We recommend exploring all financing options — including business lines of credit and SBA loans — before committing to an MCA.",
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
        <span style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: G.gold, fontSize: "1.25rem", flexShrink: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.8, padding: "0 0 1.25rem", margin: 0, maxWidth: "none" }}>{a}</p>
      )}
    </div>
  );
}

function CTABand() {
  return (
    <section style={{ background: G.dark, padding: "4.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 1rem 0", maxWidth: "none" }}>
        Ready to Review Your Numbers?
      </p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
        Schedule a Consultation
      </h2>
      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 460, marginBottom: "2rem" }}>
        Bring your estimates. We&rsquo;ll tell you how lenders will look at them.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }} className="sgf-cta-band-btns">
        <Link href="/contact" style={{ background: G.gold, color: G.dark, padding: "0.875rem 2.5rem", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em", display: "inline-block" }}>
          Schedule a Consultation →
        </Link>
        <Link href="/apply" style={{ background: "transparent", color: "#fff", padding: "0.875rem 2rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em", border: "1.5px solid rgba(255,255,255,0.3)", display: "inline-block" }}>
          Apply Now →
        </Link>
      </div>
    </section>
  );
}

// ══ MAIN PAGE ══════════════════════════════════════════════════════════
export default function MCACalculatorPage() {
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [factorRate, setFactorRate] = useState("");
  const [holdback, setHoldback] = useState("");
  const [monthlyCardSales, setMonthlyCardSales] = useState("");
  const [paymentBasis, setPaymentBasis] = useState("daily");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    setError("");
    const amount = parseFloat(advanceAmount.replace(/,/g, ""));
    const rate = parseFloat(factorRate.replace(/,/g, ""));
    const hb = parseFloat(holdback.replace(/,/g, ""));
    const sales = parseFloat(monthlyCardSales.replace(/,/g, ""));

    if (!amount || !rate || !hb || !sales) {
      setError("Please fill in all required fields.");
      return;
    }

    const calc = calcMCA(amount, rate, hb, sales, paymentBasis);
    if (!calc) {
      setError("Please check your inputs. Factor rate must be ≥ 1.0 and holdback must be between 1–99%.");
      return;
    }
    setResults(calc);
  }

  const relatedPrograms = [
    { label: "Merchant Cash Advance", href: "/financing-options/merchant-cash-advance", dark: true },
    { label: "Business Lines of Credit", href: "/financing-options/business-loc", dark: false },
    { label: "Working Capital", href: "/financing-options/working-capital", dark: false },
    { label: "SBA 7(a) & 504 Loans", href: "/financing-options/sba-loans", dark: true },
  ];

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: G.gold }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "5rem 2rem 4rem" }}>
          <div style={{ maxWidth: 700 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.75rem 0", maxWidth: "none" }}>
              Financial Tools
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: "0 0 1.25rem 0", maxWidth: "none" }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Tools</Link>
              {" → "}MCA Calculator
            </p>
            <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              MCA Calculator
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 580, margin: "0 auto 1rem" }}>
              Free Merchant Cash Advance Calculator — estimate your total payback, daily payment, repayment period, and effective APR before you commit.
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", margin: "0 auto", maxWidth: 520 }}>
              MCA financing is fast but expensive. <strong style={{ color: G.gold, fontWeight: 600 }}>Understand the true cost upfront.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── What Is an MCA — SEO Content Block ───────────────────── */}
      <section style={{ background: G.cream, padding: "3rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="sgf-calc-layout">
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "0.75rem" }}>What Is a Merchant Cash Advance?</p>
            <p style={{ fontSize: "0.95rem", color: G.textMid, lineHeight: 1.8, margin: "0 0 1rem 0" }}>
              A Merchant Cash Advance is business funding where you receive a lump sum in exchange for a percentage of your future sales. It is not a loan — repayment is made through daily or weekly deductions from your revenue.
            </p>
            <p style={{ fontSize: "0.95rem", color: G.textMid, lineHeight: 1.8, margin: 0 }}>
              MCAs are fast to fund and require minimal documentation, but they carry a high effective cost. Use this calculator to see the full picture before signing.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "0.75rem" }}>How This Calculator Works</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { term: "Advance Amount", def: "The funding amount your business receives." },
                { term: "Factor Rate", def: "A multiplier that determines your total repayment." },
                { term: "Holdback %", def: "Daily % of card revenue applied toward repayment." },
                { term: "Repayment Period", def: "Estimated days to complete repayment." },
                { term: "Example", def: "$30,000 at 1.35 factor = $40,500 total. At $337/day repaid over ~120 days." },
              ].map(({ term, def }) => (
                <div key={term} style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ fontWeight: 700, color: G.dark, fontSize: "0.875rem", minWidth: 130, flexShrink: 0 }}>{term}:</span>
                  <span style={{ fontSize: "0.875rem", color: G.textMid, lineHeight: 1.6 }}>{def}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="MCA Buy Rate Calculator"
            title="Estimate Your MCA Cost"
            subtitle="Fill in all fields to calculate your total payback, daily payment, and effective APR."
          />

          <div className="sgf-calc-layout">

            {/* LEFT — Inputs */}
            <HoverCard style={{ padding: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                <CalcInput
                  label="Merchant Cash Advance Amount ($) *"
                  value={advanceAmount}
                  onChange={setAdvanceAmount}
                  placeholder="50,000"
                  tooltip="The total funding amount your business will receive."
                />

                <CalcInput
                  label="Factor Rate *"
                  value={factorRate}
                  onChange={setFactorRate}
                  placeholder="1.35"
                  tooltip="A decimal multiplier between 1.10 and 1.50. A 1.35 factor rate on $50,000 means you repay $67,500 total."
                />

                <CalcInput
                  label="Holdback / Retrieval Rate (%) *"
                  value={holdback}
                  onChange={setHoldback}
                  placeholder="15"
                  tooltip="The percentage of your daily card sales remitted to the MCA provider. Typically 10–20%."
                />

                <CalcInput
                  label="Estimated Monthly Credit/Debit Card Sales ($) *"
                  value={monthlyCardSales}
                  onChange={setMonthlyCardSales}
                  placeholder="80,000"
                  tooltip="Your average monthly card sales volume. Used to estimate your daily payment and repayment period."
                />

                <CalcSelect
                  label="Payment Is Based On *"
                  value={paymentBasis}
                  onChange={setPaymentBasis}
                  tooltip="How often your holdback is collected — daily is most common."
                  options={[
                    { value: "daily", label: "Daily Card Sales" },
                    { value: "weekly", label: "Weekly Card Sales" },
                  ]}
                />

                {error && (
                  <p style={{ fontSize: "0.85rem", color: "#dc2626", margin: 0, fontFamily: G.sans }}>
                    {error}
                  </p>
                )}

                <button
                  onClick={handleCalculate}
                  style={{
                    background: G.green, color: "#fff", padding: "0.875rem 2.5rem",
                    fontWeight: 700, fontSize: "1rem", fontFamily: G.sans,
                    letterSpacing: "0.05em", border: "none", cursor: "pointer", width: "100%",
                  }}
                >
                  Calculate MCA Cost
                </button>
              </div>
            </HoverCard>

            {/* RIGHT — Results */}
            <div>
              {results ? (
                <HoverCard style={{ padding: "2rem" }}>
                  <h3 style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: 700, color: G.dark, marginBottom: "1.5rem" }}>
                    Your MCA Estimate
                  </h3>

                  <ResultRow
                    label="Total Payback Amount"
                    value={fmtWhole(results.totalPayback)}
                    highlight
                    sub="Advance amount × factor rate"
                  />
                  <ResultRow
                    label="Cost of Capital"
                    value={fmtWhole(results.costOfCapital)}
                    sub="Total payback minus advance amount"
                  />
                  <ResultRow
                    label="Factor Rate Applied"
                    value={results.factorRateApplied.toFixed(2) + "×"}
                    sub="Your stated factor rate"
                  />
                  <ResultRow
                    label="Approximate Daily Payment"
                    value={fmt(results.dailyPayment)}
                    sub="Based on holdback % of daily card sales"
                  />
                  <ResultRow
                    label="Approximate Weekly Payment"
                    value={fmt(results.weeklyPayment)}
                    sub="Daily payment × 5 business days"
                  />
                  <ResultRow
                    label="Estimated Repayment Period"
                    value={`~${results.repaymentDays} days`}
                    sub="Based on your average card volume"
                  />

                  {/* Texas APR Disclosure */}
                  <div style={{ background: "#fefce8", border: "1px solid #fbbf24", borderRadius: 4, padding: "1rem 1.25rem", margin: "1.25rem 0" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#92400e", margin: "0 0 0.4rem 0" }}>
                      ⚖️ Texas Disclosure — Effective APR
                    </p>
                    <p style={{ fontFamily: G.serif, fontSize: "1.75rem", fontWeight: 700, color: "#92400e", margin: "0 0 0.4rem 0" }}>
                      {results.effectiveAPR.toFixed(1)}%
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "#78350f", lineHeight: 1.6, margin: 0 }}>
                      Texas law requires disclosure of the Effective APR on commercial financing. This is an estimate based on your projected repayment period. Actual APR may vary based on real-time card sales volume.
                    </p>
                  </div>

                  <p style={{ fontSize: "0.78rem", color: G.textMid, fontStyle: "italic", margin: "1rem 0 0", lineHeight: 1.6 }}>
                    This calculator provides estimates only. Actual payments vary with daily card volume. Factor rates are not APR — they do not compound. Consult a financial advisor before committing to MCA financing.
                  </p>
                </HoverCard>
              ) : (
                <HoverCard style={{ padding: "2rem" }}>
                  <p style={{ color: G.textMid, fontSize: "0.95rem", fontStyle: "italic", textAlign: "center", margin: "0 0 1.5rem 0", maxWidth: "none" }}>
                    Fill in all fields and click &ldquo;Calculate MCA Cost&rdquo; to see your full estimate.
                  </p>
                  {/* Preview what they'll see */}
                  <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: "1.25rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 700, color: G.dark, margin: "0 0 0.75rem 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      You&apos;ll See:
                    </p>
                    {["Total Payback Amount", "Cost of Capital", "Factor Rate Applied", "Approximate Daily Payment", "Approximate Weekly Payment", "Estimated Repayment Period", "Effective APR (Texas Disclosure)"].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0", borderBottom: `1px solid ${G.border}` }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: G.green, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.875rem", color: G.textMid }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </HoverCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Programs ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Related Programs"
            title="Financing Programs for Fast Capital"
            subtitle="MCAs are one option. Explore others that may cost less and fit your deal better."
          />
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
            title="MCA Calculator — Common Questions"
          />
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/apply" style={{
              display: "inline-block", background: G.green, color: "#fff",
              padding: "0.875rem 2.5rem", fontWeight: 700, fontSize: "0.9rem",
              textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em",
            }}>
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
