import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FinancingOptions from "@/components/FinancingOptions";
import Industries from "@/components/Industries";
import Tools from "@/components/Tools";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Starting Gate Financial | Business Financing, Structured",
  description:
    "SBA loans, commercial real estate financing, and business capital structured the way lenders expect.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FinancingOptions />
      <Industries />
      <Tools />
      <Process />
    </>
  );
}
