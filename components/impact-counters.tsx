"use client"

import { useEffect, useState } from "react"
import { MapPin, Package, Truck, Users } from "lucide-react"

const counters = [
  {
    icon: Package,
    label: "Cargo Deliveries Completed",
    value: 1500,
    suffix: "+",
    color: "text-primary",
  },
  {
    icon: Truck,
    label: "Truck Owners Onboarded",
    value: 900,
    suffix: "+",
    color: "text-primary",
  },
  {
    icon: Users,
    label: "Drivers & Assistants",
    value: 2200,
    suffix: "+",
    color: "text-primary",
  },
  {
    icon: MapPin,
    label: "Regions Served",
    value: 12,
    suffix: "+",
    color: "text-primary",
  },
]

export function ImpactCounters() {
  const [counts, setCounts] = useState(counters.map(() => 0))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    counters.forEach((counter, index) => {
      const increment = counter.value / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.min(Math.floor(increment * currentStep), counter.value)
          return newCounts
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [])

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Impact</span> Across Ethiopia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join thousands of satisfied users who trust Weyriaye for their cargo transport needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center">
              <div className="card-green-accent rounded-lg p-8">
                <div className={`w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4`}>
                  <counter.icon className={`h-8 w-8 ${counter.color}`} />
                </div>
                <div className={`text-4xl font-bold ${counter.color} mb-2`}>
                  {counts[index].toLocaleString()}
                  {counter.suffix}
                </div>
                <div className="text-muted-foreground font-medium">{counter.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
