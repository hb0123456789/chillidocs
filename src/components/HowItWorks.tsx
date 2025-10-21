import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Inbox, Brain, Send, ArrowRight } from "lucide-react";
import HubSpotFormDialog from "@/components/HubSpotFormDialog";

const HowItWorks = () => {
  const [formOpen, setFormOpen] = useState(false);

  const steps = [
    {
      icon: Inbox,
      title: "📥 Step 1: Ingest",
      description: "ChiliDocs reads purchase orders from emails or uploads—no templates needed"
    },
    {
      icon: Brain,
      title: "🧠 Step 2: Understand",
      description: "ChiliDocs' adaptive AI agents understands POs like humans and extracts relevant data"
    },
    {
      icon: Send,
      title: "📤 Step 3: Deliver",
      description: "Get a ready-to-import CSV or let ChiliDocs push sales orders directly into your ERP"
    }
  ];

  const erpSystems = ["DMart", "Reliance", "Blinkit", "Zepto", "Swiggy Instamart", "Nature's Basket", "Amazon", "More"];

  return (
    <>
      <HubSpotFormDialog open={formOpen} onOpenChange={setFormOpen} />
      <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⚙️ How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative border-2 hover:shadow-elegant transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mb-10">
          <p className="text-muted-foreground mb-4 font-medium">Works for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {erpSystems.map((erp, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium border hover:border-primary transition-colors"
              >
                {erp}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" className="group" onClick={() => setFormOpen(true)}>
            ✨ See It in Action → Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default HowItWorks;
