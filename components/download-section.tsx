import { Button } from "@/components/ui/button"
import { QrCode, Smartphone } from "lucide-react"

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Move <span className="text-primary">Smarter</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Download Weyriaye now and join Ethiopia's leading cargo transport platform. Available on both Android and
            iOS.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* QR Code */}
            <div className="card-green-border rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-20 w-20 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Scan to download</p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Download on Google Play
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Join the logistics revolution in Ethiopia</p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>✓ Free to download</span>
              <span>✓ Easy registration</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
