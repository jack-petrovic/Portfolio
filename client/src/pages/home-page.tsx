import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Stats from "@/components/sections/stats";
import ComponentShowcase from "@/components/sections/component-showcase";
import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <ComponentShowcase />
      <Testimonials />
      <Pricing />
    </main>
  );
}