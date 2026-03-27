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

    const apiKey = process.env.GHL_PRIVATE_API_KEY;
    if (!apiKey) {
      console.error('GHL_PRIVATE_API_KEY is not set');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    const payload = {
      locationId: '4zICUYwDaFijaZX4Qx6p',
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      phone: phone || '',
      companyName: companyName || '',
      website: website || '',
      source: source || '',
      tags: ['partner-lead'],
      customFields: [
        {
          id: 'partner_type',
          value: partnerType || '',
        },
        {
          id: 'partner_state',
          value: state || '',
        },
      ],
    };

    console.log('Submitting to GHL Contacts API:', JSON.stringify(payload));

    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Version': '2021-07-28',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await ghlRes.text();
    console.log('GHL response status:', ghlRes.status);
    console.log('GHL response body:', responseText);

    if (!ghlRes.ok) {
      return NextResponse.json(
        { success: false, error: `GHL error: ${ghlRes.status} - ${responseText}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
