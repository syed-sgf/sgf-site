"use client";

import { useState } from "react";
import Link from "next/link";

const G = { green: "#118241", dark: "#082B09", gold: "#CE9562" };

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function calcWorkingCapital(monthlyRevenue: number, monthlyExpenses: number, coverageMonths: number) {
  if (!isFinite(monthlyRevenue) || monthlyRevenue < 0) return null;
  if (!isFinite(monthlyExpenses) || monthlyExpenses <= 0) return null;
  if (!isFinite(coverageMonths) || coverageMonths <= 0) return null;
  const monthlyGap = monthlyExpenses - monthlyRevenue;
  const workingCapital = monthlyGap > 0 ? monthlyGap * coverageMonths : 0;
  const monthlyNet = monthlyRevenue - monthlyExpenses;
  return { monthlyGap, workingCapital, monthlyNet, isPositive: monthlyGap <= 0 };
}

type TooltipProps = { text: string; children: React.ReactNode };
function Tooltip({ text, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
      {children}
      <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        style={{ width: 16, height: 16, borderRadius: "50%", background: "#cbd5e1", color: "#475569", fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "help", flexShrink: 0, fontWeight: 700 }}>
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

export default function WorkingCapitalCalculatorPage() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [coverageMonths, setCoverageMonths] = useState("");

  const result = calcWorkingCapital(
    parseFloat(monthlyRevenue.replace(/,/g, "")),
    parseFloat(monthlyExpenses.replace(/,/g, "")),
    parseFloat(coverageMonths)
  );

  const hasValues = monthlyRevenue !== "" && monthlyExpenses !== "" && coverageMonths !== "";

  return (
    <main style={{ fontFamily: "var(--font-source-sans)", color: "#1e293b", background: "#fff" }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>
            <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Planning Tools</Link> / Working Capital Calculator
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1rem", maxWidth: 700 }}>
            Working Capital Calculator
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 580 }}>
            Estimate how much working capital you may need to bridge cash flow gaps.
            Enter your monthly revenue, monthly expenses, and desired coverage period.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "1rem", fontStyle: "italic" }}>
            This estimate is for planning purposes only and does not represent a financing offer.
          </p>
        </div>
      </section>

      {/* ── Calculator ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="sgf-calc-layout">

          {/* Inputs */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Cash Flow Inputs
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="Your average gross monthly revenue — total sales or collections before any expenses. Use a trailing 3–6 month average for accuracy.">
                    Monthly Revenue
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="80,000" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="Total monthly operating costs — payroll, rent, inventory, utilities, insurance, and other recurring expenses. Include everything needed to keep the business running.">
                    Monthly Operating Expenses
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="95,000" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="How many months of cash flow gap coverage do you need? Lenders typically fund 1–6 months of working capital. Seasonal businesses often request 3–6 months.">
                    Desired Coverage Period (Months)
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <input type="number" min="1" max="24" step="1" placeholder="3" value={coverageMonths} onChange={(e) => setCoverageMonths(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 3.5rem 0.875rem 1rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: "0.875rem" }}>months</span>
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
                result.isPositive ? (
                  <>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>
                      Monthly Cash Flow (Positive)
                    </p>
                    <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 700, color: G.gold, marginBottom: "1rem", lineHeight: 1 }}>
                      {fmt(result.monthlyNet)} / mo
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                      Your revenue exceeds expenses by {fmt(result.monthlyNet)} per month.
                      No working capital gap to bridge at the current inputs.
                      Consider whether growth plans, seasonality, or timing gaps may still require a buffer.
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>
                      Estimated Working Capital Need
                    </p>
                    <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 700, color: G.gold, marginBottom: "2rem", lineHeight: 1 }}>
                      {fmt(result.workingCapital)}
                    </p>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                      <div>
                        <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Monthly Cash Gap</p>
                        <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.monthlyGap)}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Coverage Period</p>
                        <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{coverageMonths} months</p>
                      </div>
                    </div>
                  </>
                )
              ) : (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  {hasValues ? "Check your inputs — all values must be positive numbers." : "Enter revenue, expenses, and coverage months to see your estimate."}
                </p>
              )}
            </div>

            <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              This estimate is for planning purposes only and does not represent a financing offer.
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
            Understanding Working Capital Needs
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { q: "What is working capital?", a: "Working capital is the difference between current assets (cash, receivables, inventory) and current liabilities (payables, short-term debt). A working capital loan funds the gap between when expenses are due and when revenue is collected." },
              { q: "When does a business need working capital financing?", a: "Common triggers: slow collections, seasonal revenue dips, rapid growth outpacing cash flow, large inventory purchases before payment is received, or a contract requiring upfront materials before milestone payments." },
              { q: "What types of financing address working capital gaps?", a: "Business lines of credit, short-term term loans, accounts receivable financing, and invoice factoring are all tools that address working capital gaps. The right structure depends on your revenue type and cash cycle." },
              { q: "Why doesn't this calculator show zero if revenue equals expenses?", a: "Even break-even businesses need cash reserves. This tool models a specific gap — if your gap is $0, that's a starting point for a conversation, not a guarantee that capital isn't needed." },
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
              { label: "Business LOC & Term Loans", href: "/financing-options/business-loc-term-loans" },
              { label: "Equipment Financing", href: "/financing-options/equipment-financing" },
              { label: "Accounts Receivable Financing", href: "/financing-options/accounts-receivable-financing" },
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
