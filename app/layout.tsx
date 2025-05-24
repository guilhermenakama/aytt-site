import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AYTT - Assemble Your Tech Team',
  description: 'Conectamos sua empresa aos melhores profissionais de tecnologia do mercado. Times sob medida, alocação rápida e resultados garantidos.',
  keywords: ['desenvolvimento', 'tecnologia', 'times', 'desenvolvedores', 'tech team'],
  authors: [{ name: 'AYTT' }],
  creator: 'AYTT',
  publisher: 'AYTT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}