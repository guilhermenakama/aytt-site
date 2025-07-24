import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export function BlogHeader() {
  return (
    <header className="bg-grafitti-gradient backdrop-blur-md border-b border-white/20 py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Voltar ao Site</span>
          </Link>

          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src="/logos/aytt.png"
                alt="AYTT Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-gray-400 text-sm hidden sm:inline">Assemble Your Tech Team</span>
          </Link>

          <Link
            href="https://wa.me/5543999108255"
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </header>
  )
}