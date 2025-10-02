import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We reduced order entry time by 90%—and eliminated costly errors.",
      author: "Samantha K.",
      title: "Ops Director, FoodCo"
    },
    {
      quote: "Chillidocs integrated directly into our ERP. Zero downtime. 100% satisfaction.",
      author: "Liam J.",
      title: "Supply Chain Manager, HealthPlus"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌟 Trusted by Brands Who Don't Miss a Beat
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Client logos placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10 opacity-60">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center border">
              <span className="text-xs text-muted-foreground font-semibold">CLIENT {i}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            🎯 Join the growing list of smart brands
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
