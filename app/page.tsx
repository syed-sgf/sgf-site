import Hero from "@/components/Hero";
import FinancingOptions from "@/components/FinancingOptions";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import CTABand from "@/components/CTABand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FinancingOptions />
      <Industries />
      <Process />
      <Tools />
      <CTABand />
    </main>
  );
}
