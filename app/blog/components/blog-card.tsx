import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Eye } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  publishedAt: string
  readTime: string
  views: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="card overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 transform hover:scale-105">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.publishedAt}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {post.views}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}