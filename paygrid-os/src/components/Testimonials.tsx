import { Star } from 'lucide-react';

export function Testimonials() {
  const logos = [
    "Bloomberg", "TechCrunch", "Forbes", "Wired", "Fast Company", "The Verge", "Mashable", "Inc.", "Entrepreneur"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Startup Founder",
      content: "This replaced 4 different apps for me. The clarity is unmatched.",
      initials: "SC"
    },
    {
      name: "Marcus Williams",
      role: "Freelance Designer",
      content: "Finally, a financial tool that respects my time and intelligence.",
      initials: "MW"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      content: "Saved $400/month just by actually seeing where my money goes.",
      initials: "ER"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="border-y border-border py-6 mb-24 overflow-hidden">
        <div className="flex gap-16 marquee">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-2xl font-display text-muted-foreground/30 whitespace-nowrap">{logo}</span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="text-center mb-16" style={{ opacity: 1, transform: 'none' }}>
          <span className="text-sm text-primary uppercase tracking-[0.2em] mb-4 block">Testimonials</span>
          <h2 className="text-display-md font-display">People who get it,<br /><span className="gradient-text">love it.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="group" style={{ opacity: 1, transform: 'none' }}>
              <div className="brutal-card rounded-2xl p-8 h-full flex flex-col hover:border-primary/20 transition-colors">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-xl font-display italic text-foreground/90 mb-8 flex-1">"{t.content}"</blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-semibold">{t.initials}</div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
