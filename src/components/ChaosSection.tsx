import messyOrder from "@/assets/messy-order.jpg";

const ChaosSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧾 See the Chaos We Tame
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[500px]">
          {/* Background semi-transparent images */}
          <div className="absolute left-0 top-10 w-80 h-96 opacity-30 transform -rotate-6 animate-float" style={{ animationDelay: "0s" }}>
            <div className="w-full h-full bg-card rounded-lg shadow-xl p-6 border-2 border-border">
              <div className="space-y-3">
                <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
                <div className="h-4 bg-muted-foreground/20 rounded w-1/2"></div>
                <div className="h-32 bg-muted-foreground/10 rounded mt-4"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute right-0 top-20 w-80 h-96 opacity-30 transform rotate-6 animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-full h-full bg-card rounded-lg shadow-xl p-6 border-2 border-border">
              <div className="space-y-3">
                <div className="h-4 bg-accent/20 rounded w-2/3"></div>
                <div className="h-4 bg-accent/20 rounded w-3/4"></div>
                <div className="h-32 bg-accent/10 rounded mt-4"></div>
              </div>
            </div>
          </div>
          
          {/* Main centered image */}
          <div className="relative z-10 w-full max-w-2xl transform hover:scale-105 transition-transform duration-500 animate-scale-in">
            <img 
              src={messyOrder} 
              alt="Messy purchase order document with annotations" 
              className="w-full h-auto rounded-xl shadow-elegant border-4 border-white"
            />
          </div>
        </div>
        
        <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
          From cluttered inboxes to clean, structured data—Chillidocs has it covered.
        </p>
      </div>
    </section>
  );
};

export default ChaosSection;
