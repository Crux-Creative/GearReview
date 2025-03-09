import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface FeaturedReviewCardProps {
  title: string
  description: string
  category: string
  rating: number
  image: string
  slug: string
}

export function FeaturedReviewCard({ title, description, category, rating, image, slug }: FeaturedReviewCardProps) {
  return (
    <Link href={`/review/${slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="aspect-[3/2] w-full object-cover"
            />
            <Badge className="absolute left-4 top-4">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-muted-foreground">Read Review</span>
        </CardFooter>
      </Card>
    </Link>
  )
}

