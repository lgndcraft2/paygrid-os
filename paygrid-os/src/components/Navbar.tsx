import { ArrowUpRight, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference" style={{ opacity: 1, transform: 'none' }}>
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <a className="flex items-center gap-3 group" href="/">
            <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-bold text-background text-lg">P</span>
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground">PayGrid</span>
          </a>
          <nav className="hidden md:flex items-center gap-12">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors link-underline">Features</a>
            <a href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition-colors link-underline">How It Works</a>
            <a href="#pricing" className="text-sm text-foreground/70 hover:text-foreground transition-colors link-underline">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="/dashboard">
              <span className="text-sm text-foreground/70 hover:text-foreground transition-colors link-underline cursor-pointer">Log in</span>
            </a>
            <a href="/dashboard">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:border-foreground/40 h-9 px-4 text-xs rounded-md group">
                Launch App
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </a>
          </div>
          <button className="md:hidden p-2 text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
