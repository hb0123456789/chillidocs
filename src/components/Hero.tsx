import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import chilidocsLogo from "@/assets/chilidocs-logo.png";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
          <img src={chilidocsLogo} alt="ChiliDocs Logo" className="h-8 w-auto" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
          Spice Up Your <br className="hidden md:block" />
          <span className="text-primary-foreground">Order Process</span>
        </h1>
        
        <ul className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-up font-medium space-y-2 list-none">
          <li className="flex items-center justify-center gap-2">
            <span className="text-primary-foreground">•</span> Automate purchase orders
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-primary-foreground">•</span> Eliminate manual entry
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="text-primary-foreground">•</span> Never miss an order again
          </li>
        </ul>
        
        <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">💥 Say goodbye to spreadsheets, human errors, and missed revenue. ChiliDocs captures, processes, and delivers structured order data through AI agents.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="xl" variant="secondary" className="group">
            Get a Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
            Talk to Sales
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;