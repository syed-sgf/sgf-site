"use client";

import { useState } from "react";
import Link from "next/link";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(n);
}

/**
 * IRC § 45B FICA Tip Credit
 *
 * Employers can claim a credit equal to the employer share of FICA taxes
 * paid on tips that exceed the federal minimum wage amount.
 *
 * Credit = (Total tips - Minimum wage equivalent tips) × Employer FICA rate
 * where Minimum wage equivalent = Federal min wage × hours worked.
 *
 * Simplified here: Credit = Total tips × Employer FICA rate
 * (full calculation requires per-employee hours; this estimates aggregate credit)
 */
function calcFicaCredit(totalTips: number, ficaRate: number) {
  return totalTips * (ficaRate / 100);
}

export default function FicaTipCalculatorPage() {
  const [totalTips, setTotalTips] = useState("");
  const [ficaRate, setFicaRate] = useState("7.65");

  const tipsVal = parseFloat(totalTips);
  const rateVal = parseFloat(ficaRate);

  const hasResult = tipsVal > 0 && rateVal > 0;
  const credit = hasResult ? calcFicaCredit(tipsVal, rateVal) : null;

  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-gold-500)] font-semibold mb-3">
            Planning Tools
          </p>
          <h1 className="font-serif text-4xl font-semibold">
            FICA Tip Credit Calculator
          </h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Estimate the IRC § 45B employer tax credit available on FICA taxes
            paid on tipped employee wages. Commonly used by restaurants,
            hospitality operators, and food &amp; beverage businesses.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Inputs */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Credit Inputs</h2>
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Total Tips Reported (Annual)
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Aggregate tips received by tipped employees during the tax year
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="250000"
                    value={totalTips}
                    onChange={(e) => setTotalTips(e.target.value)}
                    className="w-full border border-slate-300 pl-7 pr-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Employer FICA Rate
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Default 7.65% = Social Security (6.2%) + Medicare (1.45%)
                </p>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="20"
                    step="0.01"
                    value={ficaRate}
                    onChange={(e) => setFicaRate(e.target.value)}
                    className="w-full border border-slate-300 px-4 py-3 pr-8 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                </div>
              </div>

              {/* Info box */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800">About IRC § 45B</p>
                <p>
                  The FICA Tip Credit allows employers to claim a dollar-for-dollar
                  tax credit equal to the employer FICA taxes paid on tips that
                  bring an employee&apos;s wages above the federal minimum wage.
                </p>
                <p>
                  This estimate assumes all reported tips are creditable.
                  Consult a tax advisor for your exact credit based on per-employee
                  hours and minimum wage thresholds.
                </p>
              </div>

            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Estimated Credit</h2>
            <div className="bg-slate-900 text-white rounded-xl p-8">
              {credit !== null ? (
                <>
                  <p className="text-sm uppercase tracking-widest text-slate-400">
                    Estimated FICA Tip Credit
                  </p>
                  <p className="mt-2 font-serif text-5xl font-semibold text-[var(--sgf-gold-500)]">
                    {formatCurrency(credit)}
                  </p>

                  <div className="mt-6 border-t border-slate-700 pt-6 space-y-3 text-sm text-slate-400">
                    <div className="flex justify-between">
                      <span>Total Tips</span>
                      <span className="text-white font-semibold">{formatCurrency(tipsVal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employer FICA Rate</span>
                      <span className="text-white font-semibold">{rateVal.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-3">
                      <span>Estimated Credit</span>
                      <span className="text-[var(--sgf-gold-500)] font-semibold">{formatCurrency(credit)}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    This is an estimate. Work with a qualified tax professional
                    to calculate your exact credit under IRC § 45B.
                  </p>
                </>
              ) : (
                <p className="text-slate-500 text-sm">
                  Enter your total tips to estimate the FICA tip credit.
                </p>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/financing/franchise-financing"
                className="block text-center bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-6 py-3 font-semibold transition-colors"
              >
                Explore Franchise Financing
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
