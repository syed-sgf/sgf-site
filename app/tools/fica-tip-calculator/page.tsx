"use client";

import { useState, useEffect } from "react";
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

const FICA = 0.0765;

function money(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(isFinite(n) ? n : 0);
}
function moneyWhole(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(isFinite(n) ? n : 0);
}
function num(s: string, def = 0): number {
  const v = parseFloat(s.replace(/[,\s]/g, ""));
  return Number.isFinite(v) ? v : def;
}
function clamp0(x: number): number { return x < 0 ? 0 : x; }

type Results = {
  totalServers: number;
  monthlyIncome: number;
  monthlyTips: number;
  tipsNotCreditable: number;
  creditableTips: number;
  monthlyCreditPerServer: number;
  annualCreditPerServer: number;
  threeYearCreditPerServer: number;
  sumThreeYear: number;
  annualTotal: number;
  effHourly: number;
};

function calcFICA(
  locations: number, serversPer: number, incomeAnnual: number,
  hoursPerMonth: number, tipPct: number, cashWage: number, mwBasis: number
): Results {
  const totalServers = locations * serversPer;
  const monthlyIncome = incomeAnnual / 12;
  const monthlyTips = monthlyIncome * (tipPct / 100);
  const tipMakeUpNeeded = Math.max(0, (mwBasis - cashWage) * hoursPerMonth);
  const tipsNotCreditable = Math.min(Math.max(0, monthlyTips), tipMakeUpNeeded);
  const creditableTips = Math.max(0, monthlyTips - tipsNotCreditable);
  const monthlyCreditPerServer = creditableTips * FICA;
  const annualCreditPerServer = monthlyCreditPerServer * 12;
  const threeYearCreditPerServer = annualCreditPerServer * 3;
  const sumThreeYear = threeYearCreditPerServer * totalServers;
  const annualTotal = annualCreditPerServer * totalServers;
  const effHourly = hoursPerMonth > 0 ? monthlyIncome / hoursPerMonth : 0;
  return { totalServers, monthlyIncome, monthlyTips, tipsNotCreditable, creditableTips, monthlyCreditPerServer, annualCreditPerServer, threeYearCreditPerServer, sumThreeYear, annualTotal, effHourly };
}

// ── Sub-components ─────────────────────────────────────────────────────

function HoverCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", border: `1px solid ${hovered ? "#C9A84C" : G.border}`, transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: hovered ? "0 4px 16px rgba(201,168,76,0.15)" : "none", ...style }}>
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.6rem 0" }}>{eyebrow}</p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: G.dark, marginBottom: "0.75rem", lineHeight: 1.25 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: "1rem", color: G.textMid, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>{subtitle}</p>}
    </div>
  );
}

function Field({ label, value, onChange, suffix, tooltip }: {
  label: string; value: string; onChange: (v: string) => void;
  suffix?: string; tooltip?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showTip, setShowTip] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <label style={{ fontSize: "0.8rem", fontWeight: 700, color: G.textDark, fontFamily: G.sans }}>{label}</label>
        {tooltip && (
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}
              style={{ color: G.gold, cursor: "help", fontSize: "0.85rem", lineHeight: 1 }}>ℹ</span>
            {showTip && (
              <span style={{ position: "absolute", bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)", background: G.dark, color: "#fff", fontSize: "0.72rem", lineHeight: 1.5, padding: "0.5rem 0.75rem", width: 210, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.2)", pointerEvents: "none", whiteSpace: "normal" }}>
                {tooltip}
              </span>
            )}
          </span>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ width: "100%", padding: suffix ? "0.65rem 2.5rem 0.65rem 0.875rem" : "0.65rem 0.875rem", border: `1px solid ${focused ? G.green : G.border}`, fontSize: "0.95rem", fontFamily: G.sans, color: G.textDark, outline: "none", boxSizing: "border-box", background: "#fff", transition: "border-color 0.15s" }} />
        {suffix && <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: G.textMid, fontSize: "0.8rem", pointerEvents: "none" }}>{suffix}</span>}
      </div>
    </div>
  );
}

function StatRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderBottom: `1px solid ${G.border}` }}>
      <span style={{ fontSize: "0.8rem", color: highlight ? G.dark : G.textMid, fontWeight: highlight ? 700 : 400 }}>{label}</span>
      <span style={{ fontSize: highlight ? "1rem" : "0.875rem", fontWeight: 700, color: highlight ? G.green : G.dark }}>{value}</span>
    </div>
  );
}

// ProgramCard — DSCR dark/cream alternating style
function ProgramCard({ label, href, dark = false }: { label: string; href: string; dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ background: dark ? G.dark : G.cream, border: `1px solid ${hovered ? G.gold : G.border}`, padding: "1.5rem", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: hovered ? "0 4px 16px rgba(206,149,98,0.12)" : "none", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
        <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: dark ? "#fff" : G.dark, margin: 0, lineHeight: 1.3 }}>{label}</p>
        <span style={{ fontSize: "0.8rem", color: dark ? G.gold : G.green, fontWeight: 600 }}>Learn More →</span>
      </div>
    </Link>
  );
}

// ── FAQ ────────────────────────────────────────────────────────────────
const faqs = [
  { q: "What is the FICA Tip Credit?", a: "A federal tax credit (IRS §45B) that lets food and beverage employers recover a portion of the Social Security and Medicare taxes they paid on employee-reported tips. It is a dollar-for-dollar credit — meaning every dollar of credit directly reduces your federal tax bill." },
  { q: "Who qualifies?", a: "Businesses where tipping is customary: restaurants, bars, hotels, casinos, catering companies, food trucks, breweries, wineries, and similar hospitality employers. The credit applies to tips on food and beverage service." },
  { q: "How much can I save?", a: "Typically about 7.65% of creditable tips per year. Use the calculator above to estimate your savings based on your actual server count, wages, and tip percentages." },
  { q: "What are 'creditable tips' vs 'non-creditable tips'?", a: "Tips are only creditable above the amount needed to bring an employee up to the federal minimum wage basis for §45B purposes ($5.15/hr). Tips that simply make up the difference to that threshold are excluded from the credit. This is why the calculator includes cash wage and minimum wage basis inputs." },
  { q: "Does this change my employees' pay or tip practices?", a: "No. You do not change wages or tip practices to qualify for the credit. The credit is based on tips employees already reported — you are simply recovering FICA taxes you already paid." },
  { q: "How far back can I claim?", a: "You can amend returns and claim refunds for up to 3 prior tax years. That is why the calculator shows a 3-year total — it represents the potential recovery if you have not claimed this credit before." },
  { q: "How long does it take to receive funds?", a: "Many businesses see refunds or credits processed in approximately 16–20 weeks, depending on IRS processing times. The amended return process can vary." },
  { q: "Can Starting Gate Financial help me claim this credit?", a: "Yes. We coordinate with CPA partners end-to-end — paperwork, calculations, and filings. Schedule a free 15-minute consultation or start your claim directly through our partner portal." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${G.border}` }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
        <span style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: G.gold, fontSize: "1.25rem", flexShrink: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.8, padding: "0 0 1.25rem", margin: 0 }}>{a}</p>}
    </div>
  );
}

function CTABand() {
  return (
    <section style={{ background: G.dark, padding: "4.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 1rem 0" }}>Ready to Claim Your Credit?</p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>Start Your FICA Tip Credit Claim</h2>
      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 460, marginBottom: "2rem" }}>
        We coordinate everything end-to-end with our CPA partners: paperwork, calculations, and filings.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }} className="sgf-cta-band-btns">
        <a href="https://calendar.app.google/7iduB7SxcAdBMS4o9" target="_blank" rel="nofollow noopener"
          style={{ background: G.gold, color: G.dark, padding: "0.875rem 2.5rem", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em", display: "inline-block" }}>
          Free 15-Min Consult →
        </a>
        <a href="https://app.tipcreditpartners.com/register-client/5yfx" target="_blank" rel="nofollow noopener"
          style={{ background: "transparent", color: "#fff", padding: "0.875rem 2rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", fontFamily: G.sans, letterSpacing: "0.05em", border: "1.5px solid rgba(255,255,255,0.3)", display: "inline-block" }}>
          Start My Claim
        </a>
      </div>
    </section>
  );
}

// ══ MAIN PAGE ══════════════════════════════════════════════════════════
export default function FicaTipCalculatorPage() {
  const [locations, setLocations] = useState("1");
  const [serversPer, setServersPer] = useState("35");
  const [incomeAnnual, setIncomeAnnual] = useState("41500");
  const [hoursPerMonth, setHoursPerMonth] = useState("173");
  const [tipPct, setTipPct] = useState("60");
  const [cashWage, setCashWage] = useState("7.25");
  const [mwBasis, setMwBasis] = useState("5.15");
  const [results, setResults] = useState<Results>(() =>
    calcFICA(1, 35, 41500, 173, 60, 7.25, 5.15)
  );

  useEffect(() => {
    const r = calcFICA(
      clamp0(Math.floor(num(locations, 1))),
      clamp0(Math.floor(num(serversPer, 0))),
      clamp0(num(incomeAnnual, 0)),
      clamp0(num(hoursPerMonth, 0)),
      clamp0(num(tipPct, 0)),
      clamp0(num(cashWage, 0)),
      clamp0(num(mwBasis, 5.15))
    );
    setResults(r);
  }, [locations, serversPer, incomeAnnual, hoursPerMonth, tipPct, cashWage, mwBasis]);

  const relatedPrograms = [
    { label: "SBA 7(a) & 504 Loans", href: "/financing-options/sba-loans", dark: true },
    { label: "Business Lines of Credit", href: "/financing-options/business-loc", dark: false },
    { label: "Equipment Financing", href: "/financing-options/equipment-financing", dark: false },
    { label: "Commercial Real Estate", href: "/financing-options/commercial-real-estate", dark: true },
  ];

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: G.gold }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "5rem 2rem 4rem" }}>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: 600, margin: "0 0 0.75rem 0" }}>Financial Tools</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: "0 0 1.25rem 0" }}>
              <Link href="/tools" style={{ color: G.gold, textDecoration: "none" }}>Tools</Link>
              {" → "}FICA Tip Credit Calculator
            </p>
            <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              FICA Tip Credit Calculator (IRS §45B)
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 600, margin: "0 auto 1rem" }}>
              If your business has tipped employees, you could recover a portion of the FICA taxes you already paid on reported tips. Estimate your credit — and your 3-year recovery — in seconds.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
              {["Restaurants & Bars", "Hotels & Casinos", "Catering & Food Trucks", "Breweries & Wineries"].map((b) => (
                <span key={b} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", padding: "0.3rem 0.875rem", fontSize: "0.78rem", fontWeight: 600, borderRadius: 999 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="FICA Tip Credit Calculator"
            title="Estimate Your IRC §45B Credit"
            subtitle="Adjust the inputs below — results update live as you type."
          />

          {/* 3-Year Credit Banner */}
          <div style={{ background: G.dark, padding: "1.5rem 2rem", marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 0.4rem 0" }}>Estimated 3-Year Credit Recovery</p>
            <p style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: G.gold, margin: 0 }}>
              {moneyWhole(results.sumThreeYear)}
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", margin: "0.5rem 0 0" }}>
              Based on {results.totalServers.toLocaleString()} total servers across all locations
            </p>
          </div>

          {/* Input Grid — 3 cols */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "1.5rem" }} className="sgf-fica-grid">

            {/* Business Inputs */}
            <HoverCard style={{ padding: "1.5rem" }}>
              <h3 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, margin: "0 0 1.25rem 0", paddingBottom: "0.75rem", borderBottom: `1px solid ${G.border}` }}>
                Business Inputs
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Field label="Number of Restaurant Locations" value={locations} onChange={setLocations} tooltip="Total number of locations with tipped employees." />
                <Field label="Full-Time Servers (per location)" value={serversPer} onChange={setServersPer} tooltip="Average number of full-time tipped employees per location." />
                <Field label="Median Server Income — Annual ($)" value={incomeAnnual} onChange={setIncomeAnnual} suffix="$" tooltip="Total annual compensation per server including wages and tips." />
                <Field label="Hours Worked per Month" value={hoursPerMonth} onChange={setHoursPerMonth} suffix="hrs" tooltip="Average monthly hours per server. Typically 173 hours for full-time." />
              </div>
            </HoverCard>

            {/* Tips & Wages */}
            <HoverCard style={{ padding: "1.5rem" }}>
              <h3 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, margin: "0 0 1.25rem 0", paddingBottom: "0.75rem", borderBottom: `1px solid ${G.border}` }}>
                Tips & Wages
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Field label="Tips % of Total Income" value={tipPct} onChange={setTipPct} suffix="%" tooltip="Percentage of total server income that comes from tips. Typically 50–70% for full-service restaurants." />
                <Field label="Cash Wage to Server ($/hr)" value={cashWage} onChange={setCashWage} suffix="$/hr" tooltip="The base hourly wage you pay before tips. Minimum varies by state — Texas follows federal $2.13 tip credit minimum." />
                <Field label="Minimum Wage Basis — §45B ($/hr)" value={mwBasis} onChange={setMwBasis} suffix="$/hr" tooltip="The §45B minimum wage threshold is $5.15/hr (frozen since 2007). Tips used to bring wages up to this level are NOT creditable." />
                <div style={{ background: "#fef9c3", border: "1px solid #fde047", padding: "0.875rem", fontSize: "0.78rem", color: "#713f12", lineHeight: 1.6 }}>
                  {num(cashWage) >= 5.15
                    ? "✅ Your cash wage is ≥ $5.15/hr — all tips are creditable. No reduction applies."
                    : "⚠️ Your cash wage is below $5.15/hr — some tips will be excluded from the credit."}
                </div>
              </div>
            </HoverCard>

            {/* Results Breakdown */}
            <HoverCard style={{ padding: "1.5rem" }}>
              <h3 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, margin: "0 0 1.25rem 0", paddingBottom: "0.75rem", borderBottom: `1px solid ${G.border}` }}>
                Per-Server Breakdown
              </h3>
              <StatRow label="Monthly Income" value={money(results.monthlyIncome)} />
              <StatRow label="Monthly Tips" value={money(results.monthlyTips)} />
              <StatRow label="Tips Not Creditable" value={money(results.tipsNotCreditable)} />
              <StatRow label="Creditable Tips" value={money(results.creditableTips)} />
              <StatRow label="Effective Hourly Rate" value={results.effHourly.toFixed(2) + "/hr"} />
              <div style={{ height: 1, background: G.border, margin: "0.75rem 0" }} />
              <StatRow label="Monthly Credit / Server" value={money(results.monthlyCreditPerServer)} highlight />
              <StatRow label="Annual Credit / Server" value={money(results.annualCreditPerServer)} highlight />
              <StatRow label="3-Year Credit / Server" value={money(results.threeYearCreditPerServer)} highlight />
              <div style={{ marginTop: "1rem", background: "#f0fdf4", border: "1px solid #86efac", padding: "0.875rem", fontSize: "0.78rem", color: "#166534", lineHeight: 1.6 }}>
                <strong>Total Annual Credit (all locations):</strong><br />
                <span style={{ fontFamily: G.serif, fontSize: "1.25rem", fontWeight: 700 }}>{moneyWhole(results.annualTotal)}</span>
              </div>
            </HoverCard>
          </div>

          <p style={{ fontSize: "0.78rem", color: G.textMid, fontStyle: "italic", textAlign: "center" }}>
            This is an estimate only. Actual credit requires per-employee calculations. Consult a qualified tax professional before filing under IRC §45B.
          </p>
        </div>
      </section>

      {/* ── Related Programs ─────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Related Programs"
            title="Financing Programs That Use This Calculator"
            subtitle="Run your numbers, then explore the program that fits your deal."
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
          <SectionHeader eyebrow="Frequently Asked Questions" title="FICA Tip Credit — Common Questions" />
          <div>{faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://calendar.app.google/7iduB7SxcAdBMS4o9" target="_blank" rel="nofollow noopener"
              style={{ display: "inline-block", background: G.green, color: "#fff", padding: "0.875rem 2.5rem", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", fontFamily: G.sans }}>
              Free 15-Min Consult →
            </a>
            <a href="https://app.tipcreditpartners.com/register-client/5yfx" target="_blank" rel="nofollow noopener"
              style={{ display: "inline-block", border: `1px solid ${G.green}`, color: G.green, padding: "0.875rem 2.5rem", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", fontFamily: G.sans }}>
              Start My Claim
            </a>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
