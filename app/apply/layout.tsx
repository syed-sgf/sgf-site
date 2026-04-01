import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Get Pre-Qualified",
  description:
    "Start your financing review with Starting Gate Financial. Complete a short pre-qualification form and our team will follow up within one business day.",
  path: "/apply",
});

export default function ApplyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
