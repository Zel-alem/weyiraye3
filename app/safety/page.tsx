import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Phone, Eye, FileCheck, Users, AlertTriangle, Lock, Headphones, Star } from "lucide-react"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Comprehensive User Verification",
    description: "All users undergo thorough verification to ensure platform safety and reliability.",
    details: [
      "Identity document verification",
      "Business license validation",
      "Driver license authentication",
      "Vehicle registration checks",
      "Background screening process",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileCheck,
    title: "Vehicle & Driver Documentation",
    description: "Complete documentation verification for all trucks and drivers on the platform.",
    details: [
      "Vehicle inspection certificates",
      "Insurance documentation",
      "Driver certification validation",
      "Regular document updates",
      "Compliance monitoring",
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "24/7 monitoring of all trips with GPS tracking and status updates.",
    details: [
      "Live GPS tracking",
      "Route deviation alerts",
      "Emergency response system",
      "Automated status updates",
      "Incident reporting",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Lock,
    title: "Secure Payment System",
    description: "Protected payment processing with escrow services and fraud prevention.",
    details: [
      "Encrypted payment processing",
      "Escrow payment protection",
      "Fraud detection systems",
      "Secure transaction history",
      "Payment dispute resolution",
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const trustFeatures = [
  {
    icon: Star,
    title: "Rating & Review System",
    description: "Transparent rating system helps build trust and accountability among all users.",
  },
  {
    icon: Users,
    title: "Community Standards",
    description: "Clear community guidelines and standards that all platform users must follow.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Quick response team for handling emergencies and resolving disputes effectively.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock customer support available in multiple languages.",
  },
]

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Safety</span> & <span className="text-accent">Trust</span> First
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Your security is our priority. Discover the comprehensive safety measures that make Weyriaye the most
              trusted cargo transport platform in Ethiopia.
            </p>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Comprehensive Safety Measures
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Multi-layered security protocols ensure safe and reliable cargo transport for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {safetyFeatures.map((feature, index) => (
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
                    <ul className="space-y-3">
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

        {/* Trust & Support */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Building <span className="text-primary">Trust</span> Through Transparency
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Additional measures that create a trustworthy environment for all platform users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trustFeatures.map((feature, index) => (
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

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Emergency Support</h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Need immediate assistance? Our emergency response team is available 24/7 to help with any urgent
                  situations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Hotline
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Headphones className="mr-2 h-5 w-5" />
                    Live Chat Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Experience Safe & Secure Transport
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Join thousands of users who trust Weyriaye for safe, reliable cargo transport across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Download App & Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 bg-transparent"
              >
                Learn About Features
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}