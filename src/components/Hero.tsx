import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

import { ArrowRight } from "lucide-react";
import HubSpotFormDialog from "@/components/HubSpotFormDialog";

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <HubSpotFormDialog open={formOpen} onOpenChange={setFormOpen} />
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
          Spice Up Your <br className="hidden md:block" />
          <span className="text-primary-foreground">Order Process</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up font-medium leading-relaxed">
          Automate purchase orders and never miss an order again — ChiliDocs transforms your POs into structured, error-free data with AI agents.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="xl" variant="secondary" className="group" onClick={() => setFormOpen(true)}>
            Get a Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" onClick={() => setFormOpen(true)}>
            Talk to Sales
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
    </>
  );
};
export default Hero;