import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedReviewCard } from "@/components/featured-review-card"
import { RecentReviewCard } from "@/components/recent-review-card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Honest Gear Reviews for the outoor enthusiast.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Expert reviews, in-depth analysis, and hands-on testing of the latest gear and equipment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/reviews">
                    <Button size="lg">Browse Reviews</Button>
                  </Link>
                  <Link href="/categories">
                    <Button size="lg" variant="outline">
                      Explore Categories
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/image.png"
                alt="Latest reviewed gear"
                width={800}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Reviews</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most comprehensive and detailed gear reviews
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeaturedReviewCard
              title="Sony WH-1000XM5 Headphones"
              description="The best noise-cancelling headphones on the market today."
              category="Audio"
              rating={4.8}
              image="/placeholder.svg?height=400&width=600"
              slug="sony-wh-1000xm5-headphones"
              />
              <FeaturedReviewCard
              title="Canon EOS R6 Mark II"
              description="A versatile mirrorless camera for both photography and videography."
              category="Cameras"
              rating={4.7}
              image="/placeholder.svg?height=400&width=600"
              slug="canon-eos-r6-mark-ii"
              />
              <FeaturedReviewCard
              title="DJI Mini 3 Pro Drone"
              description="The perfect balance of portability and performance."
              category="Drones"
              rating={4.9}
              image="vercel.svg?height=400&width=600"
              slug="dji-mini-3-pro-drone"
              />
            </div>
            <div className="flex justify-center">
              <Link href="/reviews">
                <Button variant="outline" size="lg">
                  View All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse by Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find reviews for the specific gear you're interested in
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-12 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-lg">{category.name}</CardTitle>
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

        {/* Recent Reviews */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recent Reviews</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up to date with our latest gear reviews and insights
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {recentReviews.map((review) => (
                <RecentReviewCard
                  key={review.slug}
                  title={review.title}
                  description={review.description}
                  category={review.category}
                  date={review.date}
                  image={review.image}
                  slug={review.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
                <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive the latest gear reviews and exclusive content
                </p>
              </div>
              <div className="w-full max-w-md">
                <NewsletterSignup />
              </div>
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
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Cameras",
    slug: "cameras",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Drones",
    slug: "drones",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Gaming",
    slug: "gaming",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Laptops",
    slug: "laptops",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Smartphones",
    slug: "smartphones",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Wearables",
    slug: "wearables",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Outdoor Gear",
    slug: "outdoor-gear",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const recentReviews = [
  {
    title: "Apple MacBook Pro M3 Max Review",
    description: "The most powerful MacBook ever made, but is it worth the premium price?",
    category: "Laptops",
    date: "March 5, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "apple-macbook-pro-m3-max-review",
  },
  {
    title: "Samsung Galaxy S24 Ultra Review",
    description: "Samsung's latest flagship pushes the boundaries of smartphone photography.",
    category: "Smartphones",
    date: "March 1, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "samsung-galaxy-s24-ultra-review",
  },
  {
    title: "Sony A7IV Mirrorless Camera Review",
    description: "A hybrid powerhouse that excels at both stills and video.",
    category: "Cameras",
    date: "February 25, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sony-a7iv-mirrorless-camera-review",
  },
  {
    title: "Bose QuietComfort Ultra Earbuds Review",
    description: "Premium noise-cancelling earbuds with spatial audio technology.",
    category: "Audio",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "bose-quietcomfort-ultra-earbuds-review",
  },
]

