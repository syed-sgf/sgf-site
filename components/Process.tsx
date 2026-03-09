const reviews = [
  { stars: 5, text: "Syed helped us secure an SBA loan when two other brokers couldn't get it done. He knew exactly what the lender needed and walked us through every step. Closed in under 60 days.", name: "Marcus T.", detail: "Restaurant Owner · Dallas TX" },
  { stars: 5, text: "Very professional and knowledgeable. SGF structured our equipment financing the right way — no surprises at closing. Will use again for our next location.", name: "Linda K.", detail: "Healthcare Practice Owner" },
  { stars: 5, text: "I came to SGF after getting turned down twice. Syed reviewed my financials, told me exactly where I stood, and got us funded. Straight shooter, no runaround.", name: "Carlos R.", detail: "Trucking Company Owner" },
  { stars: 5, text: "SGF handled our commercial real estate financing from start to finish. Syed knows lenders, knows the market, and delivers. Highly recommend.", name: "David M.", detail: "Real Estate Investor · Fort Worth TX" },
]
const steps = [
  { num: '01', title: 'Explore', desc: 'Choose a program or start from your industry. We guide you to the right capital path.' },
  { num: '02', title: 'Qualify', desc: 'Complete a short pre-qualification. No credit pull. No obligation.' },
  { num: '03', title: 'Execute', desc: 'Structured next steps aligned to lenders and underwriting requirements.' },
]
export default function Process() {
  return (
    <section style={{ background: '#F8F6F1', padding: '6rem 0', borderTop: '1px solid #E5E0D8' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CE9562', fontWeight: '600', marginBottom: '1rem', fontFamily: 'var(--font-source-sans)' }}>03 — Client Outcomes</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '700', color: '#0F172A', marginBottom: '1rem', lineHeight: '1.2' }}>
            Real Businesses. Real Closings.
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '420px', margin: '0 auto', lineHeight: '1.7', fontFamily: 'var(--font-source-sans)' }}>
            What business owners say about working with Starting Gate Financial.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '5rem' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #E5E0D8', padding: '1.75rem 2rem', borderRadius: '2px' }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} style={{ color: '#CE9562', fontSize: '14px' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.25rem', fontFamily: 'var(--font-source-sans)' }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid #E5E0D8', paddingTop: '1rem' }}>
                <p style={{ fontWeight: '600', color: '#0F172A', fontSize: '0.88rem', fontFamily: 'var(--font-source-sans)' }}>{r.name}</p>
                <p style={{ fontSize: '0.78rem', color: '#94A3B8', fontFamily: 'var(--font-source-sans)' }}>{r.detail}</p>
                <p style={{ fontSize: '0.72rem', color: '#CE9562', marginTop: '0.25rem', fontFamily: 'var(--font-source-sans)', letterSpacing: '0.05em' }}>★ Google Review</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #E5E0D8', paddingTop: '4rem', marginBottom: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CE9562', fontWeight: '600', marginBottom: '1rem', fontFamily: 'var(--font-source-sans)' }}>How We Work</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: '700', color: '#0F172A', marginBottom: '1rem' }}>A Process Built for Clarity</h2>
          <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '400px', margin: '0 auto', fontFamily: 'var(--font-source-sans)', lineHeight: '1.7' }}>No guesswork. No surprises. Just structured steps toward capital.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
          {steps.map((s) => (
            <div key={s.num} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: '700', color: '#118241', marginBottom: '0.75rem', lineHeight: '1' }}>{s.num}</p>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: '600', color: '#0F172A', marginBottom: '0.5rem' }}>{s.title}</p>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.6', fontFamily: 'var(--font-source-sans)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="/apply" style={{ display: 'inline-block', background: '#118241', color: 'white', padding: '0.9rem 2.25rem', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-source-sans)', borderRadius: '2px' }}>
            Start Pre-Qualification
          </a>
        </div>
      </div>
    </section>
  )
}
