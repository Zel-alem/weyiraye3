import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Hana Tadesse",
    role: "Cargo Owner",
    company: "Import Business",
    content:
      "Weyriaye makes transporting my cargo simple and reliable. The real-time tracking gives me peace of mind, and the transparent pricing helps me budget effectively.",
    rating: 5,
  },
  {
    name: "Mulugeta Bekele",
    role: "Truck Owner",
    company: "Fleet Manager",
    content:
      "The app helps me manage my fleet and drivers efficiently, and payments are instant. My trucks are utilized better than ever before.",
    rating: 5,
  },
  {
    name: "Dawit Alemayehu",
    role: "Driver",
    company: "Professional Driver",
    content:
      "Drivers can update trips and communicate securely, making my job easier. The platform has helped me build a strong reputation.",
    rating: 5,
  },
  {
    name: "Selam Worku",
    role: "Agent",
    company: "Logistics Coordinator",
    content:
      "I earn commission every time I register a cargo owner or truck owner – it's a great side income while helping my community.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our <span className="text-primary">Users</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from cargo owners, truck owners, drivers, and agents who trust Weyriaye for their transport and
            logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-green-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
