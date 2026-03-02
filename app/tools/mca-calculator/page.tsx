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

function formatPercent(n: number) {
  return `${n.toFixed(1)}%`;
}

export default function MCACalculatorPage() {
  const [advance, setAdvance] = useState("");
  const [factorRate, setFactorRate] = useState("");
  const [dailySales, setDailySales] = useState("");

  const advVal = parseFloat(advance);
  const factorVal = parseFloat(factorRate);
  const dailyVal = parseFloat(dailySales);

  const hasResult = advVal > 0 && factorVal > 0;
  const totalPayback = hasResult ? advVal * factorVal : null;
  const costOfCapital = totalPayback !== null ? totalPayback - advVal : null;
  const repaymentDays =
    totalPayback !== null && dailyVal > 0
      ? Math.ceil(totalPayback / dailyVal)
      : null;
  const costPercent =
    costOfCapital !== null && advVal > 0
      ? (costOfCapital / advVal) * 100
      : null;

  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-gold-500)] font-semibold mb-3">
            Planning Tools
          </p>
          <h1 className="font-serif text-4xl font-semibold">
            MCA Planning Tool
          </h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Model the true cost of a merchant cash advance before you commit.
            Factor rates can obscure the real cost — this tool makes it transparent.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Inputs */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Advance Details</h2>
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Advance Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="100000"
                    value={advance}
                    onChange={(e) => setAdvance(e.target.value)}
                    className="w-full border border-slate-300 pl-7 pr-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Factor Rate
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Typically 1.15–1.55. A rate of 1.35 means you repay $1.35 per $1 advanced.
                </p>
                <input
                  type="number"
                  min="1"
                  max="3"
                  step="0.01"
                  placeholder="1.35"
                  value={factorRate}
                  onChange={(e) => setFactorRate(e.target.value)}
                  className="w-full border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Average Daily Sales Revenue
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Used to estimate repayment timeline (optional).
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="4500"
                    value={dailySales}
                    onChange={(e) => setDailySales(e.target.value)}
                    className="w-full border border-slate-300 pl-7 pr-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">True Cost Breakdown</h2>
            <div className="bg-slate-900 text-white rounded-xl p-8 space-y-7">
              {totalPayback !== null ? (
                <>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-400">
                      Total Payback
                    </p>
                    <p className="mt-2 font-serif text-4xl font-semibold text-[var(--sgf-gold-500)]">
                      {formatCurrency(totalPayback)}
                    </p>
                  </div>

                  <div className="border-t border-slate-700 pt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        Cost of Capital
                      </p>
                      <p className="mt-2 font-serif text-2xl font-semibold">
                        {costOfCapital !== null ? formatCurrency(costOfCapital) : "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        Effective Cost %
                      </p>
                      <p className="mt-2 font-serif text-2xl font-semibold">
                        {costPercent !== null ? formatPercent(costPercent) : "—"}
                      </p>
                    </div>
                  </div>

                  {repaymentDays !== null && (
                    <div className="border-t border-slate-700 pt-6">
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        Est. Repayment Period
                      </p>
                      <p className="mt-2 font-serif text-2xl font-semibold">
                        ~{repaymentDays} days
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Based on daily remittance of ~15% of daily sales
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-slate-500 text-sm">
                  Enter advance amount and factor rate to see your cost breakdown.
                </p>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/financing/merchant-cash-advance"
                className="block text-center bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-6 py-3 font-semibold transition-colors"
              >
                Compare to MCA Alternatives
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
