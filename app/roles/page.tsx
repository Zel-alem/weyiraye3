import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Truck, User, UserCheck, Users, ArrowRight, CheckCircle } from "lucide-react"

const roles = [
  {
    id: "cargo-owner",
    icon: Package,
    title: "Cargo Owner (CO)",
    description: "Post cargo and track deliveries in real-time.",
    benefits: [
      "Post cargo quickly and easily",
      "Track shipments in real-time",
      "Transparent pricing and secure payments",
      "Communicate safely with drivers and agents",
      "Verified truck owners and drivers",
      "Insurance coverage for shipments",
    ],
    howItWorks: [
      "Download the Weyriaye app",
      "Register as a Cargo Owner",
      "Verify identity and business documents",
      "Post your cargo with all details (weight, type, destination)",
      "Get matched with a trusted Truck Owner",
      "Track delivery and confirm receipt",
    ],
    cta: "Post Your Cargo Today",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "truck-owner",
    icon: Truck,
    title: "Truck Owner (TO)",
    description: "Maximize truck utilization, manage drivers, receive instant payments.",
    benefits: [
      "Real-Time Truck Tracking – Monitor every truck in your fleet",
      "Instant Payments – Get paid immediately after delivery",
      "Verified Cargo Owners – Work only with trusted clients",
      "Driver & Assistant Management – Assign trips and monitor progress",
      "Smart cargo matching system",
      "24/7 customer support",
    ],
    howItWorks: [
      "Download the Weyriaye app",
      "Register your trucks and personal/business info",
      "Verify trucks, drivers, and documents",
      "Receive automatic cargo requests from the system",
      "Assign drivers & assistants to trips",
      "Track trips, confirm delivery, and receive instant payment",
    ],
    cta: "Register Your Truck & Start Earning",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "driver",
    icon: User,
    title: "Driver",
    description: "Hired by truck owners, update trips and communicate securely.",
    benefits: [
      "Hired by Truck Owner to transport cargo",
      "Update trip status in real-time via the app",
      "Communicate and negotiate safely with cargo owners and agents",
      "Build reputation and gain trust with verified trips",
      "Access to steady work opportunities",
      "Professional development and training",
    ],
    howItWorks: [
      "Download the Weyriaye app",
      "Register as a Driver",
      "Complete verification process",
      "Get hired by Truck Owners",
      "Receive trip assignments",
      "Update status and complete deliveries",
    ],
    cta: "Join as a Driver",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "assistant-driver",
    icon: UserCheck,
    title: "Assistant Driver",
    description: "Support drivers in loading/unloading and trip updates.",
    benefits: [
      "Support drivers during loading, unloading, and delivery",
      "Confirm cargo status updates",
      "Ensure safe and smooth trips",
      "Gain experience and credibility in cargo transport",
      "Learn from experienced drivers",
      "Build professional network",
    ],
    howItWorks: [
      "Download the Weyriaye app",
      "Register as an Assistant Driver",
      "Complete verification process",
      "Get assigned to support drivers",
      "Assist with cargo handling",
      "Confirm deliveries and updates",
    ],
    cta: "Join as Assistant Driver",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "agent",
    icon: Users,
    title: "Agent",
    description: "Register cargo owners and truck owners, facilitate logistics, and earn commission.",
    benefits: [
      "Earn while facilitating cargo transport",
      "Register Cargo Owners (CO) and Truck Owners (TO) on Weyriaye",
      "Earn commission for every cargo posted or truck registered through your account",
      "Facilitate coordination, documentation, and dispute resolution",
      "Track commissions and client activity via app dashboard",
      "Build local business network",
    ],
    howItWorks: [
      "Download the Weyriaye app",
      "Register as an Agent",
      "Complete verification process",
      "Register COs and TOs on the platform",
      "Earn commission for each cargo or truck listed through your referral",
      "Help coordinate trips and ensure smooth delivery",
      "Track commissions and client activity in the app",
    ],
    cta: "Become an Agent & Earn Commissions",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export default function RolesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Find Your Role in the <span className="text-primary">Weyriaye</span> Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Whether you're shipping cargo, managing trucks, driving, or facilitating logistics, discover how Weyriaye
              can help you succeed in Ethiopia's smart transport network.
            </p>
          </div>
        </section>

        {/* Roles Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {roles.map((role, index) => (
                <div key={role.id} className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex lg:gap-12`}>
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <Card className={`${role.bgColor} border-border h-full`}>
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-16 h-16 rounded-lg bg-background/50 flex items-center justify-center`}>
                            <role.icon className={`h-8 w-8 ${role.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-foreground">{role.title}</CardTitle>
                            <CardDescription className="text-muted-foreground text-lg">
                              {role.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-foreground mb-4">Key Benefits:</h3>
                          <ul className="space-y-3">
                            {role.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-3">
                                <CheckCircle className={`h-5 w-5 ${role.color} mt-0.5 flex-shrink-0`} />
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          className={`w-full ${role.color === "text-primary" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"} text-white`}
                        >
                          {role.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="bg-card border border-border rounded-lg p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-6">How It Works:</h3>
                      <div className="space-y-4">
                        {role.howItWorks.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-4">
                            <div
                              className={`w-8 h-8 rounded-full ${role.bgColor} flex items-center justify-center flex-shrink-0`}
                            >
                              <span className={`text-sm font-semibold ${role.color}`}>{stepIndex + 1}</span>
                            </div>
                            <p className="text-muted-foreground pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Download the Weyriaye app today and join thousands of users transforming cargo transport in Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Download App & Join Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 bg-transparent"
              >
                Learn More About Features
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
