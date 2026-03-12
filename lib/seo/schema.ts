import { siteConfig } from "@/lib/config/site";

const BASE_URL = siteConfig.url;

// ─────────────────────────────────────────────────────────────
// LocalBusiness schema — homepage only
// ─────────────────────────────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: BASE_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "SBA Loans",
      "Commercial Real Estate Financing",
      "Business Loans",
      "Equipment Financing",
      "Merchant Cash Advance",
      "Working Capital",
    ],
    priceRange: "$$",
  };
}

// ─────────────────────────────────────────────────────────────
// BreadcrumbList schema — detail pages
// ─────────────────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

// ─────────────────────────────────────────────────────────────
// FAQPage schema — calculator & program pages (where permitted)
// ─────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────
// WebPage schema — general pages
// ─────────────────────────────────────────────────────────────
export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${BASE_URL}${path}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: BASE_URL,
    },
  };
}
