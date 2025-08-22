import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import Pricing from "@/components/PricingSection";
import Reviews from "@/components/ReviewsSection";
import FAQ from "@/components/FaqSection";
import CTA from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
