import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl">GearReviews</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="/reviews" className="text-sm font-medium transition-colors hover:text-primary">
              Reviews
            </Link>
            <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
              Categories
            </Link>
            <Link href="/buying-guides" className="text-sm font-medium transition-colors hover:text-primary">
              Buying Guides
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reviews..."
              className="w-full rounded-md pl-8 md:w-[300px] lg:w-[300px]"
            />
          </form>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

