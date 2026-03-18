"use client";

// TODO: Replace REPLACE_EQUIPMENT_FINANCE_FORM_ID with the real GHL form ID

import { useEffect, useState } from "react";
import Link from "next/link";

const G = {
  dark:     "#082B09",
  primary:  "#118241",
  gold:     "#CE9562",
  cream:    "#F8F6F1",
  border:   "#E2DDD6",
  textDark: "#0F172A",
  textMid:  "#475569",
  serif:    "var(--font-playfair)",
  sans:     "var(--font-source-sans)",
};

const FORM_ID = "REPLACE_EQUIPMENT_FINANCE_FORM_ID";

export default function EquipmentFinancePage() {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setPageUrl(window.location.href), 0);
    return () => clearTimeout(id);
  }, []);

  const iframeId = `inline-${FORM_ID}`;

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark }}>

      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", textAlign: "center",
        position: "relative", overflow: "hidden", background: G.dark }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)` }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)` }} />
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
            color: G.gold, fontWeight: 600, marginBottom: "1.25rem" }}>
            Equipment Financing Application
          </p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Apply for Equipment Financing
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.72)",
            lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
            Complete the form below and an SGF team member will review your information
            and follow up within one business day.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: G.cream, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", background: "#fff",
          border: `1px solid rgba(8,43,9,0.12)`, borderRadius: 8, padding: "3rem 2rem" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: G.gold, fontWeight: 600, marginBottom: "0.5rem", textAlign: "center" }}>
            Application
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
            fontWeight: 700, color: G.dark, marginBottom: "0.75rem", textAlign: "center" }}>
            Tell Us About Your Equipment Need
          </h2>
          <p style={{ fontSize: "0.9rem", color: G.textMid, maxWidth: 480, margin: "0 auto 2rem",
            lineHeight: 1.7, textAlign: "center" }}>
            No commitment required. No upfront fees. A starting point for a real conversation.
          </p>
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}${pageUrl ? `?url=${encodeURIComponent(pageUrl)}` : ""}`}
            style={{ width: "100%", minHeight: "600px", border: "none", borderRadius: 8 }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="SGF Equipment Finance Application"
            data-height="600"
            data-layout-iframe-id={iframeId}
            data-form-id={FORM_ID}
            title="SGF Equipment Finance Application"
          />
          <script src="https://link.msgsndr.com/js/form_embed.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function sendPageUrl() {
                    var iframe = document.getElementById('${iframeId}');
                    if (iframe && iframe.contentWindow) {
                      iframe.contentWindow.postMessage(
                        { type: 'SET_FIELD', field: 'pageUrl', value: window.location.href },
                        '*'
                      );
                    }
                  }
                  var iframe = document.getElementById('${iframeId}');
                  if (iframe) { iframe.addEventListener('load', sendPageUrl); }
                  window.addEventListener('message', function(e) {
                    if (e.data && e.data.type === 'FORM_LOADED') { sendPageUrl(); }
                  });
                })();
              `,
            }}
          />
        </div>
      </section>

      {/* What happens next */}
      <section style={{ background: "#fff", padding: "4rem 2rem", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: G.gold, fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>
            What Happens Next
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
            fontWeight: 700, color: G.dark, marginBottom: "2.5rem", textAlign: "center" }}>
            A Clear Process From Here
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}
            className="sgf-apply-next-grid">
            {[
              { step: "01", title: "Review",
                body: "We review your submission within one business day and assess fit based on the equipment type, cost, and your business profile." },
              { step: "02", title: "Conversation",
                body: "If there is a potential match, a member of our team will reach out to discuss your equipment financing needs in more detail." },
              { step: "03", title: "Structure",
                body: "If we move forward, we will identify the right lender, help prepare documentation, and guide you through to funding." },
            ].map(({ step, title, body }) => (
              <div key={step} style={{ padding: "2rem", border: `1px solid ${G.border}`,
                borderTop: `3px solid ${G.primary}`, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span style={{ fontFamily: G.serif, fontSize: "1.75rem", fontWeight: 700,
                  color: G.gold, lineHeight: 1 }}>{step}</span>
                <h3 style={{ fontFamily: G.serif, fontSize: "1.05rem", fontWeight: 700,
                  color: G.dark, margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", color: G.textMid, lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.75,
            textAlign: "center", maxWidth: 560, margin: "2.5rem auto 0" }}>
            Starting Gate Financial arranges commercial financing on behalf of business owners.
            All transactions are subject to lender approval. Submission of this form does not
            constitute an application for credit or a commitment to lend.
          </p>
        </div>
      </section>

      {/* Soft routing CTA */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem",
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>
          Not sure yet?
        </p>
        <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
          fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
          Learn More About Equipment Financing
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem",
          maxWidth: 460, marginBottom: "2rem", lineHeight: 1.75 }}>
          Review program details, eligible equipment types, and typical deal structures before you apply.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/financing-options/equipment-financing" style={{ background: G.gold, color: G.dark,
            padding: "0.75rem 2rem", fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none", letterSpacing: "0.05em" }}>
            Equipment Financing →
          </Link>
          <Link href="/contact" style={{ background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)", padding: "0.75rem 2rem",
            fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
