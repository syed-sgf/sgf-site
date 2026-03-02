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

function calcAmortization(principal: number, annualRate: number, months: number) {
  if (principal <= 0 || months <= 0 || annualRate < 0) return null;
  const r = annualRate / 100 / 12;
  const monthly =
    r === 0
      ? principal / months
      : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  const totalCost = monthly * months;
  const totalInterest = totalCost - principal;
  return { monthly, totalInterest, totalCost };
}

export default function BusinessLoanCalculatorPage() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");

  const result = calcAmortization(
    parseFloat(principal),
    parseFloat(rate),
    parseInt(months, 10)
  );

  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-gold-500)] font-semibold mb-3">
            Planning Tools
          </p>
          <h1 className="font-serif text-4xl font-semibold">
            Business Loan Calculator
          </h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Calculate your monthly payment, total interest, and total cost of
            capital using standard loan amortization.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Inputs */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Loan Details</h2>
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="250000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full border border-slate-300 pl-7 pr-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Annual Interest Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="7.50"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full border border-slate-300 px-4 py-3 pr-8 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Loan Term
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    placeholder="60"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="w-full border border-slate-300 px-4 py-3 pr-20 text-slate-900 focus:outline-none focus:border-[var(--sgf-green-500)] transition-colors"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">months</span>
                </div>
              </div>

            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-serif text-xl font-semibold mb-8">Results</h2>
            <div className="bg-slate-900 text-white rounded-xl p-8 space-y-8">
              {result ? (
                <>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-400">
                      Monthly Payment
                    </p>
                    <p className="mt-2 font-serif text-4xl font-semibold text-[var(--sgf-gold-500)]">
                      {formatCurrency(result.monthly)}
                    </p>
                  </div>
                  <div className="border-t border-slate-700 pt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        Total Interest
                      </p>
                      <p className="mt-2 font-serif text-2xl font-semibold">
                        {formatCurrency(result.totalInterest)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        Total Cost
                      </p>
                      <p className="mt-2 font-serif text-2xl font-semibold">
                        {formatCurrency(result.totalCost)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-slate-500 text-sm">
                  Enter your loan details to see results.
                </p>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/apply"
                className="block text-center bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-6 py-3 font-semibold transition-colors"
              >
                Start Pre-Qualification
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
