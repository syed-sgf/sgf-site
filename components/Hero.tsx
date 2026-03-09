"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    heading: "Business Financing,",
    sub: "Structured the Way Lenders Expect",
    body: "We help business owners navigate SBA loans, commercial real estate, and growth capital with discipline, clarity, and lender-aligned structure.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    heading: "SBA Loans Done Right,",
    sub: "Aligned with Lender Standards",
    body: "From SBA 7(a) to 504 programs, we structure your application the way underwriters expect — maximizing approval outcomes.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    heading: "Commercial Real Estate,",
    sub: "Financed with Precision",
    body: "Acquisition, refinance, construction, and DSCR-based financing for income-producing properties nationwide.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="border-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-12 gap-16 items-center">

        {/* Copy */}
        <div className="md:col-span-7">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] transition-opacity duration-500">
            {slide.heading}
            <br />
            <span className="text-slate-600 font-normal">{slide.sub}</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl transition-opacity duration-500">
            {slide.body}
          </p>

          <div className="mt-10 flex gap-8 items-center">
            <Link
              href="/apply"
              className="bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-7 py-3 font-semibold transition-colors"
            >
              Start Pre-Qualification
            </Link>
            <Link
              href="/financing-options"
              className="font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              Explore Financing Options
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[var(--sgf-green-500)]"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image slot */}
        <div className="md:col-span-5">
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <Image src={slide.image} alt={slide.heading} fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
