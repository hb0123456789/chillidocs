import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Zap, RefreshCw, Users, ArrowRight } from "lucide-react";
import HubSpotFormDialog from "@/components/HubSpotFormDialog";

const WhyChiliDocs = () => {
  const [formOpen, setFormOpen] = useState(false);
  const reasons = [
    {
      icon: Brain,
      text: "Built with AI for real-world messiness—no rigid templates"
    },
    {
      icon: Zap,
      text: "Blazing fast setup—start using right away"
    },
    {
      icon: RefreshCw,
      text: "Seamless integration with your ERP"
    },
    {
      icon: Users,
      text: "Real humans, not chatbots—expert support when you need it"
    }
  ];

  return (
    <>
      <HubSpotFormDialog open={formOpen} onOpenChange={setFormOpen} />
      <section className="py-10 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌶️ Why ChiliDocs?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 hover:shadow-elegant transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-elegant">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-lg font-medium leading-relaxed pt-2">{reason.text}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xl font-bold mb-6">
            🔥 We're not just a tool—we're your order ops co-pilot.
          </p>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" className="group" onClick={() => setFormOpen(true)}>
            Talk to an Expert
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChiliDocs;
