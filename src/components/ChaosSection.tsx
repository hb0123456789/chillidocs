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
        
        <div className="relative max-w-4xl mx-auto">
          {/* Laptop mockup */}
          <div className="bg-gradient-to-b from-muted-foreground/80 to-muted-foreground rounded-t-2xl p-2 pb-0">
            {/* Laptop screen bezel */}
            <div className="bg-muted-foreground/20 rounded-t-xl p-1">
              {/* Browser/PDF viewer chrome */}
              <div className="bg-background rounded-t-lg overflow-hidden shadow-elegant">
                {/* Browser toolbar */}
                <div className="bg-muted border-b border-border px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="flex-1 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground">
                    📄 purchase-order-2024-3847.pdf
                  </div>
                </div>
                
                {/* PDF content area */}
                <div className="bg-muted/30 p-6 aspect-[16/10]">
                  <img 
                    src={messyOrder} 
                    alt="Purchase order document displayed on desktop screen" 
                    className="w-full h-full object-contain rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div className="bg-gradient-to-b from-muted-foreground/80 to-muted-foreground/60 h-3 rounded-b-2xl"></div>
          <div className="bg-muted-foreground/60 h-1.5 rounded-b-3xl mx-8"></div>
        </div>
        
        <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
          From cluttered inboxes to clean, structured data—Chillidocs has it covered.
        </p>
      </div>
    </section>
  );
};

export default ChaosSection;
