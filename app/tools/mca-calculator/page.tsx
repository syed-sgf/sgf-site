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
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

type Results = { totalPayback: number; costOfCapital: number; factorRateApplied: number };

function calcMCA(advanceAmount: number, factorRate: number): Results | null {
  if (!isFinite(advanceAmount) || advanceAmount <= 0) return null;
  if (!isFinite(factorRate) || factorRate < 1) return null;
  const totalPayback = advanceAmount * factorRate;
  const costOfCapital = totalPayback - advanceAmount;
  return { totalPayback, costOfCapital, factorRateApplied: factorRate };
}

function HoverCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
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
        <p style={{ fontSize: "1rem", color: G.textMid, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
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
        <label style={{ fontSize: "0.875rem", fontWeight: 700, color: G.textDark, fontFamily: G.sans, margin: 0 }}>
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

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <HoverCard style={{ padding: "1.25rem", textAlign: "center" }}>
      <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: G.textMid, margin: "0 0 0.5rem 0", maxWidth: "none" }}>
        {label}
      </p>
      <p style={{ fontFamily: G.serif, fontSize: "1.75rem", fontWeight: 700, color: G.dark, margin: 0, maxWidth: "none" }}>
        {value}
      </p>
    </HoverCard>
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
        <Link href="/financing-options" style={{ background: "transparent", color: "#fff", padding: "0.875rem 2rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em", border: "1.5px solid rgba(255,255,255,0.3)", display: "inline-block" }}>
          View Financing Programs
        </Link>
      </div>
    </section>
  );
}

export default function MCACalculatorPage() {
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [factorRate, setFactorRate] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  function handleCalculate() {
    const amount = parseFloat(advanceAmount.replace(/,/g, ""));
    const rate = parseFloat(factorRate.replace(/,/g, ""));
    const calc = calcMCA(amount, rate);
    if (!calc) return;
    setResults(calc);
  }

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
          <div style={{ maxWidth: 680 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 1.25rem 0", maxWidth: "none" }}>
              Financial Tools
            </p>
            <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              MCA Calculator
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 580, margin: "0 auto 1.25rem" }}>
              Estimate total repayment for a Merchant Cash Advance using advance amount and factor rate.
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: "none" }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Tools Hub</Link>
              {" → "}MCA Calculator
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator Section ────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="MCA Calculator"
            title="Estimate Your MCA Repayment"
            subtitle="Enter your advance amount and factor rate. No holdback percentage required."
          />
          <div className="sgf-calc-layout">

            {/* LEFT — Inputs */}
            <HoverCard style={{ padding: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <CalcInput
                  label="Advance Amount ($)"
                  value={advanceAmount}
                  onChange={setAdvanceAmount}
                  placeholder="100,000"
                  tooltip="The total amount funded to your business."
                />
                <CalcInput
                  label="Factor Rate"
                  value={factorRate}
                  onChange={setFactorRate}
                  placeholder="1.30"
                  tooltip="A decimal multiplier (e.g. 1.30 means you repay 1.30× the advance). Not an interest rate — factor rates do not compound."
                />
                <CalcButton label="Calculate Repayment" onClick={handleCalculate} />
              </div>
            </HoverCard>

            {/* RIGHT — Results */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {results ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
                    <ResultCard label="Total Payback Amount" value={fmt(results.totalPayback)} />
                    <ResultCard label="Cost of Capital" value={fmt(results.costOfCapital)} />
                    <ResultCard label="Factor Rate Applied" value={results.factorRateApplied.toFixed(2)} />
                  </div>

                  <HoverCard style={{ padding: "1.5rem" }}>
                    <p style={{ fontSize: "0.875rem", color: G.textMid, lineHeight: 1.8, margin: 0, maxWidth: "none" }}>
                      Merchant cash advances are not traditional loans. Factor rates are not APR. The cost shown is the total cost of capital, not an annualized rate. Repayment is typically tied to daily revenue — actual repayment speed varies.
                    </p>
                  </HoverCard>

                  <p style={{ fontSize: "0.8rem", color: G.textMid, fontStyle: "italic", margin: 0, maxWidth: "none" }}>
                    Merchant cash advances are not traditional loans. This calculation is an estimate only and does not reflect all costs.
                  </p>
                </>
              ) : (
                <HoverCard style={{ padding: "2rem" }}>
                  <p style={{ color: G.textMid, fontSize: "0.95rem", fontStyle: "italic", textAlign: "center", margin: 0, maxWidth: "none" }}>
                    Enter advance amount and factor rate, then click &ldquo;Calculate Repayment&rdquo; to see your results.
                  </p>
                </HoverCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Programs ─────────────────────────────────────── */}
      <section style={{ padding: "3rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 1rem 0", maxWidth: "none" }}>
            Related Programs
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { label: "Merchant Cash Advance", href: "/financing-options/merchant-cash-advance" },
              { label: "Business Lines of Credit", href: "/financing-options/lines-of-credit" },
              { label: "Working Capital", href: "/financing-options/working-capital" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ border: `1px solid ${G.green}`, color: G.green, padding: "0.5rem 1.25rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
