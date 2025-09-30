"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

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
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current
      if (diff > 50) {
        handleNext() // Swipe left -> next
      } else if (diff < -50) {
        handlePrev() // Swipe right -> previous
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our <span className="text-primary">Users</span> Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from cargo owners, truck owners, drivers, and agents who trust Weyriaye for their transport and
            logistics needs.
          </p>
        </div>

        <div className="relative max-w-[85vw] sm:max-w-[550px] md:max-w-[650px] mx-auto">
          <div
            className="relative h-[280px] sm:h-[320px] md:h-[360px] w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex
              const zIndex = testimonials.length - Math.abs(index - activeIndex)
              const scale = isActive ? 1 : 0.94 // Slightly smaller inactive cards
              const opacity = isActive ? 1 : 0.5 // Lower opacity for inactive cards to show stack

              return (
                <Card
                  key={index}
                  className={`card-green-border absolute top-0 left-0 w-full transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl`}
                  style={{
                    transform: `scale(${scale})`,
                    zIndex,
                    opacity,
                    transformOrigin: 'center center',
                  }}
                >
                  <CardContent className="p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-1 mb-2 sm:mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base text-pretty">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="font-semibold text-foreground text-sm sm:text-base">
                            {testimonial.name}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {testimonial.role} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <button
            onClick={handlePrev}
            className="hidden sm:block absolute left-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-all shadow-md hover:shadow-lg z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={handleNext}
            className="hidden sm:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-all shadow-md hover:shadow-lg z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}