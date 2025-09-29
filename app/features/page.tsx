import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Search,
  MapPin,
  CreditCard,
  Shield,
  MessageCircle,
  Users,
  Smartphone,
  Clock,
  CheckCircle,
  Star,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Cargo-Truck Matching",
    description: "Automatic system matches cargo with the right truck based on location, capacity, and availability.",
    details: [
      "AI-powered matching algorithm",
      "Real-time availability checking",
      "Optimal route planning",
      "Load capacity optimization",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Monitor trucks and deliveries live with precise location updates throughout the journey.",
    details: ["Live GPS tracking", "Route optimization", "Delivery time estimates", "Location history"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: CreditCard,
    title: "Instant Secure Payments",
    description: "Fast and reliable payment processing immediately after delivery confirmation.",
    details: [
      "Instant payment processing",
      "Multiple payment methods",
      "Secure transactions",
      "Payment history tracking",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Verified Users & Drivers",
    description: "Trust and transparency at every step with comprehensive verification for all platform users.",
    details: ["Identity verification", "Document validation", "Background checks", "Rating system"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: MessageCircle,
    title: "Communication Tools",
    description: "Safe chat and call features through the app for seamless coordination between all parties.",
    details: ["In-app messaging", "Voice calls", "File sharing", "Translation support"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Multi-role Support",
    description: "Cargo owners, truck owners, drivers, assistants, and agents all supported in one platform.",
    details: ["Role-based dashboards", "Customized workflows", "Multi-role accounts", "Seamless role switching"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const additionalFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for mobile devices with offline capabilities for areas with poor connectivity.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock platform availability with customer support when you need it.",
  },
  {
    icon: Star,
    title: "Rating & Reviews",
    description: "Build trust through transparent rating systems for all users on the platform.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Available in Amharic, Oromo, and English to serve Ethiopia's diverse population.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Powerful <span className="text-primary">Features</span> for Smart Logistics
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Discover the advanced features that make Weyriaye the leading cargo transport platform in Ethiopia.
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Core Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Everything you need for efficient, transparent, and secure cargo transport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className={`h-4 w-4 ${feature.color} mr-3 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Additional <span className="text-accent">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                More features designed to enhance your cargo transport experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-pretty">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Download Weyriaye today and discover how our advanced features can transform your cargo transport
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Download App Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 bg-transparent"
              >
                Learn About Roles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
