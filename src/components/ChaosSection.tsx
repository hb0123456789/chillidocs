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
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-elegant border border-border/50">
              <img 
                src={laptopOrder} 
                alt="Purchase order form displayed on laptop computer screen" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
