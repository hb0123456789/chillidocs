import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2, TrendingUp, Users, ArrowRight } from "lucide-react";

const WhyYouNeed = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Save hours per week on data entry"
    },
    {
      icon: CheckCircle2,
      text: "Eliminate manual errors"
    },
    {
      icon: TrendingUp,
      text: "Capture every order—no more missed revenue"
    },
    {
      icon: Users,
      text: "Empower your team to focus on customers, not data entry"
    }
  ];

  return (
    <section className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ❗️Why You Need It
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 hover:shadow-elegant transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-medium leading-relaxed pt-2">{benefit.text}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl font-bold text-primary">
            ⚡ Manual order processing is costing you. Automate before it costs more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyYouNeed;
