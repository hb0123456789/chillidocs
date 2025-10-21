import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";
import HubSpotFormDialog from "@/components/HubSpotFormDialog";

const Testimonials = () => {
  const [formOpen, setFormOpen] = useState(false);
  const testimonials = [
    {
      quote: "We reduced order entry time by 90%—and eliminated costly errors.",
      author: "Vrushabh Kakaria",
      title: "Ops Director, Shrushti Natural"
    },
    {
      quote: "ChiliDocs integrated directly into our Tally. Zero downtime. 100% satisfaction.",
      author: "Kuparpal",
      title: "Proprietor, M K Traders"
    }
  ];

  return (
    <>
      <HubSpotFormDialog open={formOpen} onOpenChange={setFormOpen} />
      <section className="py-14 bg-background">
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
        
        <div className="text-center">
          <Button variant="default" size="lg" className="group" onClick={() => setFormOpen(true)}>
            🎯 Join the growing list of smart brands
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
