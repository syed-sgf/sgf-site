import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Thank You | Starting Gate Financial",
  description: "Your financing inquiry has been received. A member of the SGF team will be in touch within 1 business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
