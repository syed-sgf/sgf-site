import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FinancingOptions from "@/components/FinancingOptions";
import Industries from "@/components/Industries";
import Tools from "@/components/Tools";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Starting Gate Financial | Business Financing, Structured",
  description:
    "SBA loans, commercial real estate financing, and business capital structured the way lenders expect.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />
      <Hero />
      <TrustBar />
      <FinancingOptions />
      <Industries />
      <Tools />
      <Process />
      <Footer />
    </main>
  );
}
