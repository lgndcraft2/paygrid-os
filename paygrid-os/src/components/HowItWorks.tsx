export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>
      <div className="container relative">
        <div className="text-center mb-20" style={{ opacity: 1, transform: 'none' }}>
          <span className="text-sm text-primary uppercase tracking-[0.2em] mb-4 block">How It Works</span>
          <h2 className="text-display-md font-display">Three steps.<br /><span className="gradient-text">Infinite clarity.</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="group" style={{ opacity: 1, transform: 'none' }}>
            <div className="brutal-card rounded-2xl overflow-hidden h-full">
              <div className="bg-gradient-to-b from-card-elevated to-card p-6 border-b border-border">
                <div className="relative h-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl -ml-4 first:ml-0 shadow-card bg-foreground text-background">🏦</div>
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl -ml-4 first:ml-0 shadow-card bg-foreground text-background">💳</div>
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl -ml-4 first:ml-0 shadow-card bg-foreground text-background">📱</div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-5xl font-bold text-foreground/5 font-mono block mb-4">01</span>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">Connect</h3>
                <p className="text-muted-foreground leading-relaxed">Link your accounts in seconds. Bank-level encryption. We never see your credentials.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group" style={{ opacity: 1, transform: 'none' }}>
            <div className="brutal-card rounded-2xl overflow-hidden h-full">
              <div className="bg-gradient-to-b from-card-elevated to-card p-6 border-b border-border">
                <div className="relative h-40 flex items-end gap-2 px-4">
                  {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <span className="text-5xl font-bold text-foreground/5 font-mono block mb-4">02</span>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">Track</h3>
                <p className="text-muted-foreground leading-relaxed">Watch your money move in real-time. Every transaction categorized, every trend visualized.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group" style={{ opacity: 1, transform: 'none' }}>
            <div className="brutal-card rounded-2xl overflow-hidden h-full">
              <div className="bg-gradient-to-b from-card-elevated to-card p-6 border-b border-border">
                <div className="h-40 flex flex-col justify-center gap-4 px-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">Savings Goal</span><span className="font-mono">84%</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full rounded-full bg-success" style={{ width: '84%' }}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">Monthly Budget</span><span className="font-mono">62%</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full rounded-full bg-primary" style={{ width: '62%' }}></div></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-5xl font-bold text-foreground/5 font-mono block mb-4">03</span>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">Optimize</h3>
                <p className="text-muted-foreground leading-relaxed">Set smart limits. Track goals. Get insights that actually help you save more.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
