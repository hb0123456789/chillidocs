import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HubSpotFormDialog from "@/components/HubSpotFormDialog";

const FinalCTA = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <HubSpotFormDialog open={formOpen} onOpenChange={setFormOpen} />
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
            🚀 Ready to Automate Your Orders <br className="hidden md:block" />
            with Zero Hassle?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="xl" variant="secondary" className="group shadow-glow" onClick={() => setFormOpen(true)}>
              Book Your Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" onClick={() => setFormOpen(true)}>
              Talk to an Automation Expert
            </Button>
          </div>
          
          <p className="text-white/80 text-lg">
            You're just one step away from turning chaos into clarity.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default FinalCTA;
