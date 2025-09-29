import { ArrowRight, CheckCircle, MapPin, Truck, User } from "lucide-react"

const steps = [
  {
    icon: User,
    title: "Cargo Owner posts a cargo request",
    description: "Submit cargo details including weight, type, pickup and destination locations.",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Weyriaye system matches with suitable Truck Owner",
    description: "Our smart algorithm finds the best truck based on location, capacity, and availability.",
    color: "text-primary",
  },
  {
    icon: User,
    title: "Truck Owner assigns Driver & Assistant Driver",
    description: "Fleet managers assign the most suitable drivers for the specific cargo and route.",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Driver and Assistant update trip status",
    description: "Real-time updates throughout the journey with GPS tracking and status confirmations.",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Delivery completed, instant payment processed",
    description: "Automatic payment processing upon successful delivery confirmation.",
    color: "text-primary",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            How <span className="text-primary">Weyriaye</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From cargo posting to delivery completion, our streamlined process ensures efficient and transparent cargo
            transport across Ethiopia.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-primary opacity-30 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card-green-accent rounded-lg p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <div className="bg-background border border-border rounded-full p-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
