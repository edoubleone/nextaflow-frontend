"use client";
import Hero from "./components/ui/hero";
import ProblemSection from "./components/ui/problemSection";
import Features from "./components/ui/features";
import Setup from "./components/ui/setUp";
import Testimonial from "./components/ui/testimonial";
import FAQ from "./components/ui/faq";
import CTA from "./components/ui/cta";
import Footer from "./components/ui/footer";


export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Features />
      <Setup />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
