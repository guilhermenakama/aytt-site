import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AYTT - Alocação de Times de IA para Empresas | Automação Inteligente",
  description: "Transforme seu negócio com times especializados em IA e automação. Sem escopo engessado, com resultados reais. Ideal para diretores e empresários que buscam eficiência operacional.",
  keywords: [
    "alocação de times IA",
    "automação empresarial",
    "inteligência artificial para empresas",
    "consultoria IA",
    "times especializados IA",
    "automação de processos",
    "soluções IA corporativas",
    "AYTT",
    "squad IA",
    "transformação digital",
    "eficiência operacional",
    "redução de custos",
    "chatbots empresariais",
    "análise de dados IA",
    "atendimento automatizado"
  ],
  authors: [{ name: "AYTT - Assemble Your Tech Team" }],
  creator: "AYTT",
  publisher: "AYTT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aytt.tech",
    siteName: "AYTT - Assemble Your Tech Team",
    title: "AYTT - Times Especializados em IA para Empresas",
    description: "Alocação de times de IA e automação para empresas. Sem escopo engessado, com resultados reais. Transforme processos repetitivos em vantagem competitiva.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AYTT - Assemble Your Tech Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AYTT - Times Especializados em IA para Empresas",
    description: "Alocação de times de IA e automação para empresas. Sem escopo engessado, com resultados reais.",
    images: ["/logo.png"],
    creator: "@aytt.tech",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
  classification: "Business Services",
  other: {
    "business:contact_data:street_address": "Brasil",
    "business:contact_data:locality": "Londrina",
    "business:contact_data:region": "PR",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": "+5543999108255",
    "business:contact_data:website": "https://aytt.tech",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://aytt.tech" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#4facfe" />
        <meta name="msapplication-TileColor" content="#4facfe" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AYTT - Assemble Your Tech Team",
              "alternateName": "AYTT",
              "url": "https://aytt.tech",
              "logo": "https://aytt.tech/logo.png",
              "description": "Alocação de times especializados em IA e automação para empresas. Transformamos processos repetitivos em vantagem competitiva.",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Guilherme Nakama",
                  "jobTitle": "Sócio Fundador",
                  "description": "Especialista em soluções práticas de IA e automação"
                },
                {
                  "@type": "Person", 
                  "name": "Rodolfo Spigai",
                  "jobTitle": "Sócio Fundador",
                  "description": "25 anos de advocacia empresarial, especialista em LGPD e Direito Digital"
                },
                {
                  "@type": "Person",
                  "name": "Ronaldo Sirosse", 
                  "jobTitle": "Sócio Fundador",
                  "description": "10+ anos em desenvolvimento de software e Segurança da Informação"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-43-99910-8255",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://instagram.com/aytt.tech",
                "https://wa.me/5543999108255"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Brasil"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de IA e Automação",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Alocação de Times de IA",
                      "description": "Times especializados em desenvolvimento de soluções de IA para empresas"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automação de Processos",
                      "description": "Automação inteligente de processos empresariais com IA"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Consultoria em IA",
                      "description": "Consultoria estratégica para implementação de IA em empresas"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "AYTT - Assemble Your Tech Team",
              "image": "https://aytt.tech/logo.png",
              "description": "Especialistas em alocação de times de IA e automação para empresas. Transformamos desafios operacionais em vantagem competitiva através de soluções inteligentes.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "PR",
                "addressLocality": "Londrina"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.3045,
                "longitude": -51.1696
              },
              "url": "https://aytt.tech",
              "telephone": "+55-43-99910-8255",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "serviceType": "Tecnologia da Informação",
              "areaServed": "BR",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Soluções de IA Empresarial",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Squad Essencial de IA",
                      "description": "Time básico para empresas iniciando com IA"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Squad Pro de IA",
                      "description": "Time avançado para empresas em crescimento"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Squad Enterprise de IA", 
                      "description": "Soluções personalizadas para grandes corporações"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

