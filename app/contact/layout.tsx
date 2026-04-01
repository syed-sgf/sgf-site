import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Starting Gate Financial",
  description:
    "Reach out to Starting Gate Financial in Richardson, TX. Discuss your financing needs with our commercial financing team — SBA loans, CRE, equipment, and working capital.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
