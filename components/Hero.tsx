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
    <section className="border-b border-slate-200 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 md:gap-16 items-center">

        {/* Copy */}
        <div className="md:col-span-7">

          {/* Gold rule */}
          <div style={{ width: "36px", height: "2px", backgroundColor: "#CE9562", marginBottom: "1.5rem" }} />

          <h1
            className="font-serif leading-[1.05] tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 700 }}
          >
            {slide.heading}
            <br />
            <span className="font-normal text-slate-500">{slide.sub}</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed" style={{ maxWidth: "520px" }}>
            {slide.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link
              href="/apply"
              className="bg-[#118241] hover:bg-[#082B09] text-white text-sm font-semibold px-7 py-3 transition-colors duration-200"
            >
              Start Pre-Qualification
            </Link>
            <Link
              href="/financing"
              className="text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900 transition-colors"
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
                className="transition-all duration-300"
                style={{
                  height: "3px",
                  width: i === current ? "32px" : "12px",
                  backgroundColor: i === current ? "#118241" : "#CBD5E1",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Image — no rounded corners */}
        <div className="md:col-span-5">
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
