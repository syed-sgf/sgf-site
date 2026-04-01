import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Starting Gate Financial",
    template: "%s | Starting Gate Financial",
  },
  description:
    "Business financing solutions including SBA loans, commercial real estate, and working capital.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
