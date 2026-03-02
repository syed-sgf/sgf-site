"use client";

import { useState } from "react";
import Link from "next/link";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

type DSCRStatus = "strong" | "marginal" | "insufficient" | null;

function getDSCRStatus(dscr: number): DSCRStatus {
  if (dscr > 1.25) return "strong";
  if (dscr >= 1.0) return "marginal";
  return "insufficient";
}

const statusConfig = {
  strong: {
    label: "Strong — typically lender-eligible",
    bar: "bg-[var(--sgf-green-500)]",
    text: "text-[var(--sgf-green-500)]",
    badge: "bg-green-50 border-green-200 text-green-800",
  },
  marginal: {
    label: "Marginal — lender approval varies",
    bar: "bg-[var(--sgf-gold-500)]",
    text: "text-[var(--sgf-gold-500)]",
    badge: "bg-yellow-50 border-yellow-200 text-yellow-800",
  },
  insufficient: {
    label: "Insufficient — below lender minimums",
    bar: "bg-red-500",
    text: "text-red-500",
    badge: "bg-red-50 border-red-200 text-red-800",
  },
};

export default function DSCRCalculatorPage() {
  const [noi, setNoi] = useState("");
  const [debtService, setDebtService] = useState("");

  const noiVal = parseFloat(noi);
  const dsVal = parseFloat(debtService);
  const dscr = noiVal > 0 && dsVal > 0 ? noiVal / dsVal : null;
  const status: DSCRStatus = dscr !== null ? getDSCRStatus(dscr) : null;
  const cfg = status ? statusConfig[status] : null;

  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-gold-500)] font-semibold mb-3">
            Planning Tools
          </p>
          <h1 className="font-serif text-4xl font-semibold">
            DSCR Calculator
          </h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Calculate the debt service coverage ratio for a property or business.
            Most lenders require a DSCR of 1.25 or higher.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Inputs */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Property Details</h2>
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Annual Net Operating Income (NOI)
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Gross rental income minus operating expenses (excluding debt service)
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="120000"
                    value={noi}
                    onChange={(e) => setNoi(e.target.value)}
                    className="w-full border border-slate-300 pl-7 pr-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Annual Debt Service
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Total annual principal + interest payments on the proposed loan
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="96000"
                    value={debtService}
                    onChange={(e) => setDebtService(e.target.value)}
                    className="w-full border border-slate-300 pl-7 pr-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                </div>
              </div>

              {/* DSCR guide */}
              <div className="border border-slate-200 rounded-lg p-4 text-sm space-y-2">
                <p className="font-semibold text-slate-700 mb-3">Lender DSCR Benchmarks</p>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[var(--sgf-green-500)] shrink-0" />
                  <span className="text-slate-600">&gt; 1.25 — Strong, typically lender-eligible</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[var(--sgf-gold-500)] shrink-0" />
                  <span className="text-slate-600">1.00–1.25 — Marginal, approval varies by lender</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                  <span className="text-slate-600">&lt; 1.00 — Insufficient, cash flow negative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Results</h2>
            <div className="bg-slate-900 text-white rounded-xl p-8">
              {dscr !== null && cfg ? (
                <>
                  <p className="text-sm uppercase tracking-widest text-slate-400">
                    DSCR Ratio
                  </p>
                  <p className={`mt-2 font-serif text-6xl font-semibold ${cfg.text}`}>
                    {dscr.toFixed(2)}
                  </p>

                  {/* Color bar */}
                  <div className="mt-6 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${cfg.bar}`}
                      style={{ width: `${Math.min((dscr / 2) * 100, 100)}%` }}
                    />
                  </div>

                  <div className={`mt-4 inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm font-semibold ${cfg.badge}`}>
                    {cfg.label}
                  </div>

                  {dscr !== null && (
                    <div className="mt-6 border-t border-slate-700 pt-6 text-sm text-slate-400 space-y-1">
                      <p>NOI: {formatCurrency(noiVal)} / yr</p>
                      <p>Debt Service: {formatCurrency(dsVal)} / yr</p>
                      <p>Surplus: {formatCurrency(noiVal - dsVal)} / yr</p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-slate-500 text-sm">
                  Enter NOI and debt service to see your DSCR.
                </p>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/financing/commercial-real-estate"
                className="block text-center bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-6 py-3 font-semibold transition-colors"
              >
                View Commercial RE Financing
              </Link>
              <Link
                href="/tools"
                className="block text-center text-sm text-slate-500 hover:text-slate-700 underline underline-offset-4"
              >
                ← Back to all tools
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
