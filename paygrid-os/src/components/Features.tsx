export function Features() {
  const features = [
    {
      id: "01",
      title: "Real-time Sync",
      description: "Every transaction, every balance, updating as it happens. No refresh needed."
    },
    {
      id: "02",
      title: "Smart Categories",
      description: "AI learns your spending patterns. Auto-categorization that actually works."
    },
    {
      id: "03",
      title: "Goal Tracking",
      description: "Set it. See it. Achieve it. Visual progress that keeps you motivated."
    },
    {
      id: "04",
      title: "Spending Limits",
      description: "Daily, weekly, or monthly. Get alerted before you overspend, not after."
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="container mb-20">
        <div className="max-w-4xl" style={{ opacity: 1, transform: 'none' }}>
          <span className="text-sm text-primary uppercase tracking-[0.2em] mb-4 block">Core Features</span>
          <h2 className="text-display-md font-display mb-6">Not another<br /><span className="gradient-text">budgeting app.</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl">This is a financial command center. Built for people who want clarity, not complexity. Control, not chaos.</p>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group relative" style={{ opacity: 1, transform: 'none' }}>
              <div className="brutal-card rounded-2xl p-8 md:p-10 h-full hover:border-primary/30 transition-colors overflow-hidden">
                <span className="absolute -right-4 -top-8 text-[12rem] font-bold text-foreground/[0.02] font-mono select-none">{feature.id}</span>
                <div className="relative">
                  <span className="text-xs text-primary font-mono mb-4 block">{feature.id}</span>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
