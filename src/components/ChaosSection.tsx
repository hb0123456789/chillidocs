import deskOrder from "@/assets/desk-purchase-order.png";
import laptopOrder from "@/assets/laptop-purchase-order.png";

const ChaosSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧾 See the Chaos We Tame
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Physical document chaos */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-4 shadow-elegant border border-border/50">
              <img 
                src={deskOrder} 
                alt="Messy purchase order document on desk with sticky notes and papers" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-3 text-center">Paper chaos: Manual, error-prone</p>
            </div>
          </div>

          {/* Digital document */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-4 shadow-elegant border border-border/50">
              <img 
                src={laptopOrder} 
                alt="Purchase order form displayed on laptop computer screen" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-3 text-center">Digital orders: Still needs manual entry</p>
            </div>
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
