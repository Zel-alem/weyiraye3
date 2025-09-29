"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, User, Search, MessageCircle } from "lucide-react"

const branches = [
  {
    id: 1,
    name: "Addis Ababa Branch",
    city: "Addis Ababa",
    region: "Addis Ababa",
    address: "Bole, Addis Ababa, Ethiopia",
    phone: "+251 911 123 456",
    email: "addis@weyriaye.com",
    whatsapp: "+251 911 123 456",
    workingHours: "Mon–Fri: 8:00–18:00 | Sat: 9:00–14:00",
    manager: "Mr. Tesfaye Alemu",
    services: ["Cargo Registration", "Truck Registration", "Driver Support", "Agent Services"],
    isHeadOffice: true,
  },
  {
    id: 2,
    name: "Dire Dawa Branch",
    city: "Dire Dawa",
    region: "Dire Dawa",
    address: "Kezira, Dire Dawa, Ethiopia",
    phone: "+251 911 234 567",
    email: "diredawa@weyriaye.com",
    whatsapp: "+251 911 234 567",
    workingHours: "Mon–Fri: 8:00–17:00 | Sat: 9:00–13:00",
    manager: "Ms. Hanan Mohammed",
    services: ["Cargo Registration", "Truck Registration", "Driver Support"],
    isHeadOffice: false,
  },
  {
    id: 3,
    name: "Hawassa Branch",
    city: "Hawassa",
    region: "SNNPR",
    address: "Piassa, Hawassa, Ethiopia",
    phone: "+251 911 345 678",
    email: "hawassa@weyriaye.com",
    whatsapp: "+251 911 345 678",
    workingHours: "Mon–Fri: 8:00–17:00 | Sat: 9:00–13:00",
    manager: "Mr. Daniel Tadesse",
    services: ["Cargo Registration", "Truck Registration", "Agent Services"],
    isHeadOffice: false,
  },
  {
    id: 4,
    name: "Mekelle Branch",
    city: "Mekelle",
    region: "Tigray",
    address: "Adi Haki, Mekelle, Ethiopia",
    phone: "+251 911 456 789",
    email: "mekelle@weyriaye.com",
    whatsapp: "+251 911 456 789",
    workingHours: "Mon–Fri: 8:00–17:00 | Sat: 9:00–13:00",
    manager: "Ms. Meron Gebru",
    services: ["Cargo Registration", "Driver Support", "Agent Services"],
    isHeadOffice: false,
  },
  {
    id: 5,
    name: "Bahir Dar Branch",
    city: "Bahir Dar",
    region: "Amhara",
    address: "Kebele 02, Bahir Dar, Ethiopia",
    phone: "+251 911 567 890",
    email: "bahirdar@weyriaye.com",
    whatsapp: "+251 911 567 890",
    workingHours: "Mon–Fri: 8:00–17:00 | Sat: 9:00–13:00",
    manager: "Mr. Getachew Alemu",
    services: ["Cargo Registration", "Truck Registration", "Driver Support", "Agent Services"],
    isHeadOffice: false,
  },
  {
    id: 6,
    name: "Jimma Branch",
    city: "Jimma",
    region: "Oromia",
    address: "Merkato, Jimma, Ethiopia",
    phone: "+251 911 678 901",
    email: "jimma@weyriaye.com",
    whatsapp: "+251 911 678 901",
    workingHours: "Mon–Fri: 8:00–17:00 | Sat: 9:00–13:00",
    manager: "Ms. Almaz Bekele",
    services: ["Cargo Registration", "Truck Registration", "Agent Services"],
    isHeadOffice: false,
  },
]

const regions = ["All Regions", "Addis Ababa", "Dire Dawa", "SNNPR", "Tigray", "Amhara", "Oromia"]

export default function BranchesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === "All Regions" || branch.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Branch</span> Locations
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Find Weyriaye branches across Ethiopia. Visit us for in-person support, registration assistance, and local
              services.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by city or branch name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <Button
                    key={region}
                    variant={selectedRegion === region ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRegion(region)}
                    className={
                      selectedRegion === region
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "border-border text-muted-foreground hover:text-foreground bg-transparent"
                    }
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Branches Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                {filteredBranches.length} Branch{filteredBranches.length !== 1 ? "es" : ""} Found
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Each branch offers comprehensive support for all Weyriaye services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBranches.map((branch) => (
                <Card
                  key={branch.id}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">{branch.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {branch.region}
                          </Badge>
                          {branch.isHeadOffice && (
                            <Badge className="text-xs bg-primary text-primary-foreground">Head Office</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{branch.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{branch.email}</span>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start space-x-3">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Working Hours</p>
                        <p className="text-sm text-muted-foreground">{branch.workingHours}</p>
                      </div>
                    </div>

                    {/* Manager */}
                    <div className="flex items-center space-x-3">
                      <User className="h-4 w-4 text-accent flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Manager: </span>
                        <span className="text-sm text-muted-foreground">{branch.manager}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Services Available:</p>
                      <div className="flex flex-wrap gap-1">
                        {branch.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBranches.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No branches found matching your search criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedRegion("All Regions")
                  }}
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Interactive <span className="text-accent">Branch Map</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                View all our branch locations on an interactive map.
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="bg-secondary/20 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're working on an interactive map to help you find the nearest Weyriaye branch.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Visit Us or Get Started Online
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Whether you prefer in-person assistance or online registration, we're here to help you get started with
              Weyriaye.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Download App & Register
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 bg-transparent"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
