"use client";

import { useState } from "react";

const G = {
  gold: "#CE9562",
  dark: "#082B09",
  textMid: "#475569",
  border: "#E2DDD6",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${G.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "1.25rem 0",
          background: "none", border: "none", cursor: "pointer",
          textAlign: "left", gap: "1rem",
        }}
      >
        <span style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: G.gold, fontSize: "1.25rem", flexShrink: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.8, padding: "0 0 1.25rem", margin: 0, maxWidth: "none", fontFamily: G.sans }}>{a}</p>
      )}
    </div>
  );
}

export default function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div style={{ borderTop: `1px solid ${G.border}` }}>
      {faqs.map((faq) => (
        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
