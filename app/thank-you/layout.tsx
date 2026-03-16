import type { ReactNode } from "react";

export const metadata = {
  title: "Thank You | Starting Gate Financial",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
