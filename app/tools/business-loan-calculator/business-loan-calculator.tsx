"use client";

import { useState } from "react";
import Link from "next/link";

const G = { green: "#118241", dark: "#082B09", gold: "#CE9562" };

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function calcLoan(principal: number, annualRate: number, years: number) {
  if (!isFinite(principal) || principal <= 0) return null;
  if (!isFinite(annualRate) || annualRate < 0) return null;
  if (!isFinite(years) || years <= 0) return null;
  const months = Math.round(years * 12);
  const r = annualRate / 100 / 12;
  const monthly =
    r === 0
      ? principal / months
      : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  if (!isFinite(monthly)) return null;
  const totalPayments = monthly * months;
  const totalInterest = totalPayments - principal;
  const annualDebtService = monthly * 12;
  return { monthly, totalInterest, totalPayments, annualDebtService };
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
        style={{
          width: 16, height: 16, borderRadius: "50%",
          background: "#cbd5e1", color: "#475569",
          fontSize: 11, display: "inline-flex", alignItems: "center",
          justifyContent: "center", cursor: "help", flexShrink: 0, fontWeight: 700,
        }}
      >
        ?
        {show && (
          <span style={{
            position: "absolute", bottom: "125%", left: "50%",
            transform: "translateX(-50%)",
            background: G.dark, color: "#fff",
            fontSize: "0.75rem", lineHeight: 1.5,
            padding: "0.6rem 0.875rem",
            width: 220, zIndex: 100,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            pointerEvents: "none",
          }}>
            {text}
          </span>
        )}
      </span>
    </span>
  );
}

export default function BusinessLoanCalculatorPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const result = calcLoan(
    parseFloat(principal.replace(/,/g, "")),
    parseFloat(rate),
    parseFloat(years)
  );

  const hasValues = principal !== "" && rate !== "" && years !== "";

  return (
    <main style={{ fontFamily: "var(--font-source-sans)", color: "#1e293b", background: "#fff" }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>
            <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Planning Tools</Link> / SBA Loan Calculator
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1rem", maxWidth: 700 }}>
            SBA Loan Payment Calculator
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 580 }}>
            Estimate your monthly payment, annual debt service, and total cost of capital
            for an SBA or conventional term loan. Enter your loan details below.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "1rem", fontStyle: "italic" }}>
            This calculator provides estimates only. Final loan terms are determined by lenders.
          </p>
        </div>
      </section>

      {/* ── Calculator ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="sgf-calc-layout">

          {/* Inputs */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Loan Details
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="The total amount you're borrowing. For SBA loans this is typically $50,000–$5,000,000. Enter numbers only — no commas needed.">
                    Loan Amount
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="250,000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="The nominal annual interest rate on the loan. Current SBA 7(a) rates typically range from 10%–15.5% depending on term and prime rate. Enter as a percentage (e.g., 10.5).">
                    Annual Interest Rate
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    min="0" max="50" step="0.01"
                    placeholder="10.50"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 2rem 0.875rem 1rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }}
                  />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>%</span>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="The loan repayment term in years. SBA 7(a) loans for working capital: up to 10 years. Real estate: up to 25 years. Equipment: up to 10 years. Enter whole or decimal years (e.g., 10 or 7.5).">
                    Loan Term (Years)
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    min="1" max="30" step="0.5"
                    placeholder="10"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 3.5rem 0.875rem 1rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }}
                  />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: "0.875rem" }}>years</span>
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
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>
                    Monthly Payment
                  </p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 700, color: G.gold, marginBottom: "2rem", lineHeight: 1 }}>
                    {fmt(result.monthly)}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Annual Debt Service</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.annualDebtService)}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Total Interest</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.totalInterest)}</p>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Total Payments Over Loan Life</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.totalPayments)}</p>
                    </div>
                  </div>
                </>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  {hasValues ? "Check your inputs — values must be positive numbers." : "Enter loan amount, rate, and term to see results."}
                </p>
              )}
            </div>

            {/* Disclaimer */}
            <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              This calculator provides estimated loan payments only. Final loan terms, rates, and fees are determined by the lender.
            </p>

            {/* CTAs */}
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

      {/* ── Education Section ────────────────────────────────────── */}
      <section style={{ background: "#f8f6f1", padding: "4rem 2rem", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: G.dark, marginBottom: "1.5rem" }}>
            What This Calculator Tells You — and What It Doesn&rsquo;t
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { q: "What does the monthly payment represent?", a: "The monthly payment is a standard amortized payment — the fixed amount you'd pay each month if the loan were fully amortizing at the rate and term you entered. It includes both principal and interest." },
              { q: "Why does this not include fees?", a: "SBA loans typically carry an SBA guarantee fee (0.5%–3.75% of the guaranteed portion), origination fees, and closing costs. These vary by lender and deal structure. This calculator is for payment estimation only." },
              { q: "What's a typical SBA 7(a) loan term?", a: "Working capital loans: up to 10 years. Equipment loans: up to 10 years. Real estate loans: up to 25 years. Your actual term depends on use of proceeds, collateral, and lender preference." },
              { q: "What does 'annual debt service' mean for DSCR?", a: "Annual debt service (monthly payment × 12) is the number used in DSCR calculations. Lenders divide a property's NOI by this number to assess coverage. Use our DSCR calculator with this output." },
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
              { label: "SBA Financing", href: "/financing-options/sba-financing" },
              { label: "Business LOC & Term Loans", href: "/financing-options/business-loc-term-loans" },
              { label: "Franchise Financing", href: "/financing-options/franchise-financing" },
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
