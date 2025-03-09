import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Categories</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our reviews by category to find exactly what you're looking for
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-lg">{category.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={400}
                        height={300}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

// Sample data
const categories = [
  {
    name: "Audio",
    slug: "audio",
    description: "Headphones, speakers, earbuds, and more audio equipment",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Cameras",
    slug: "cameras",
    description: "DSLR, mirrorless, action cameras, and photography gear",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Drones",
    slug: "drones",
    description: "Consumer and professional drones for photography and recreation",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Gaming",
    slug: "gaming",
    description: "Consoles, controllers, gaming PCs, and accessories",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Laptops",
    slug: "laptops",
    description: "Gaming laptops, ultrabooks, 2-in-1s, and more",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Smartphones",
    slug: "smartphones",
    description: "Flagship, mid-range, and budget smartphones",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Wearables",
    slug: "wearables",
    description: "Smartwatches, fitness trackers, and wearable tech",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Outdoor Gear",
    slug: "outdoor-gear",
    description: "Camping, hiking, and adventure equipment",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    description: "Smart speakers, displays, security, and home automation",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Computer Components",
    slug: "computer-components",
    description: "CPUs, GPUs, motherboards, and PC building parts",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Monitors",
    slug: "monitors",
    description: "Gaming, productivity, and professional displays",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Chargers, cables, cases, and other tech accessories",
    image: "/placeholder.svg?height=300&width=400",
  },
]

