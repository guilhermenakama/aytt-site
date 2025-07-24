import Link from "next/link"
import { Calendar, TrendingUp, Tag } from "lucide-react"
import { blogPosts } from "../data/blog-posts"

export function BlogSidebar() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
  const popularPosts = blogPosts.sort((a, b) => Number.parseInt(b.views) - Number.parseInt(a.views)).slice(0, 5)
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          Posts Populares
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <h4 className="text-sm font-medium group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="h-3 w-3" />
                {post.publishedAt}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-4">Categorias</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const count = blogPosts.filter((post) => post.category === category).length
            return (
              <Link
                key={category}
                href={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span>{category}</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{count}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Tag className="h-5 w-5 text-blue-400" />
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 15).map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/10 hover:text-blue-400 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card-info p-6">
        <h3 className="text-xl font-bold mb-4">Precisa de Ajuda com IA?</h3>
        <p className="text-gray-300 text-sm mb-4">
          Nossa equipe pode ajudar sua empresa a implementar soluções de IA e automação.
        </p>
        <Link
          href="https://wa.me/5543999108255"
          target="_blank"
          className="block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-center py-2 px-4 rounded-full font-medium transition-all duration-300 text-sm"
        >
          Falar com Especialista
        </Link>
      </div>
    </aside>
  )
}