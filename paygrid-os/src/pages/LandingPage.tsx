import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { HowItWorks } from '../components/HowItWorks'
import { Comparison } from '../components/Comparison'
import { Testimonials } from '../components/Testimonials'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
