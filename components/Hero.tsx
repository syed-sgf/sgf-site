"use client";
import { useState, useEffect } from 'react'

const slides = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ background: '#F8F6F1', borderBottom: '1px solid #E5E0D8' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center',
          minHeight: '88vh', paddingTop: '6rem', paddingBottom: '6rem'
        }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CE9562', fontWeight: '600', marginBottom: '1.5rem', fontFamily: 'var(--font-source-sans)' }}>
              Richardson, Texas · DFW Metroplex
            </p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: '700', color: '#0F172A', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
              Business Financing,<br />
              <span style={{ color: '#082B09' }}>Structured the Way</span><br />
              Lenders Expect.
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '460px', fontFamily: 'var(--font-source-sans)' }}>
              We help business owners navigate SBA loans, commercial real estate, and growth capital with discipline, clarity, and lender-aligned structure.
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="/apply" style={{ display: 'inline-block', background: '#118241', color: 'white', padding: '0.85rem 2rem', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-source-sans)', borderRadius: '2px' }}>
                Start Pre-Qualification
              </a>
              <a href="/financing-options" style={{ display: 'inline-block', color: '#082B09', padding: '0.85rem 0', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none', fontFamily: 'var(--font-source-sans)', borderBottom: '1px solid #CE9562', letterSpacing: '0.02em' }}>
                Explore Financing Options →
              </a>
            </div>
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E5E0D8' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.75rem', fontFamily: 'var(--font-source-sans)' }}>
                Trusted by operators in
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', fontSize: '0.85rem', color: '#475569', fontWeight: '500', fontFamily: 'var(--font-source-sans)' }}>
                {['Construction', 'Healthcare', 'Restaurants', 'Real Estate', 'Transportation'].map((ind, i, arr) => (
                  <span key={ind} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {ind}{i < arr.length - 1 && <span style={{ color: '#CE9562', fontSize: '8px' }}>◆</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', bottom: '1.5rem', left: '1.5rem', border: '1px solid #CE9562', borderRadius: '2px', zIndex: 0 }} />
            <img
              key={current}
              src={slides[current]}
              alt="Starting Gate Financial"
              style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: '2px', position: 'relative', zIndex: 1, display: 'block', animation: 'fadeIn 0.8s ease-in-out' }}
            />
            <div style={{ position: 'absolute', bottom: '-1.5rem', left: '2rem', background: '#082B09', color: 'white', padding: '1rem 1.5rem', zIndex: 2, borderRadius: '2px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#CE9562', marginBottom: '0.25rem', fontFamily: 'var(--font-source-sans)' }}>Programs Available</p>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.4rem', fontWeight: '700', color: 'white' }}>10+ Financing Paths</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}