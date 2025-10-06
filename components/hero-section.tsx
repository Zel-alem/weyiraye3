import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Truck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-network-lines.jpg')] opacity-10 bg-cover bg-center" />

        {/* Animated truck illustration */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20">
          <div className="animate-float">
            <Truck className="h-64 w-64 text-primary" />
          </div>
        </div>

        {/* Glowing accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            <span className="text-primary">Weyriaye</span> – Smart Cargo Transport,{" "}
            <span className="text-accent">Simplified</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Move your cargo safely, efficiently, and transparently across Ethiopia. Connect cargo owners, truck owners,
            drivers, and agents in one unified platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
            >
              <Smartphone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Download on Google Play
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent group"
            >
              <Smartphone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card-green-shadow rounded-lg p-4 group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary mb-1">1,500+</div>
              <div className="text-sm text-muted-foreground">Cargo Deliveries</div>
            </div>
            <div className="card-green-shadow rounded-lg p-4 group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary mb-1">900+</div>
              <div className="text-sm text-muted-foreground">Truck Owners</div>
            </div>
            <div className="card-green-shadow rounded-lg p-4 group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary mb-1">2,200+</div>
              <div className="text-sm text-muted-foreground">Drivers & Assistants</div>
            </div>
            <div className="card-green-shadow rounded-lg p-4 group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Regions Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
      </div>
    </section>
  )
}