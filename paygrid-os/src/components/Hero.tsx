import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-80"></div>
        <div className="absolute inset-0 noise-overlay opacity-30"></div>
        
        {/* Ambient Glow - Centered/Top Left warmth */}
        <div className="absolute top-0 -left-20 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[120px] mix-blend-screen pointer-events-none"></div>
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, rgb(245, 244, 240) 1px, transparent 1px), linear-gradient(rgb(245, 244, 240) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        
        <div className="relative h-full">
          <div className="container h-full flex flex-col justify-center pt-20">
            <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
              <span className="inline-flex items-center gap-3 text-sm text-neutral-400 font-medium uppercase tracking-[0.2em]">
                <span className="w-12 h-px bg-primary"></span>Financial Operating System
              </span>
            </div>
            
            <div className="max-w-[90vw] mb-12">
              <h1 className="text-display-xl font-display leading-[0.85] mb-4 tracking-tight" style={{ opacity: 1, transform: 'none' }}>
                <span className="block text-foreground font-normal">Money,</span>
                <span className="block gradient-text font-normal">Clarity.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed" style={{ opacity: 1, transform: 'none' }}>
                Your financial command center. Track everything, understand instantly, control effortlessly.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mb-20" style={{ opacity: 1, transform: 'none' }}>
              <a href="/dashboard">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground font-bold uppercase tracking-wider shadow-glow hover:shadow-[0_0_80px_hsl(40_96%_53%/0.4)] hover:scale-[1.02] active:scale-[0.98] border-2 border-primary h-14 px-8 text-base rounded-lg group">
                  Start Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <button className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group">
                <span className="w-14 h-14 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Play className="w-5 h-5 ml-1" />
                </span>
                <span className="text-sm uppercase tracking-wider">Watch Demo</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-12 md:gap-20" style={{ opacity: 1, transform: 'none' }}>
              <div className="group">
                <p className="text-4xl md:text-5xl font-bold mb-1 group-hover:text-primary transition-colors">
                  <span className="font-mono tabular-nums">12,847+</span>
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Active Users</p>
              </div>
              <div className="group">
                <p className="text-4xl md:text-5xl font-bold mb-1 group-hover:text-primary transition-colors">
                  <span className="font-mono tabular-nums">$2.4M</span>
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Tracked Daily</p>
              </div>
              <div className="group">
                <p className="text-4xl md:text-5xl font-bold mb-1 group-hover:text-primary transition-colors">
                  <span className="font-mono tabular-nums">99.9%</span>
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Uptime</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 1 }}>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <div className="animate-bounce">
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="absolute right-8 md:right-20 top-1/3 float hidden lg:block" style={{ transform: 'translateY(-60px)' }}>
          <div className="glass-card rounded-2xl border border-white/10 backdrop-blur-xl w-72 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Total Balance</span>
              <span className="text-xs text-success">+12.5%</span>
            </div>
            <p className="text-3xl font-mono font-bold">$24,562.80</p>
            <div className="mt-4 h-16 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70, 85, 95].map((height, i) => (
                <div key={i} className="flex-1 bg-primary/30 rounded-sm" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-32 md:right-48 top-2/3 float-delayed hidden lg:block" style={{ transform: 'translateY(-100px)' }}>
          <div className="glass-card rounded-2xl border border-white/10 backdrop-blur-xl w-56 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                <span className="text-success text-sm">↑</span>
              </div>
              <div>
                <p className="text-sm font-medium">Salary Deposit</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>
            <p className="text-xl font-mono font-bold text-success">+$7,200.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
