"use client";

import { useState } from "react";
import Link from "next/link";

const G = { green: "#118241", dark: "#082B09", gold: "#CE9562" };

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function calcDSCR(monthlyIncome: number, monthlyExpenses: number, annualDebtService: number) {
  if (!isFinite(monthlyIncome) || monthlyIncome <= 0) return null;
  if (!isFinite(monthlyExpenses) || monthlyExpenses < 0) return null;
  if (!isFinite(annualDebtService) || annualDebtService <= 0) return null;
  const annualNOI = (monthlyIncome * 12) - (monthlyExpenses * 12);
  const dscr = annualNOI / annualDebtService;
  const monthlyNOI = monthlyIncome - monthlyExpenses;
  return { annualNOI, monthlyNOI, dscr };
}

type TooltipProps = { text: string; children: React.ReactNode };
function Tooltip({ text, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
      {children}
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ width: 16, height: 16, borderRadius: "50%", background: "#cbd5e1", color: "#475569", fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "help", flexShrink: 0, fontWeight: 700 }}
      >
        ?
        {show && (
          <span style={{ position: "absolute", bottom: "125%", left: "50%", transform: "translateX(-50%)", background: G.dark, color: "#fff", fontSize: "0.75rem", lineHeight: 1.5, padding: "0.6rem 0.875rem", width: 220, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.15)", pointerEvents: "none" }}>
            {text}
          </span>
        )}
      </span>
    </span>
  );
}

export default function DSCRCalculatorPage() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [annualDebtService, setAnnualDebtService] = useState("");

  const result = calcDSCR(
    parseFloat(monthlyIncome.replace(/,/g, "")),
    parseFloat(monthlyExpenses.replace(/,/g, "")),
    parseFloat(annualDebtService.replace(/,/g, ""))
  );

  const hasValues = monthlyIncome !== "" && monthlyExpenses !== "" && annualDebtService !== "";

  return (
    <main style={{ fontFamily: "var(--font-source-sans)", color: "#1e293b", background: "#fff" }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>
            <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Planning Tools</Link> / DSCR Calculator
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1rem", maxWidth: 700 }}>
            DSCR Calculator
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 580 }}>
            Enter your property&rsquo;s monthly rental income, monthly operating expenses,
            and annual debt service to calculate Debt Service Coverage Ratio and Annual NOI.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "1rem", fontStyle: "italic" }}>
            This calculation is for estimation purposes only. Actual underwriting criteria may vary by lender.
          </p>
        </div>
      </section>

      {/* ── Calculator ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="sgf-calc-layout">

          {/* Inputs */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Property Details
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="Gross scheduled monthly rent from all units. Use market rate for vacant units when projecting. This is the total rent collected before any deductions.">
                    Monthly Rental Income
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="10,000" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="Total monthly operating expenses excluding debt service. Includes property taxes, insurance, maintenance, management fees, utilities, and vacancy reserves. Do NOT include mortgage payments here.">
                    Monthly Operating Expenses
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="3,500" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="Total annual principal + interest payments on the proposed loan. If you have a monthly payment, multiply by 12. Use the SBA Loan Calculator to estimate this number first.">
                    Annual Debt Service
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="72,000" value={annualDebtService} onChange={(e) => setAnnualDebtService(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              {/* Benchmark reference — educational only, no pass/fail logic */}
              <div style={{ background: "#f8f6f1", border: "1px solid #e2e8f0", padding: "1.25rem" }}>
                <p style={{ fontWeight: 700, color: G.dark, fontSize: "0.85rem", marginBottom: "0.75rem" }}>Common Lender DSCR Reference Points</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { range: "≥ 1.25", note: "Commonly cited lender minimum for CRE loans" },
                    { range: "1.00 – 1.24", note: "Below typical minimums — may require exceptions" },
                    { range: "< 1.00", note: "Cash flow does not cover debt — not lender-eligible" },
                  ].map(({ range, note }) => (
                    <div key={range} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: G.gold, flexShrink: 0, minWidth: 70 }}>{range}</span>
                      <span style={{ fontSize: "0.8rem", color: "#475569" }}>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Estimated Results
            </h2>

            <div style={{ background: G.dark, padding: "2.5rem", marginBottom: "1.5rem" }}>
              {result ? (
                <>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>DSCR</p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3.5rem", fontWeight: 700, color: G.gold, marginBottom: "0.25rem", lineHeight: 1 }}>
                    {result.dscr.toFixed(2)}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>Debt Service Coverage Ratio</p>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Annual NOI</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.annualNOI)}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Monthly NOI</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.monthlyNOI)}</p>
                    </div>
                    <div style={{ gridColumn: "1 / -1", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem" }}>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Annual Surplus After Debt Service</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: result.annualNOI - parseFloat(annualDebtService.replace(/,/g, "")) >= 0 ? "#fff" : "#f87171" }}>
                        {fmt(result.annualNOI - parseFloat(annualDebtService.replace(/,/g, "")))}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  {hasValues ? "Check your inputs — all values must be positive numbers." : "Enter income, expenses, and debt service to see DSCR."}
                </p>
              )}
            </div>

            <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              This calculation is for estimation purposes only. Actual underwriting criteria may vary by lender.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link href="/contact" style={{ display: "block", textAlign: "center", background: G.green, color: "#fff", padding: "0.875rem 1.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", fontFamily: "var(--font-source-sans)" }}>
                Schedule a Consultation
              </Link>
              <Link href="/tools" style={{ display: "block", textAlign: "center", fontSize: "0.875rem", color: "#64748b", textDecoration: "underline", textUnderlineOffset: 4 }}>
                ← Back to all tools
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Education ────────────────────────────────────────────── */}
      <section style={{ background: "#f8f6f1", padding: "4rem 2rem", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: G.dark, marginBottom: "1.5rem" }}>
            Understanding DSCR
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { q: "What is DSCR and why do lenders use it?", a: "DSCR (Debt Service Coverage Ratio) measures how many times a property's net operating income covers its annual debt obligations. A DSCR of 1.25 means the property generates $1.25 in NOI for every $1.00 of debt payment. Lenders use it to assess repayment risk." },
              { q: "What counts as an operating expense?", a: "Property taxes, insurance, property management fees, maintenance and repairs, utilities (if landlord-paid), and a vacancy reserve (typically 5–10% of gross rents). Do NOT include mortgage payments or capital improvements." },
              { q: "What does this calculator not tell you?", a: "This estimate does not account for vacancy rates, property-specific risk factors, lender overlays, or personal financial strength. Lenders perform their own NOI calculations and may use different expense assumptions." },
              { q: "Can I use this for business (non-real estate) DSCR?", a: "Yes — substitute business revenue for monthly income and business operating expenses for monthly expenses. Annual debt service would include all existing and proposed loan payments. The same formula applies." },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderLeft: `3px solid ${G.gold}`, paddingLeft: "1.25rem" }}>
                <p style={{ fontWeight: 700, color: G.dark, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{q}</p>
                <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Programs ─────────────────────────────────────── */}
      <section style={{ padding: "3rem 2rem", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>Related Financing Programs</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { label: "Commercial Real Estate", href: "/financing-options/commercial-real-estate" },
              { label: "DSCR Rental Loans", href: "/financing-options/dscr-rental-loans" },
              { label: "Fix & Flip Loans", href: "/financing-options/fix-and-flip" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ border: `1px solid ${G.green}`, color: G.green, padding: "0.5rem 1.25rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
