"use client";
const industries = [
  { name: 'Construction & Contractors', desc: 'Project-driven capital for builders, GCs, and specialty trades', href: '/industries/construction' },
  { name: 'Healthcare & Medical', desc: 'Practice acquisition, expansion, and equipment upgrades', href: '/industries/healthcare' },
  { name: 'Restaurants & Food Service', desc: 'Cash flow-aware financing for operators', href: '/industries/restaurants' },
  { name: 'Real Estate Investors', desc: 'Portfolio growth, DSCR, and bridge capital', href: '/industries/real-estate-investors' },
  { name: 'Oil & Gas Services', desc: 'Capital for equipment, expansion, and project execution', href: '/industries/oil-and-gas' },
  { name: 'Trucking & Transportation', desc: 'Fleet financing and working capital for operators', href: '/industries/trucking-transportation' },
  { name: 'Professional Services', desc: 'Growth capital for established service businesses', href: '/industries/professional-services' },
]
export default function Industries() {
  return (
    <section style={{ background: '#082B09', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CE9562', fontWeight: '600', marginBottom: '1rem', fontFamily: 'var(--font-source-sans)', textAlign: 'center', width: '100%', display: 'block' }}>02 — Industry Expertise</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '700', color: 'white', marginBottom: '1rem', lineHeight: '1.2' }}>
            We Understand How Your<br />Industry Operates
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '460px', margin: '0 auto', lineHeight: '1.7', fontFamily: 'var(--font-source-sans)' }}>
            And what lenders need to see. Industry fluency is not optional in commercial financing.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
          {industries.map((ind, index) => (
            <a key={ind.href} href={ind.href} style={{ display: 'block', padding: '1.75rem 2rem', background: '#082B09', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.2s, background 0.2s', gridColumn: index === 6 ? '2 / 3' : 'auto' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderBottomColor = '#CE9562'
                e.currentTarget.style.background = '#0D3D0F'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderBottomColor = 'transparent'
                e.currentTarget.style.background = '#082B09'
              }}
            >
              <div style={{ width: '24px', height: '2px', background: '#CE9562', marginBottom: '1rem' }} />
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: '600', color: 'white', marginBottom: '0.4rem' }}>{ind.name}</p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-source-sans)', lineHeight: '1.5' }}>{ind.desc}</p>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/industries" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', borderBottom: '1px solid #CE9562', paddingBottom: '2px', fontFamily: 'var(--font-source-sans)' }}>
            Explore all industries →
          </a>
        </div>
      </div>
    </section>
  )
}