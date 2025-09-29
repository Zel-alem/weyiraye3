import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Trust",
    description: "Verified roles and secure payments ensure every transaction is safe and reliable.",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear pricing and open communication throughout the entire transport process.",
    color: "text-accent",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Smart cargo-truck matching and GPS tracking powered by cutting-edge technology.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Community",
    description: "Empowering drivers, owners, and agents together to build Ethiopia's logistics future.",
    color: "text-accent",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary">Weyriaye</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Transforming cargo transport in Ethiopia through smart technology, trusted partnerships, and transparent
              operations.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Mission */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground text-pretty">
                    To make cargo transport in Ethiopia smarter, safer, and more transparent by connecting all
                    stakeholders in a unified digital platform that ensures efficient logistics operations.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground text-pretty">
                    A logistics ecosystem where cargo moves efficiently across Ethiopia, trusted by all participants and
                    powered by innovative technology that drives economic growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                The principles that guide everything we do at Weyriaye.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Story</h2>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-pretty mb-6">
                    Weyriaye was created to solve the complex cargo transport challenges facing Ethiopia. For too long,
                    cargo owners struggled to find reliable transport, truck owners couldn't maximize their fleet
                    utilization, and drivers lacked access to consistent work opportunities.
                  </p>
                  <p className="text-pretty mb-6">
                    Moving from manual coordination to a fully digital system, we recognized the need for a platform
                    that could seamlessly connect cargo owners, truck owners, drivers, assistants, and agents in one
                    unified ecosystem. Our smart matching technology ensures that cargo finds the right truck, while our
                    real-time tracking and instant payment systems provide transparency and trust.
                  </p>
                  <p className="text-pretty mb-6">
                    Today, Weyriaye serves over 12 regions across Ethiopia, facilitating thousands of cargo deliveries
                    and supporting the livelihoods of truck owners, drivers, and agents. We're not just a logistics
                    platform – we're building the infrastructure for Ethiopia's economic growth.
                  </p>
                  <p className="text-pretty">
                    As we continue to grow, our commitment remains the same: to make cargo transport in Ethiopia more
                    efficient, transparent, and accessible for everyone involved in the supply chain.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Impact So Far</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Numbers that reflect our commitment to transforming Ethiopia's logistics landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,500+</div>
                <div className="text-muted-foreground">Cargo Deliveries Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">900+</div>
                <div className="text-muted-foreground">Truck Owners Onboarded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2,200+</div>
                <div className="text-muted-foreground">Drivers & Assistants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">12+</div>
                <div className="text-muted-foreground">Regions Served</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
