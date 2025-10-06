import { Button } from "@/components/ui/button"
import Image from "next/image"
import { QrCode, Smartphone, Download } from "lucide-react"

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Move <span className="text-primary bg-gradient-to-r from-primary/20 to-accent/20 px-2 py-1 rounded">Smarter</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Download Weyriaye now and join Ethiopia's leading cargo transport platform. Available on both Android and
            iOS. Start transporting smarter today.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 mb-12">
            {/* Left Side: Phone Mockup in Circle */}
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full p-6 md:p-8 flex items-center justify-center group hover:scale-105 transition-all duration-500">
                {/* Phone Mockup with Enhanced Frame Effect */}
                <div className="relative w-48 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-primary/20 transition-shadow duration-300 border-4 border-gray-200/50 border-double">
                  {/* Phone Back/Frame Enhancement - Subtle Inset Shadow for 3D Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-100/50 to-transparent pointer-events-none"></div>
                  
                  {/* Top Bezel/Speaker */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary rounded-full"></div>
                  
                  {/* Side Bezels with Volume Buttons */}
                  <div className="absolute top-8 left-4 w-2 h-8 bg-black/20 rounded"></div>
                  <div className="absolute top-20 left-4 w-2 h-8 bg-black/20 rounded"></div>
                  <div className="absolute top-8 right-4 w-2 h-8 bg-black/20 rounded"></div>
                  
                  {/* Bottom Home Bar */}
                  <div className="absolute bottom-8 left-4 right-4 h-1 bg-black/20 rounded-full"></div>
                  
                  {/* Real App Screenshot */}
                  <Image
                    src="/app-screenshot.png" // Place your real app screenshot in public/app-screenshot.png
                    alt="Weyriaye App Screenshot"
                    fill
                    className="rounded-2xl object-cover absolute inset-2"
                    priority
                  />
                </div>
              </div>
              {/* Download Text Overlay */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">DOWNLOAD</h3>
                <p className="text-lg text-accent font-semibold">OUR APP</p>
              </div>
            </div>

            {/* Right Side: QR Code and Buttons */}
            <div className="text-center space-y-8">
              {/* QR Code */}
              <div className="relative inline-block">
                <div className="w-48 h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-6 flex items-center justify-center border border-accent/30 group hover:border-accent/50 transition-all duration-300">
                  <QrCode className="h-24 w-24 text-accent drop-shadow-md" />
                </div>
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground font-medium">Scan to Download</p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg bg-transparent shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 text-lg">Join the logistics revolution in Ethiopia</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2 px-3 py-2 bg-primary/10 rounded-lg">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Free to download</span>
              </span>
              <span className="flex items-center space-x-2 px-3 py-2 bg-accent/10 rounded-lg">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Easy registration</span>
              </span>
              <span className="flex items-center space-x-2 px-3 py-2 bg-secondary/10 rounded-lg">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>24/7 support</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}