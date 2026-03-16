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
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function fmtDec(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

type AmortRow = { n: number; date: string; payment: number; principal: number; interest: number; balance: number };

type Results = {
  payment: number;
  annualDebtService: number;
  totalPaid: number;
  totalInterest: number;
  schedule: AmortRow[];
};

function calcLoan(loanAmount: number, annualRate: number, loanPeriodYears: number, paymentsPerYear: number) {
  if (!isFinite(loanAmount) || loanAmount <= 0) return null;
  if (!isFinite(annualRate) || annualRate < 0) return null;
  if (!isFinite(loanPeriodYears) || loanPeriodYears <= 0) return null;
  if (!isFinite(paymentsPerYear) || paymentsPerYear <= 0) return null;
  const monthlyRate = (annualRate / 100) / paymentsPerYear;
  const numberOfPayments = loanPeriodYears * paymentsPerYear;
  const payment =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : loanAmount / numberOfPayments;
  if (!isFinite(payment) || payment <= 0) return null;
  return { payment, monthlyRate, numberOfPayments };
}

function buildSchedule(
  loanAmount: number,
  payment: number,
  monthlyRate: number,
  numberOfPayments: number,
  paymentsPerYear: number,
  startDateStr: string
): AmortRow[] {
  const rows: AmortRow[] = [];
  let balance = loanAmount;
  const monthsPerPeriod = 12 / paymentsPerYear;
  const baseDate = startDateStr
    ? (() => { const [y, m, d] = startDateStr.split("-").map(Number); return new Date(y, m - 1, d); })()
    : new Date();

  for (let n = 1; n <= numberOfPayments; n++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = payment - interestPayment;
    balance = Math.max(0, balance - principalPayment);
    const d = new Date(baseDate);
    d.setMonth(d.getMonth() + Math.round(monthsPerPeriod * n));
    rows.push({
      n,
      date: d.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      payment,
      principal: principalPayment,
      interest: interestPayment,
      balance,
    });
  }
  return rows;
}

// FIX 3: Gold (#C9A84C) border on hover
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
    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
  label, value, onChange, placeholder, tooltip, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; tooltip?: string; type?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showTip, setShowTip] = useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === "date") { onChange(e.target.value); return; }
    onChange(formatComma(e.target.value));
  }
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
        type={type} value={value} onChange={handleChange}
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

// ProgramCard — matches DSCR page style exactly
function RelatedCard({ label, href, dark = false }: { label: string; href: string; dark?: boolean; description?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} onMouseEnter={() => {}} style={{ textDecoration: "none" }}>
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
        <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: dark ? "#fff" : G.dark, margin: 0, maxWidth: "none", lineHeight: 1.3 }}>
          {label}
        </p>
        <span style={{ fontSize: "0.8rem", color: dark ? G.gold : G.green, fontWeight: 600 }}>
          View Program →
        </span>
      </div>
    </Link>
  );
}

const faqs = [
  {
    q: "What does the monthly payment include?",
    a: "The monthly payment is the fixed amount you repay each month on a fully amortizing loan. It includes both principal and interest. SBA and other commercial loans may also carry fees — guarantee fees, origination, and closing costs — which are not reflected in this calculator.",
  },
  {
    q: "What is total principal?",
    a: "Total principal is the original amount you borrowed. Over the life of the loan, your payments chip away at this balance until it reaches zero at the final payment.",
  },
  {
    q: "What is total interest and can I reduce it?",
    a: "Total interest is the cumulative amount paid to the lender over the full loan term. You may reduce it by repaying early — but check your agreement first, as some lenders charge a prepayment penalty that can offset the savings.",
  },
  {
    q: "What is total principal & interest?",
    a: "This is the sum of every payment made over the life of the loan — the amount you borrowed plus all interest charged. It represents the true total cost of the loan before fees.",
  },
  {
    q: "How does the amortization schedule work?",
    a: "The amortization schedule shows how each monthly payment is split between principal and interest. Early payments are mostly interest. Over time, as the balance decreases, more of each payment goes toward principal. Your monthly payment stays the same throughout — only the split changes.",
  },
  {
    q: "Can I use this as an SBA Loan Calculator?",
    a: "Yes. This calculator works for SBA 7(a) and SBA 504 loans. For SBA 7(a) working capital loans enter terms up to 10 years; for real estate loans terms go up to 25 years. Current SBA 7(a) rates are variable and tied to prime — enter your quoted rate to get an accurate estimate.",
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
        <span style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, lineHeight: 1.4 }}>
          {q}
        </span>
        <span style={{ color: G.gold, fontSize: "1.25rem", flexShrink: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.8, padding: "0 0 1.25rem", margin: 0, maxWidth: "none" }}>
          {a}
        </p>
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
        <Link href="/financing-options" style={{ background: "transparent", color: "#fff", padding: "0.875rem 2rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em", border: "1.5px solid rgba(255,255,255,0.3)", display: "inline-block" }}>
          View Financing Programs
        </Link>
      </div>
    </section>
  );
}

