"use client";

import { useState } from "react";
import Link from "next/link";

const G = { green: "#118241", dark: "#082B09", gold: "#CE9562" };

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function calcMCA(advanceAmount: number, factorRate: number) {
  if (!isFinite(advanceAmount) || advanceAmount <= 0) return null;
  if (!isFinite(factorRate) || factorRate < 1) return null;
  const totalPayback = advanceAmount * factorRate;
  const costOfCapital = totalPayback - advanceAmount;
  const costPercent = (costOfCapital / advanceAmount) * 100;
  return { totalPayback, costOfCapital, costPercent };
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
          <span style={{ position: "absolute", bottom: "125%", left: "50%", transform: "translateX(-50%)", background: G.dark, color: "#fff", fontSize: "0.75rem", lineHeight: 1.5, padding: "0.6rem 0.875rem", width: 240, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.15)", pointerEvents: "none" }}>
            {text}
          </span>
        )}
      </span>
    </span>
  );
}

export default function MCACalculatorPage() {
  const [advance, setAdvance] = useState("");
  const [factorRate, setFactorRate] = useState("");

  const result = calcMCA(
    parseFloat(advance.replace(/,/g, "")),
    parseFloat(factorRate)
  );

  const hasValues = advance !== "" && factorRate !== "";

  return (
    <main style={{ fontFamily: "var(--font-source-sans)", color: "#1e293b", background: "#fff" }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>
            <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Planning Tools</Link> / MCA True Cost Calculator
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1rem", maxWidth: 700 }}>
            MCA True Cost Calculator
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 580 }}>
            Merchant cash advances use factor rates instead of interest rates — which
            obscures the true cost. Enter your advance amount and factor rate to see
            exactly what you&rsquo;ll repay.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "1rem", fontStyle: "italic" }}>
            Merchant cash advances are not traditional loans. This calculation is an estimate only and does not reflect all costs.
          </p>
        </div>
      </section>

      {/* ── Calculator ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="sgf-calc-layout">

          {/* Inputs */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Advance Details
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="The total amount funded to you by the MCA provider. This is what you receive — not what you repay. The repayment amount is this number multiplied by the factor rate.">
                    Advance Amount
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="100,000" value={advance} onChange={(e) => setAdvance(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="The multiplier applied to your advance amount to determine total repayment. A factor rate of 1.35 means you repay $1.35 for every $1.00 advanced. Typical range: 1.15 – 1.55.">
                    Factor Rate
                  </Tooltip>
                </label>
                <input type="number" min="1" max="3" step="0.01" placeholder="1.35" value={factorRate} onChange={(e) => setFactorRate(e.target.value)}
                  style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                <p style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.5rem" }}>Enter as a decimal (e.g., 1.35 — not 35%). Typical range: 1.15 to 1.55.</p>
              </div>

              {/* Factor rate reference */}
              <div style={{ background: "#f8f6f1", border: "1px solid #e2e8f0", padding: "1.25rem" }}>
                <p style={{ fontWeight: 700, color: G.dark, fontSize: "0.85rem", marginBottom: "0.75rem" }}>Factor Rate Reference</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { rate: "1.10 – 1.19", desc: "Lower-cost MCA — shorter term, strong revenue" },
                    { rate: "1.20 – 1.35", desc: "Typical mid-range MCA factor rate" },
                    { rate: "1.40 – 1.55+", desc: "Higher risk profile or longer repayment" },
                  ].map(({ rate, desc }) => (
                    <div key={rate} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: G.gold, flexShrink: 0, minWidth: 90 }}>{rate}</span>
                      <span style={{ fontSize: "0.8rem", color: "#475569" }}>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              True Cost Breakdown
            </h2>

            <div style={{ background: G.dark, padding: "2.5rem", marginBottom: "1.5rem" }}>
              {result ? (
                <>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>Total Payback</p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 700, color: G.gold, marginBottom: "2rem", lineHeight: 1 }}>
                    {fmt(result.totalPayback)}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Cost of Capital</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{fmt(result.costOfCapital)}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>Effective Cost %</p>
                      <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{result.costPercent.toFixed(1)}%</p>
                    </div>
                    <div style={{ gridColumn: "1 / -1", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem" }}>
                      <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                        For every $1 advanced, you repay ${parseFloat(factorRate || "0").toFixed(2)}. The effective cost above reflects the cost of capital as a percentage of the advance amount.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  {hasValues ? "Factor rate must be ≥ 1.0 (e.g., 1.35)." : "Enter advance amount and factor rate to see the true cost."}
                </p>
              )}
            </div>

            <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Merchant cash advances are not traditional loans. This calculation is an estimate only and does not reflect all costs including origination fees or other charges.
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
            MCA vs. Traditional Financing — What You Should Know
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { q: "Why don't MCAs use interest rates?", a: "MCAs are not loans — they're the purchase of future receivables. As a result, they're not subject to usury laws in most states, and providers use factor rates instead of APR. This can make cost comparisons with traditional loans difficult." },
              { q: "Is the effective cost % shown here the same as APR?", a: "No. The effective cost % shown is the cost of capital as a percentage of the advance amount — not an annualized rate. The actual APR would be significantly higher because repayment happens over a short period (often 3–12 months)." },
              { q: "When does an MCA make sense?", a: "When speed matters more than cost, when a business doesn't qualify for traditional financing, or as a very short-term bridge. MCAs are expensive capital — they should be evaluated against alternatives before committing." },
              { q: "What are the alternatives to an MCA?", a: "Business lines of credit, revenue-based financing, SBA loans, and accounts receivable financing can all serve similar working capital functions at lower cost for businesses that qualify." },
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
              { label: "Merchant Cash Advance", href: "/financing-options/merchant-cash-advance" },
              { label: "Business LOC & Term Loans", href: "/financing-options/business-loc-term-loans" },
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
