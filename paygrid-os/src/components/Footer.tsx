import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
          <div className="col-span-2">
            <a className="flex items-center gap-3 mb-6" href="/">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <span className="font-bold text-background text-lg">P</span>
              </div>
              <span className="font-semibold text-xl">PayGrid</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">Your financial command center. Built for clarity, designed for control.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">GitHub</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Security</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">API</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 PayGrid OS. All rights reserved.</p>
          <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <span>Built with obsession</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
