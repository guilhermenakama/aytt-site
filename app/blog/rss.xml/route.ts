import { blogPosts } from "../data/blog-posts"

export async function GET() {
  const baseUrl = "https://aytt.tech"

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog AYTT - Insights sobre IA e Automação Empresarial</title>
    <description>Artigos especializados sobre implementação de IA em empresas, automação de processos e transformação digital.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>contato@aytt.tech (AYTT Team)</managingEditor>
    <webMaster>contato@aytt.tech (AYTT Team)</webMaster>
    
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>contato@aytt.tech (${post.author})</author>
      <category>${post.category}</category>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
