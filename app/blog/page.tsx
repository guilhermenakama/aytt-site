import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Search, Eye } from "lucide-react"
import { BlogHeader } from "./components/blog-header"
import { BlogSidebar } from "./components/blog-sidebar"
import { BlogCard } from "./components/blog-card"
import { blogPosts } from "./data/blog-posts"

export const metadata: Metadata = {
  title: "Blog AYTT - Insights sobre IA e Automação Empresarial | Artigos Especializados",
  description:
    "Descubra as últimas tendências em Inteligência Artificial e automação empresarial. Artigos práticos, cases de sucesso e dicas de implementação de IA para empresas.",
  keywords: [
    "blog IA empresarial",
    "artigos automação",
    "inteligência artificial empresas",
    "cases de sucesso IA",
    "implementação IA",
    "automação processos",
    "chatbots empresariais",
    "machine learning negócios",
    "transformação digital",
    "AYTT blog",
    "consultoria IA",
    "soluções IA corporativas",
  ],
  openGraph: {
    title: "Blog AYTT - Insights sobre IA e Automação Empresarial",
    description:
      "Artigos especializados sobre implementação de IA em empresas, automação de processos e transformação digital.",
    type: "website",
    url: "https://aytt.tech/blog",
    images: [
      {
        url: "/blog/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog AYTT - Insights sobre IA e Automação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog AYTT - Insights sobre IA e Automação Empresarial",
    description: "Artigos especializados sobre implementação de IA em empresas e automação de processos.",
    images: ["/blog/blog-og-image.jpg"],
  },
  alternates: {
    canonical: "https://aytt.tech/blog",
  },
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2)
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 6)

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogHeader />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 relative bg-gradient-to-b from-blue-900/20 via-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Blog{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">AYTT</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Insights práticos sobre IA e automação empresarial. Aprenda com cases reais e implemente soluções que
              geram resultados.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artigos sobre IA, automação, cases..."
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-black to-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Artigos em <span className="text-blue-400">Destaque</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 transform hover:scale-105">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {post.publishedAt}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Artigos <span className="text-blue-400">Recentes</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                  Carregar Mais Artigos
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Receba Insights sobre <span className="text-blue-400">IA Empresarial</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Cadastre-se e receba semanalmente artigos exclusivos sobre implementação de IA e automação em empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog AYTT",
            description: "Insights práticos sobre IA e automação empresarial",
            url: "https://aytt.tech/blog",
            publisher: {
              "@type": "Organization",
              name: "AYTT - Assemble Your Tech Team",
              logo: {
                "@type": "ImageObject",
                url: "https://aytt.tech/logo.png",
              },
            },
            blogPost: blogPosts.slice(0, 5).map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://aytt.tech/blog/${post.slug}`,
              datePublished: post.publishedAt,
              author: {
                "@type": "Person",
                name: post.author,
              },
              image: post.image,
            })),
          }),
        }}
      />
    </div>
  )
}
