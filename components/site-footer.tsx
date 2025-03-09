import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl">GearReviews</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Expert reviews, in-depth analysis, and hands-on testing of the latest gear and equipment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/audio" className="text-muted-foreground hover:text-foreground">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/category/cameras" className="text-muted-foreground hover:text-foreground">
                  Cameras
                </Link>
              </li>
              <li>
                <Link href="/category/drones" className="text-muted-foreground hover:text-foreground">
                  Drones
                </Link>
              </li>
              <li>
                <Link href="/category/gaming" className="text-muted-foreground hover:text-foreground">
                  Gaming
                </Link>
              </li>
              <li>
                <Link href="/category/laptops" className="text-muted-foreground hover:text-foreground">
                  Laptops
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-foreground">
                  All Reviews
                </Link>
              </li>
              <li>
                <Link href="/buying-guides" className="text-muted-foreground hover:text-foreground">
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-muted-foreground hover:text-foreground">
                  Product Comparisons
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-muted-foreground hover:text-foreground">
                  Deals & Discounts
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GearReviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

