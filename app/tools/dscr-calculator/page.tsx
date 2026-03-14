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

type Results = { dscr: number; annualNOI: number; monthlyNOI: number };

function calcDSCR(monthlyIncome: number, monthlyExpenses: number, annualDebtService: number): Results | null {
  if (!isFinite(monthlyIncome) || monthlyIncome <= 0) return null;
  if (!isFinite(monthlyExpenses) || monthlyExpenses < 0) return null;
  if (!isFinite(annualDebtService) || annualDebtService <= 0) return null;
  const annualNOI = (monthlyIncome * 12) - (monthlyExpenses * 12);
  const monthlyNOI = annualNOI / 12;
  const dscr = annualNOI / annualDebtService;
  return { dscr, annualNOI, monthlyNOI };
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

export default function DSCRCalculatorPage() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [annualDebtService, setAnnualDebtService] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  function handleCalculate() {
    const income = parseFloat(monthlyIncome.replace(/,/g, ""));
    const expenses = parseFloat(monthlyExpenses.replace(/,/g, ""));
    const debt = parseFloat(annualDebtService.replace(/,/g, ""));
    const calc = calcDSCR(income, expenses, debt);
    if (!calc) return;
    setResults(calc);
  }

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop')",
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
              DSCR Calculator
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 580, margin: "0 auto 1.25rem" }}>
              Calculate your Debt Service Coverage Ratio to understand how property cash flow compares to loan obligations.
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: "none" }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Tools Hub</Link>
              {" → "}DSCR Calculator
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
            subtitle="Enter monthly income, expenses, and annual debt service. Results are estimates only."
          />
          <div className="sgf-calc-layout">

            {/* LEFT — Inputs */}
            <HoverCard style={{ padding: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <CalcInput
                  label="Monthly Rental Income ($)"
                  value={monthlyIncome}
                  onChange={setMonthlyIncome}
                  placeholder="10,000"
                  tooltip="Gross scheduled monthly rent from the property. Use the full rent roll, not net collected."
                />
                <CalcInput
                  label="Monthly Operating Expenses ($)"
                  value={monthlyExpenses}
                  onChange={setMonthlyExpenses}
                  placeholder="3,500"
                  tooltip="Monthly operating costs excluding debt service. Includes taxes, insurance, maintenance, management fees."
                />
                <CalcInput
                  label="Annual Debt Service ($)"
                  value={annualDebtService}
                  onChange={setAnnualDebtService}
                  placeholder="72,000"
                  tooltip="Total annual loan payments (principal + interest). You can use the Business Loan Calculator to get this number."
                />
                <CalcButton label="Calculate DSCR" onClick={handleCalculate} />
              </div>
            </HoverCard>

            {/* RIGHT — Results */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {results ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
                    <ResultCard label="DSCR Ratio" value={results.dscr.toFixed(2)} />
                    <ResultCard label="Annual NOI" value={fmt(results.annualNOI)} />
                    <ResultCard label="Monthly NOI" value={fmt(results.monthlyNOI)} />
                  </div>

                  {/* Interpretation panel */}
                  <HoverCard style={{ padding: "1.5rem" }}>
                    <h4 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, marginBottom: "1rem" }}>
                      What does this mean?
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {[
                        "DSCR above 1.25 — Most lenders consider this acceptable coverage.",
                        "DSCR between 1.0–1.25 — Marginal. Some lenders may require additional reserves.",
                        "DSCR below 1.0 — Cash flow does not cover debt service. Deal likely needs restructuring.",
                      ].map((text) => (
                        <div key={text} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                          <span style={{ color: G.gold, fontSize: "0.65rem", flexShrink: 0, marginTop: "0.25rem" }}>◆</span>
                          <p style={{ fontSize: "0.875rem", color: G.textMid, lineHeight: 1.7, margin: 0, maxWidth: "none" }}>
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: "0.75rem", color: G.textMid, fontStyle: "italic", marginTop: "1rem", maxWidth: "none" }}>
                      No threshold is a guarantee of approval. Lender standards vary.
                    </p>
                  </HoverCard>

                  <p style={{ fontSize: "0.8rem", color: G.textMid, fontStyle: "italic", margin: 0, maxWidth: "none" }}>
                    This calculation is for estimation purposes only. Actual underwriting criteria may vary by lender.
                  </p>
                </>
              ) : (
                <HoverCard style={{ padding: "2rem" }}>
                  <p style={{ color: G.textMid, fontSize: "0.95rem", fontStyle: "italic", textAlign: "center", margin: 0, maxWidth: "none" }}>
                    Enter income, expenses, and debt service, then click &ldquo;Calculate DSCR&rdquo; to see your results.
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
              { label: "DSCR Rental Loans", href: "/financing-options/dscr-loans" },
              { label: "Commercial Real Estate Financing", href: "/financing-options/commercial-real-estate" },
              { label: "SBA 7(a) & 504 Loans", href: "/financing-options/sba-loans" },
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
