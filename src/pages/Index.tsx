import Hero from "@/components/Hero";
import ChaosSection from "@/components/ChaosSection";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import WhyYouNeed from "@/components/WhyYouNeed";
import WhyChillidocs from "@/components/WhyChillidocs";
import CaseStudy from "@/components/CaseStudy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ChaosSection />
      <Testimonials />
      <HowItWorks />
      <WhyYouNeed />
      <WhyChillidocs />
      <CaseStudy />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
