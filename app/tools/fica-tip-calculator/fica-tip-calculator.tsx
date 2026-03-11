"use client";

import { useState } from "react";
import Link from "next/link";

const G = { green: "#118241", dark: "#082B09", gold: "#CE9562" };

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function calcFICA(totalTips: number, ficaRate: number) {
  if (!isFinite(totalTips) || totalTips <= 0) return null;
  if (!isFinite(ficaRate) || ficaRate <= 0) return null;
  const credit = totalTips * (ficaRate / 100);
  const socialSecurity = totalTips * 0.062;
  const medicare = totalTips * 0.0145;
  return { credit, socialSecurity, medicare };
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

export default function FicaTipCalculatorPage() {
  const [totalTips, setTotalTips] = useState("");
  const [ficaRate, setFicaRate] = useState("");

  const result = calcFICA(
    parseFloat(totalTips.replace(/,/g, "")),
    parseFloat(ficaRate)
  );

  const hasValues = totalTips !== "" && ficaRate !== "";

  return (
    <main style={{ fontFamily: "var(--font-source-sans)", color: "#1e293b", background: "#fff" }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>
            <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Planning Tools</Link> / FICA Tip Credit Calculator
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1rem", maxWidth: 700 }}>
            FICA Tip Credit Calculator
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 580 }}>
            Estimate the IRC § 45B employer tax credit on FICA taxes paid on tipped employee wages.
            Commonly used by restaurants, hospitality operators, and food &amp; beverage businesses.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "1rem", fontStyle: "italic" }}>
            This is an estimate only. Consult a qualified tax professional for your exact credit under IRC § 45B.
          </p>
        </div>
      </section>

      {/* ── Calculator ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="sgf-calc-layout">

          {/* Inputs */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Credit Inputs
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="Total tips reported by all tipped employees during the tax year. This is the aggregate of all W-2 tip income reported. You can find this on your payroll records or Box 7 of employees' W-2 forms.">
                    Total Tips Reported (Annual)
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>$</span>
                  <input type="text" inputMode="numeric" placeholder="250,000" value={totalTips} onChange={(e) => setTotalTips(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 1rem 0.875rem 1.75rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#334155", marginBottom: "0.5rem" }}>
                  <Tooltip text="The employer's share of FICA taxes. The standard rate is 7.65% (Social Security 6.2% + Medicare 1.45%). Most employers use 7.65% unless they have special circumstances.">
                    Employer FICA Rate
                  </Tooltip>
                </label>
                <div style={{ position: "relative" }}>
                  <input type="number" min="0" max="20" step="0.01" placeholder="7.65" value={ficaRate} onChange={(e) => setFicaRate(e.target.value)}
                    style={{ width: "100%", border: "1px solid #cbd5e1", padding: "0.875rem 2rem 0.875rem 1rem", fontSize: "1rem", color: G.dark, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-source-sans)" }} />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontWeight: 600 }}>%</span>
                </div>
                <p style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.5rem" }}>Standard rate: 7.65% (Social Security 6.2% + Medicare 1.45%)</p>
              </div>

              {/* About the credit */}
              <div style={{ background: "#f8f6f1", border: "1px solid #e2e8f0", padding: "1.25rem" }}>
                <p style={{ fontWeight: 700, color: G.dark, fontSize: "0.85rem", marginBottom: "0.5rem" }}>About IRC § 45B</p>
                <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                  The FICA Tip Credit allows food and beverage employers to claim a dollar-for-dollar federal tax credit
                  equal to the employer FICA taxes paid on tips that bring employees&apos; wages above the federal minimum wage.
                  This is a credit — not a deduction — meaning it directly reduces your tax liability.
                </p>
              </div>

            </div>
          </div>

          {/* Results */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Estimated Credit
            </h2>

            <div style={{ background: G.dark, padding: "2.5rem", marginBottom: "1.5rem" }}>
              {result ? (
                <>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>Estimated FICA Tip Credit</p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 700, color: G.gold, marginBottom: "2rem", lineHeight: 1 }}>
                    {fmt(result.credit)}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {[
                      { label: "Total Tips", value: fmt(parseFloat(totalTips.replace(/,/g, ""))) },
                      { label: "Employer FICA Rate", value: `${parseFloat(ficaRate).toFixed(2)}%` },
                      { label: "Social Security component (6.2%)", value: fmt(result.socialSecurity) },
                      { label: "Medicare component (1.45%)", value: fmt(result.medicare) },
                      { label: "Estimated Credit", value: fmt(result.credit), highlight: true },
                    ].map(({ label, value, highlight }) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: highlight ? "1px solid rgba(255,255,255,0.1)" : "none", paddingTop: highlight ? "0.875rem" : 0 }}>
                        <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>{label}</span>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: highlight ? G.gold : "#fff" }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  {hasValues ? "Check your inputs — values must be positive numbers." : "Enter total tips and FICA rate to estimate your credit."}
                </p>
              )}
            </div>

            <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              This is an estimate only. Work with a qualified tax professional to calculate your exact credit under IRC § 45B based on per-employee hours and minimum wage thresholds.
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
            Understanding the FICA Tip Credit
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { q: "Who qualifies for the FICA Tip Credit?", a: "Food and beverage employers whose employees receive tips as part of their compensation. The business must be in an industry where tipping is customary — primarily restaurants, bars, cafes, catering, and hospitality operators." },
              { q: "Is this a tax deduction or a tax credit?", a: "It's a credit — which means it directly reduces your federal income tax liability dollar-for-dollar, not just your taxable income. A $19,000 estimated credit reduces what you owe to the IRS by $19,000." },
              { q: "Why is the estimate simplified?", a: "The exact credit calculation requires per-employee data — specifically hours worked and whether their base wage already exceeds the federal minimum wage. This calculator uses aggregate tip income as a proxy. Your actual credit may differ." },
              { q: "Can this credit affect financing decisions?", a: "Yes. FICA Tip Credits reduce your effective tax burden, which can improve free cash flow and strengthen a loan application. Lenders reviewing tax returns may factor this in when assessing repayment capacity." },
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
              { label: "Franchise Financing", href: "/financing-options/franchise-financing" },
              { label: "SBA Financing", href: "/financing-options/sba-financing" },
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
