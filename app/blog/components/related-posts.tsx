import { BlogCard } from "./blog-card"

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

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Artigos <span className="text-blue-400">Relacionados</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
