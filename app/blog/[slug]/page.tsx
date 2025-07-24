import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, Eye } from "lucide-react"
import { BlogHeader } from "../components/blog-header"
import { BlogSidebar } from "../components/blog-sidebar"
import { RelatedPosts } from "../components/related-posts"
import { blogPosts } from "../data/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post não encontrado - Blog AYTT",
      description: "O post que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${post.title} | Blog AYTT`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://aytt.tech/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://aytt.tech/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogHeader />

      {/* Breadcrumbs */}
      <nav className="py-4 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">{post.title}</span>
          </div>
        </div>
      </nav>

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Back Button */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Blog
              </Link>

              {/* Post Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

                <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} visualizações</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gray-400">Compartilhar:</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative h-64 sm:h-96 mb-8 rounded-2xl overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Post Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                    <p className="text-gray-300 mb-4">
                      Especialista em IA e automação empresarial na AYTT. Ajuda empresas a implementarem soluções
                      práticas de inteligência artificial.
                    </p>
                    <Link href="/contato" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Entre em contato →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "AYTT - Assemble Your Tech Team",
              logo: {
                "@type": "ImageObject",
                url: "https://aytt.tech/logo.png",
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://aytt.tech/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
            articleSection: post.category,
            wordCount: post.content.split(" ").length,
          }),
        }}
      />
    </div>
  )
}
