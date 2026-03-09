import Hero from "@/components/Hero";
import FinancingOptions from "@/components/FinancingOptions";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Tools from "@/components/Tools";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FinancingOptions />
      <Industries />
      <Process />
      <Tools />
    </main>
  );
}
