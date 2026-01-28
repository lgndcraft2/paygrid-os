import { Check, X } from 'lucide-react';

export function Comparison() {
  const comparisonData = [
    { feature: "Real-time tracking", others: false, paygrid: true },
    { feature: "Multi-account sync", others: false, paygrid: true },
    { feature: "AI categorization", others: false, paygrid: true },
    { feature: "Bank-level security", others: true, paygrid: true },
    { feature: "Clean interface", others: false, paygrid: true },
    { feature: "No hidden fees", others: false, paygrid: true },
  ];

  return (
    <section className="py-32 relative">
      <div className="container">
        <div className="text-center mb-16" style={{ opacity: 1, transform: 'none' }}>
          <span className="text-sm text-primary uppercase tracking-[0.2em] mb-4 block">Why PayGrid</span>
          <h2 className="text-display-md font-display mb-4">The difference is<br /><span className="gradient-text">obvious.</span></h2>
        </div>
        <div className="max-w-3xl mx-auto" style={{ opacity: 1, transform: 'none' }}>
          <div className="brutal-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-6 text-muted-foreground text-sm uppercase tracking-wider">Feature</div>
              <div className="p-6 text-center border-x border-border text-muted-foreground text-sm uppercase tracking-wider">Others</div>
              <div className="p-6 text-center bg-primary/5 text-primary text-sm uppercase tracking-wider font-semibold">PayGrid</div>
            </div>
            
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-border last:border-b-0" style={{ opacity: 1, transform: 'none' }}>
                <div className="p-5 font-medium">{row.feature}</div>
                <div className="p-5 flex justify-center items-center border-x border-border">
                  {row.others ? (
                    <Check className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <X className="w-5 h-5 text-destructive/50" />
                  )}
                </div>
                <div className="p-5 flex justify-center items-center bg-primary/5">
                  {row.paygrid ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-destructive" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
