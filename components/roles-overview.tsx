import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Truck, User, UserCheck, Users } from "lucide-react"

const roles = [
  {
    icon: Package,
    title: "Cargo Owner (CO)",
    description: "Post cargo and track deliveries in real-time.",
    features: ["Quick cargo posting", "Real-time tracking", "Transparent pricing", "Secure communication"],
    cta: "Post Your Cargo Today",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Truck Owner (TO)",
    description: "Maximize truck utilization, manage drivers, receive instant payments.",
    features: ["Fleet management", "Driver assignment", "Instant payments", "Real-time monitoring"],
    cta: "Register Your Truck & Start Earning",
    color: "text-primary",
  },
  {
    icon: User,
    title: "Driver",
    description: "Hired by truck owners, update trips and communicate securely.",
    features: ["Trip management", "Secure communication", "Status updates", "Reputation building"],
    cta: "Join as a Driver",
    color: "text-primary",
  },
  {
    icon: UserCheck,
    title: "Assistant Driver",
    description: "Support drivers in loading/unloading and trip updates.",
    features: ["Loading support", "Trip assistance", "Status confirmation", "Experience building"],
    cta: "Join as Assistant Driver",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Agent",
    description: "Register cargo owners and truck owners, facilitate logistics, and earn commission.",
    features: ["User registration", "Commission earning", "Trip coordination", "Dispute resolution"],
    cta: "Become an Agent & Earn Commissions",
    color: "text-primary",
  },
]

export function RolesOverview() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose Your Role in the <span className="text-primary">Weyriaye</span> Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Whether you're shipping cargo, managing trucks, driving, or facilitating logistics, Weyriaye has a place for
            you in Ethiopia's smart transport network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="role-card-hover"
            >
              <CardHeader className="role-card-content-hover">
                <div className={`w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 role-card-icon-hover`}>
                  <role.icon className={`h-6 w-6 ${role.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">{role.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{role.description}</CardDescription>
              </CardHeader>
              <CardContent className="role-card-content-hover">
                <ul className="space-y-2 mb-6">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 transition-all duration-300 hover:scale-150" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground btn-green-glow">{role.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
