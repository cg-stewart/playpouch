import BackToTop from "@/components/home/back-to-top";
import Cta from "@/components/home/cta";
import FaqSection from "@/components/home/faqs";
import FeaturesSection from "@/components/home/features";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero";
import PricingSection from "@/components/home/pricing";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection/>
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <Cta />
      <Footer />
      <BackToTop />
    </div>
  )
}