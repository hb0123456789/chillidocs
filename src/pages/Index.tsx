import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import WhyYouNeed from "@/components/WhyYouNeed";
import WhyChiliDocs from "@/components/WhyChillidocs";

import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Testimonials />
      <HowItWorks />
      <WhyYouNeed />
      <WhyChiliDocs />
      
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
