import Link from "next/link"
import { Truck, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 link-green-hover">
              <div className="bg-primary-foreground p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">Weyriaye</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Smart cargo transport platform connecting cargo owners, truck owners, drivers, and agents across Ethiopia.
              Move your cargo safely, efficiently, and transparently.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+251 911 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>support@weyriaye.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/roles" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  User Roles
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  Safety & Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  Branch Locations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Weyriaye. All rights reserved. Smart cargo transport for Ethiopia.</p>
        </div>
      </div>
    </footer>
  )
}
