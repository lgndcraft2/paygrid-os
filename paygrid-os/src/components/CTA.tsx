import { Sparkles, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50"></div>
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="container relative">
        <div className="relative max-w-5xl mx-auto text-center" style={{ opacity: 1, transform: 'none' }}>
          <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[100px]"></div>
          <div className="relative brutal-card rounded-[2rem] p-12 md:p-20 border-primary/20">
            <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl"></div>
            <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl"></div>
            <div style={{ opacity: 1, transform: 'none' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-8">
                <Sparkles className="w-4 h-4" />
                Free to start • No credit card
              </div>
            </div>
            <h2 className="text-display-md font-display mb-6" style={{ opacity: 1, transform: 'none' }}>Your money.<br /><span className="gradient-text">Your clarity.</span></h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto" style={{ opacity: 1, transform: 'none' }}>Join thousands who've transformed how they see, understand, and control their finances.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 1, transform: 'none' }}>
              <a href="/dashboard">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground font-semibold uppercase tracking-wider shadow-glow hover:shadow-[0_0_80px_hsl(38_95%_60%/0.4)] hover:scale-[1.02] active:scale-[0.98] border-2 border-primary h-16 px-12 text-lg rounded-xl group">
                  Start Free Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="/dashboard">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent text-foreground font-semibold uppercase tracking-wider border-2 border-foreground/30 hover:border-foreground hover:bg-foreground/5 h-14 px-10 text-base rounded-xl">
                  Schedule Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
