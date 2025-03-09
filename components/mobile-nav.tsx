"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold text-xl">GearReviews</span>
          </Link>
        </div>
        <div className="mt-8 px-7">
          <form className="relative w-full">
            <input
              type="search"
              placeholder="Search reviews..."
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </form>
        </div>
        <nav className="mt-6 flex flex-col gap-4 px-7">
          <Link
            href="/reviews"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="/categories"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/buying-guides"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Buying Guides
          </Link>
          <Link
            href="/about"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </nav>
        <div className="mt-8 px-7">
          <h3 className="text-sm font-medium">Categories</h3>
          <nav className="mt-2 flex flex-col gap-2">
            <Link
              href="/category/audio"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Audio
            </Link>
            <Link
              href="/category/cameras"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Cameras
            </Link>
            <Link
              href="/category/drones"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Drones
            </Link>
            <Link
              href="/category/gaming"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Gaming
            </Link>
            <Link
              href="/category/laptops"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Laptops
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

