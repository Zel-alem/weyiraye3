import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ChevronRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary-foreground/10 p-2 rounded-md transition-all duration-200 hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="Weyriaye Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold">Weyriaye</span>
            </Link>
            <p className="text-primary-foreground/75 text-sm leading-tight max-w-sm">
              Connecting cargo owners, truck owners, drivers, and agents across Ethiopia for safe, efficient transport.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-primary-foreground/50" />
                <span className="text-xs text-primary-foreground/75">+251 911 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-primary-foreground/50" />
                <span className="text-xs text-primary-foreground/75">support@weyriaye.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-1">
              {[
                { href: "/about", label: "About Us" },
                { href: "/roles", label: "User Roles" },
                { href: "/features", label: "Features" },
                { href: "/safety", label: "Safety & Trust" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="group inline-flex items-center space-x-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-150 text-xs"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground text-sm uppercase tracking-wide">Support</h3>
            <ul className="space-y-1">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/branches", label: "Branch Locations" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="group inline-flex items-center space-x-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-150 text-xs"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center text-xs">
          <p className="text-primary-foreground/50">
            &copy; 2025 Weyriaye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}