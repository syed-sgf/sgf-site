"use client";

import { useState } from "react";
import Link from "next/link";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

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

type Results = {
  monthlyGap: number;
  workingCapital: number;
  coverageMonths: number;
  isPositive: boolean;
};

function calcWorkingCapital(monthlyRevenue: number, monthlyExpenses: number, coverageMonths: number): Results | null {
  if (!isFinite(monthlyRevenue) || monthlyRevenue < 0) return null;
  if (!isFinite(monthlyExpenses) || monthlyExpenses <= 0) return null;
  if (!isFinite(coverageMonths) || coverageMonths <= 0) return null;
  const monthlyGap = monthlyExpenses - monthlyRevenue;
  const workingCapital = monthlyGap > 0 ? monthlyGap * coverageMonths : 0;
  return { monthlyGap, workingCapital, coverageMonths, isPositive: monthlyGap <= 0 };
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

const faqs = [
  {
    q: "What is working capital?",
    a: "Working capital is the difference between a business's current assets and current liabilities. It measures short-term liquidity — whether the business has enough resources to cover its near-term obligations.",
  },
  {
    q: "What is a good working capital ratio?",
    a: "A ratio between 1.5 and 2.0 is generally considered healthy. Below 1.0 means current liabilities exceed current assets, which signals short-term liquidity risk. Above 2.0 may indicate underutilized assets.",
  },
  {
    q: "What is the quick ratio?",
    a: "The quick ratio excludes inventory from current assets, measuring only the most liquid assets — cash, receivables, and short-term investments — against current liabilities. It is a stricter liquidity test than the working capital ratio.",
  },
  {
    q: "How is line of credit sizing calculated?",
    a: "Line of credit sizing is typically based on a percentage of accounts receivable and inventory. Lenders commonly advance 70-85% against eligible receivables and 25-50% against inventory, depending on industry and asset quality.",
  },
  {
    q: "Can this calculator help me apply for a line of credit?",
    a: "This calculator provides planning estimates only. It does not constitute a financing offer or approval. Contact SGF to discuss your actual line of credit options based on your full financial profile.",
  },
];

export default function WorkingCapitalCalculatorPage() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [coverageMonths, setCoverageMonths] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  function handleCalculate() {
    const revenue = parseFloat(monthlyRevenue.replace(/,/g, ""));
    const expenses = parseFloat(monthlyExpenses.replace(/,/g, ""));
    const months = parseFloat(coverageMonths.replace(/,/g, ""));
    const calc = calcWorkingCapital(revenue, expenses, months);
    if (!calc) return;
    setResults(calc);
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tools & Calculators", path: "/tools" },
    { name: "Working Capital Calculator", path: "/tools/working-capital-calculator" },
  ]);
  const faqLd = faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85&auto=format&fit=crop')",
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
              Working Capital Calculator
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 580, margin: "0 auto 1.25rem" }}>
              Estimate how much working capital your business needs to cover operational cash flow gaps.
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: "none" }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Tools Hub</Link>
              {" → "}Working Capital Calculator
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator Section ────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Working Capital Calculator"
            title="Estimate Your Working Capital Need"
            subtitle="Enter your monthly revenue, expenses, and desired coverage period."
          />
          <div className="sgf-calc-layout">

            {/* LEFT — Inputs */}
            <HoverCard style={{ padding: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <CalcInput
                  label="Monthly Revenue ($)"
                  value={monthlyRevenue}
                  onChange={setMonthlyRevenue}
                  placeholder="80,000"
                  tooltip="Your average gross monthly revenue. Use a 3–6 month average for accuracy."
                />
                <CalcInput
                  label="Monthly Operating Expenses ($)"
                  value={monthlyExpenses}
                  onChange={setMonthlyExpenses}
                  placeholder="95,000"
                  tooltip="Total monthly operating costs. Include payroll, rent, utilities, inventory — everything except debt service."
                />
                <CalcInput
                  label="Desired Coverage (Months)"
                  value={coverageMonths}
                  onChange={setCoverageMonths}
                  placeholder="3"
                  tooltip="How many months of gap coverage you want. Most lenders look for 3–6 months of working capital."
                />
                <CalcButton label="Calculate Working Capital" onClick={handleCalculate} />
              </div>
            </HoverCard>

            {/* RIGHT — Results */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {results ? (
                results.isPositive ? (
                  <HoverCard style={{ padding: "2rem", borderColor: G.green }}>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: G.green, fontWeight: 600, margin: "0 0 0.75rem 0", maxWidth: "none" }}>
                      Cash Flow Status
                    </p>
                    <p style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: 700, color: G.dark, marginBottom: "0.75rem" }}>
                      Revenue covers expenses for this period.
                    </p>
                    <p style={{ fontSize: "0.875rem", color: G.textMid, lineHeight: 1.8, margin: 0, maxWidth: "none" }}>
                      Working capital financing may still support growth initiatives, seasonal buffers, or timing gaps between payables and receivables.
                    </p>
                  </HoverCard>
                ) : (
                  <>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
                      <ResultCard label="Monthly Cash Gap" value={fmt(results.monthlyGap)} />
                      <ResultCard label="Estimated Working Capital Need" value={fmt(results.workingCapital)} />
                      <ResultCard label="Coverage Period" value={`${results.coverageMonths} months`} />
                    </div>
                    <p style={{ fontSize: "0.8rem", color: G.textMid, fontStyle: "italic", margin: 0, maxWidth: "none" }}>
                      This estimate is for planning purposes only and does not represent a financing offer.
                    </p>
                  </>
                )
              ) : (
                <HoverCard style={{ padding: "2rem" }}>
                  <p style={{ color: G.textMid, fontSize: "0.95rem", fontStyle: "italic", textAlign: "center", margin: 0, maxWidth: "none" }}>
                    Enter revenue, expenses, and coverage months, then click &ldquo;Calculate Working Capital&rdquo; to see your results.
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
      <section style={{ padding: "3rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 1rem 0", maxWidth: "none" }}>
            Related Programs
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Business Lines of Credit", href: "/financing-options/business-loc-term-loans" },
              { label: "Merchant Cash Advance", href: "/financing-options/merchant-cash-advance" },
              { label: "SBA Financing", href: "/financing-options/sba-financing" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ border: `1px solid ${G.green}`, color: G.green, padding: "0.5rem 1.25rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: G.cream, borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.5rem 0", textAlign: "center", maxWidth: "none" }}>
            Common Questions
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: G.dark, textAlign: "center", marginBottom: "2.5rem" }}>
            Working Capital — Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { q: "What is working capital?", a: "Working capital is the difference between a business's current assets and current liabilities. It measures short-term liquidity — whether the business has enough resources to cover its near-term obligations." },
              { q: "What is a good working capital ratio?", a: "A ratio between 1.5 and 2.0 is generally considered healthy. Below 1.0 means current liabilities exceed current assets, which signals short-term liquidity risk. Above 2.0 may indicate underutilized assets." },
              { q: "What is the quick ratio?", a: "The quick ratio excludes inventory from current assets, measuring only the most liquid assets — cash, receivables, and short-term investments — against current liabilities. It is a stricter liquidity test than the working capital ratio." },
              { q: "How is line of credit sizing calculated?", a: "Line of credit sizing is typically based on a percentage of accounts receivable and inventory. Lenders commonly advance 70–85% against eligible receivables and 25–50% against inventory, depending on industry and asset quality." },
              { q: "Can this calculator help me apply for a line of credit?", a: "This calculator provides planning estimates only. It does not constitute a financing offer or approval. Contact SGF to discuss your actual line of credit options based on your full financial profile." },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "#fff", border: `1px solid ${G.border}`, borderRadius: "4px", padding: "1.5rem 1.75rem" }}>
                <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, marginBottom: "0.5rem" }}>{q}</p>
                <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.7, margin: 0, maxWidth: "none" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
