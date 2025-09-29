import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { RolesOverview } from "@/components/roles-overview"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactCounters } from "@/components/impact-counters"
import { Testimonials } from "@/components/testimonials"
import { DownloadSection } from "@/components/download-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <RolesOverview />
        <HowItWorks />
        <ImpactCounters />
        <Testimonials />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