export default function BusinessLoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [paymentsPerYear, setPaymentsPerYear] = useState("");
  const [startDate, setStartDate] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [showAmortization, setShowAmortization] = useState(false);

  function handleCalculate() {
    const amount = parseFloat(loanAmount.replace(/,/g, ""));
    const rate = parseFloat(annualRate.replace(/,/g, ""));
    const period = parseFloat(loanPeriod.replace(/,/g, ""));
    const ppy = parseFloat(paymentsPerYear.replace(/,/g, ""));
    const calc = calcLoan(amount, rate, period, ppy);
    if (!calc) return;
    const annualDebtService = calc.payment * ppy;
    const totalPaid = calc.payment * calc.numberOfPayments;
    const totalInterest = totalPaid - amount;
    const schedule = buildSchedule(amount, calc.payment, calc.monthlyRate, calc.numberOfPayments, ppy, startDate);
    setResults({ payment: calc.payment, annualDebtService, totalPaid, totalInterest, schedule });
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tools & Calculators", path: "/tools" },
    { name: "Business Loan Calculator", path: "/tools/business-loan-calculator" },
  ]);
  const faqLd = faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Hero — FIX 1: Tools → Business Loan Calculator ───────── */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: G.gold }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "5rem 2rem 4rem" }}>
          <div style={{ maxWidth: 680 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.75rem 0", maxWidth: "none" }}>
              Financial Tools
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: "0 0 1.25rem 0", maxWidth: "none" }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Tools</Link>
              {" → "}Business Loan Calculator
            </p>
            <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Business Loan Calculator
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 580, margin: "0 auto 1rem" }}>
              Estimate your monthly payment, total interest, and full amortization schedule for any business or SBA loan.
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", margin: "0 auto", maxWidth: 520 }}>
              Also works as an <strong style={{ color: G.gold, fontWeight: 600 }}>SBA Loan Calculator</strong> — plug in your SBA 7(a) or 504 loan details to estimate payments before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator Section ────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Loan Calculator"
            title="Calculate Your Loan Payment"
            subtitle="Enter your loan details below. Results are estimates only — not a financing commitment."
          />
          <div className="sgf-calc-layout">
            <HoverCard style={{ padding: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <CalcInput label="Loan Amount ($)" value={loanAmount} onChange={setLoanAmount} placeholder="250,000" tooltip="The total amount you want to borrow. Enter principal only, not including fees." />
                <CalcInput label="Annual Interest Rate (%)" value={annualRate} onChange={setAnnualRate} placeholder="7.5" tooltip="The nominal annual interest rate. Do not enter as a decimal — enter 7.5 for 7.5%." />
                <CalcInput label="Loan Period (Years)" value={loanPeriod} onChange={setLoanPeriod} placeholder="10" tooltip="The total repayment term in years. SBA 7(a) loans go up to 10 years for working capital, 25 years for real estate." />
                <CalcInput label="Payments per Year" value={paymentsPerYear} onChange={setPaymentsPerYear} placeholder="e.g. 12" tooltip="How many payments per year. Typically 12 for monthly. Enter 12 unless your lender specifies otherwise." />
                <CalcInput label="Loan Start Date" value={startDate} onChange={setStartDate} type="date" tooltip="The date your loan begins. Used to generate dates in the amortization schedule." />
                <CalcButton label="Calculate Loan" onClick={handleCalculate} />
              </div>
            </HoverCard>

            <div>
              {results ? (
                <HoverCard style={{ padding: "2rem" }}>
                  <h3 style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: 700, color: G.dark, marginBottom: "1.25rem" }}>Loan Summary</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                    <ResultCard label="Monthly Payment" value={fmt(results.payment)} />
                    <ResultCard label="Annual Debt Service" value={fmt(results.annualDebtService)} />
                    <ResultCard label="Total Interest Paid" value={fmt(results.totalInterest)} />
                    <ResultCard label="Total Amount Paid" value={fmt(results.totalPaid)} />
                  </div>
                  <button onClick={() => setShowAmortization(!showAmortization)} style={{ background: "none", border: `1px solid ${G.border}`, color: G.textDark, padding: "0.6rem 1.25rem", cursor: "pointer", fontSize: "0.875rem", fontFamily: G.sans, marginBottom: "1rem", width: "100%" }}>
                    {showAmortization ? "Hide Amortization Schedule ▲" : "Show Amortization Schedule ▼"}
                  </button>
                  {showAmortization && (
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
                        <thead>
                          <tr style={{ background: G.dark }}>
                            {["#", "Date", "Payment", "Principal", "Interest", "Balance"].map((h) => (
                              <th key={h} style={{ padding: "0.6rem 0.75rem", textAlign: "right", fontWeight: 600, fontFamily: G.sans, whiteSpace: "nowrap", color: "#fff" }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {results.schedule.map((row, i) => (
                            <tr key={row.n} style={{ background: i % 2 === 0 ? "#fff" : G.cream, borderBottom: `1px solid ${G.border}` }}>
                              <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", color: G.textMid }}>{row.n}</td>
                              <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", color: G.textMid, whiteSpace: "nowrap" }}>{row.date}</td>
                              <td style={{ padding: "0.5rem 0.75rem", textAlign: "right" }}>{fmtDec(row.payment)}</td>
                              <td style={{ padding: "0.5rem 0.75rem", textAlign: "right" }}>{fmtDec(row.principal)}</td>
                              <td style={{ padding: "0.5rem 0.75rem", textAlign: "right" }}>{fmtDec(row.interest)}</td>
                              <td style={{ padding: "0.5rem 0.75rem", textAlign: "right" }}>{fmtDec(row.balance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <p style={{ fontSize: "0.8rem", color: G.textMid, fontStyle: "italic", marginTop: "1.25rem", maxWidth: "none" }}>
                    This calculator provides estimated loan payments only. Final loan terms, rates, and fees are determined by the lender.
                  </p>
                </HoverCard>
              ) : (
                <HoverCard style={{ padding: "2rem" }}>
                  <p style={{ color: G.textMid, fontSize: "0.95rem", fontStyle: "italic", textAlign: "center", margin: 0, maxWidth: "none" }}>
                    Enter loan details and click &ldquo;Calculate Loan&rdquo; to see your results.
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

      {/* ── Related Programs — FIX 2+3+4+6: centered, gold hover, 4 cards, mobile ── */}
      <section style={{ padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.5rem 0" }}>
            Related Programs
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 1.875rem)", fontWeight: 700, color: G.dark, marginBottom: "0.75rem", lineHeight: 1.25 }}>
            Financing Programs That Use This Calculator
          </h2>
          <p style={{ fontSize: "0.95rem", color: G.textMid, lineHeight: 1.8, maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Run your numbers, then explore the program that fits your deal.
          </p>
          <div className="sgf-tools-grid">
            {[
              { label: "SBA Financing", href: "/financing-options/sba-financing", dark: true },
              { label: "Business LOC & Term Loans", href: "/financing-options/business-loc-term-loans", dark: false },
              { label: "Commercial Real Estate Financing", href: "/financing-options/commercial-real-estate", dark: false },
              { label: "Equipment Financing", href: "/financing-options/equipment-financing", dark: true },
            ].map(({ label, href, dark }) => (
              <RelatedCard key={href} label={label} href={href} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Business Loan Calculator — Common Questions"
          />
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
