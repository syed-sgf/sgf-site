import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Starting Gate Financial",
  description:
    "Starting Gate Financial is a Richardson, TX-based commercial financing firm helping business owners and real estate investors structure and secure SBA loans, equipment financing, CRE, and working capital.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
