import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingDown, Target, UserCheck } from "lucide-react";

const CaseStudy = () => {
  const results = [
    {
      icon: TrendingDown,
      metric: "93%",
      description: "reduction in order entry time"
    },
    {
      icon: Target,
      metric: "0",
      description: "missed orders in 6 months"
    },
    {
      icon: UserCheck,
      metric: "1",
      description: "team member reallocated to customer success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📚 Case Study – How FreshFields Scaled with Chillidocs
          </h2>
        </div>
        
        <Card className="max-w-5xl mx-auto border-2 shadow-elegant overflow-hidden">
          <div className="bg-gradient-accent p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">FreshFields</h3>
            <p className="text-white/90">Organic Food Distributor</p>
          </div>
          
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-2">Problem</h4>
                <p className="text-muted-foreground">2-person order team overwhelmed by 100+ daily orders</p>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-2">Solution</h4>
                <p className="text-muted-foreground">Chillidocs automated the process, integrating directly into their ERP</p>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-2">Outcome</h4>
                <p className="text-muted-foreground">More orders processed. Happier team. Happier customers.</p>
              </div>
            </div>
            
            <div className="border-t pt-8 mb-8">
              <h4 className="font-bold text-xl mb-6">Results:</h4>
              <div className="grid md:grid-cols-3 gap-8">
                {results.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-muted rounded-xl">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-semibold mb-6">
                🎉 Outcome: More orders processed. Happier team. Happier customers.
              </p>
              <Button variant="outline" size="lg" className="group">
                Read the Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudy;
