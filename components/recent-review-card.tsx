import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface RecentReviewCardProps {
  title: string
  description: string
  category: string
  date: string
  image: string
  slug: string
}

export function RecentReviewCard({ title, description, category, date, image, slug }: RecentReviewCardProps) {
  return (
    <Link href={`/review/${slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 mb-2">
                <Badge>{category}</Badge>
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            </CardContent>
            <CardFooter className="mt-auto p-0 pt-4">
              <span className="text-sm font-medium">Read Review →</span>
            </CardFooter>
          </div>
        </div>
      </Card>
    </Link>
  )
}

