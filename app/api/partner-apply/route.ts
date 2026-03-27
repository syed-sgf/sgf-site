import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      companyName,
      partnerType,
      phone,
      email,
      state,
      website,
      source,
    } = body;

    // Submit to GHL forms endpoint server-side (no CORS)
    const formData = new URLSearchParams();
    formData.append('first_name', firstName || '');
    formData.append('last_name', lastName || '');
    formData.append('company_name', companyName || '');
    formData.append('partner_type', partnerType || '');
    formData.append('phone', phone || '');
    formData.append('email', email || '');
    formData.append('partner_state', state || '');
    formData.append('website', website || '');
    formData.append('source', source || '');
    formData.append('formId', 'CnaPJWXqSamJrlefepg0');
    formData.append('location_id', '4zICUYwDaFijaZX4Qx6p');

    const ghlRes = await fetch('https://backend.leadconnectorhq.com/forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!ghlRes.ok) {
      const errText = await ghlRes.text();
      console.error('GHL submission error:', ghlRes.status, errText);
      return NextResponse.json({ success: false, error: 'GHL submission failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
