'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const G = {
  dark: '#082B09',
  primary: '#118241',
  gold: '#CE9562',
  cream: '#F8F6F1',
  border: '#E2DDD6',
  textDark: '#0F172A',
  textMid: '#475569',
  serif: 'var(--font-playfair)',
  sans: 'var(--font-source-sans)',
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontSize: '0.95rem',
  fontFamily: G.sans,
  border: `1px solid ${G.border}`,
  borderRadius: '2px',
  background: '#fff',
  color: G.textDark,
  outline: 'none',
  boxSizing: 'border-box' as const,
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: G.textDark,
  marginBottom: '6px',
  fontFamily: G.sans,
};

const fieldWrap = {
  marginBottom: '1.25rem',
};

export default function PartnerApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    partnerType: '',
    phone: '',
    email: '',
    state: '',
    website: '',
    source: '',
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validateStep1 = () => {
    if (!form.firstName.trim()) return 'First name is required.';
    if (!form.lastName.trim()) return 'Last name is required.';
    if (!form.partnerType) return 'Please select a partner type.';
    return '';
  };

  const validateStep2 = () => {
    if (!form.phone.trim()) return 'Phone number is required.';
    if (!form.email.trim()) return 'Email address is required.';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.';
    if (!form.state.trim()) return 'State is required.';
    return '';
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) { setError(err); return; }
    setError('');
    setStep(2);
  };

  const handleSubmit = async () => {
    const err = validateStep2();
    if (err) { setError(err); return; }
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/partner-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          companyName: form.companyName,
          partnerType: form.partnerType,
          phone: form.phone,
          email: form.email,
          state: form.state,
          website: form.website,
          source: form.source,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || 'Submission failed');
      }

      router.push('/thank-you');
    } catch {
      setError('Something went wrong. Please try again or call us at (214) 923-1694.');
      setLoading(false);
    }
  };

  const progressWidth = step === 1 ? '50%' : '100%';

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 0 40px' }}>

      {/* Progress bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.8rem', fontFamily: G.sans, color: G.textMid }}>
            Step {step} of 2
          </span>
          <span style={{ fontSize: '0.8rem', fontFamily: G.sans, color: G.textMid }}>
            {step === 1 ? 'About You' : 'Contact Details'}
          </span>
        </div>
        <div style={{ height: 4, background: G.border, borderRadius: 2 }}>
          <div style={{
            height: '100%',
            width: progressWidth,
            background: G.primary,
            borderRadius: 2,
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          background: '#fff0f0',
          border: '1px solid #fca5a5',
          color: '#991b1b',
          padding: '10px 14px',
          borderRadius: '2px',
          fontSize: '0.875rem',
          fontFamily: G.sans,
          marginBottom: '1.25rem',
        }}>
          {error}
        </div>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3 style={{ fontFamily: G.serif, fontSize: '1.25rem', color: G.dark, marginBottom: '1.5rem', fontWeight: 700 }}>
            Tell us about yourself
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={labelStyle}>First Name *</label>
              <input
                style={inputStyle}
                type="text"
                value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)}
                placeholder="First name"
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name *</label>
              <input
                style={inputStyle}
                type="text"
                value={form.lastName}
                onChange={(e) => update('lastName', e.target.value)}
                placeholder="Last name"
              />
            </div>
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Company / Business Name <span style={{ fontWeight: 400, color: G.textMid }}>(if applicable)</span></label>
            <input
              style={inputStyle}
              type="text"
              value={form.companyName}
              onChange={(e) => update('companyName', e.target.value)}
              placeholder="Company or business name"
            />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Partner Type *</label>
            <select
              style={{ ...inputStyle, cursor: 'pointer' }}
              value={form.partnerType}
              onChange={(e) => update('partnerType', e.target.value)}
            >
              <option value="">Select partner type</option>
              <option value="Independent Contractor (IC) Broker">Independent Contractor (IC) Broker</option>
              <option value="Referral Partner">Referral Partner</option>
              <option value="Professional Referral Partner — CPA, Accountant, Real Estate Agent or Broker">Professional Referral Partner — CPA, Accountant, Real Estate Agent or Broker</option>
            </select>
          </div>

          <button
            onClick={handleNext}
            style={{
              width: '100%',
              padding: '14px',
              background: G.primary,
              color: '#fff',
              fontFamily: G.sans,
              fontWeight: 700,
              fontSize: '0.95rem',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            Next: Contact Details →
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 style={{ fontFamily: G.serif, fontSize: '1.25rem', color: G.dark, marginBottom: '1.5rem', fontWeight: 700 }}>
            How can we reach you?
          </h3>

          <div style={fieldWrap}>
            <label style={labelStyle}>Phone *</label>
            <input
              style={inputStyle}
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="(214) 000-0000"
            />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Email *</label>
            <input
              style={inputStyle}
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>State (Where You Do Business) *</label>
            <input
              style={inputStyle}
              type="text"
              value={form.state}
              onChange={(e) => update('state', e.target.value)}
              placeholder="e.g. TX"
            />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Website <span style={{ fontWeight: 400, color: G.textMid }}>(Optional)</span></label>
            <input
              style={inputStyle}
              type="url"
              value={form.website}
              onChange={(e) => update('website', e.target.value)}
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>How Did You Hear About Us?</label>
            <select
              style={{ ...inputStyle, cursor: 'pointer' }}
              value={form.source}
              onChange={(e) => update('source', e.target.value)}
            >
              <option value="">Select one</option>
              <option value="Google Search">Google Search</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referral / Word of Mouth">Referral / Word of Mouth</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => { setStep(1); setError(''); }}
              style={{
                flex: 1,
                padding: '14px',
                background: 'transparent',
                color: G.textMid,
                fontFamily: G.sans,
                fontWeight: 600,
                fontSize: '0.95rem',
                border: `1px solid ${G.border}`,
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                flex: 2,
                padding: '14px',
                background: loading ? G.textMid : G.gold,
                color: '#fff',
                fontFamily: G.sans,
                fontWeight: 700,
                fontSize: '0.95rem',
                border: 'none',
                borderRadius: '2px',
                cursor: loading ? 'not-allowed' : 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              {loading ? 'Submitting...' : 'Submit My Application'}
            </button>
          </div>
        </div>
      )}

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 480px) {
          .sgf-partner-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
