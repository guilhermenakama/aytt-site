import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { HeaderProps, NavigationItem } from "../../types"
import MobileMenu from "./MobileMenu"

const Header = ({ isScrolled, activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems: NavigationItem[] = [
    { key: "home", label: "Início" },
    { key: "philosophy", label: "Filosofia" },
    { key: "experience", label: "Experiência" },
    { key: "team", label: "Time" },
    { key: "solutions", label: "Soluções" },
    { key: "blog", label: "Blog", isExternal: true, href: "/blog" },
    { key: "contact", label: "Contato" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-grafitti-gradient backdrop-blur-md py-2 sm:py-4 shadow-grafitti" 
            : "py-4 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/aytt.png"
                  alt="AYTT Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-400 text-xs sm:text-sm hidden sm:inline animate-pulse">
                Assemble Your Tech Team
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.isExternal ? item.href! : `#${item.key}`}
                className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
                  activeSection === item.key ? "text-blue-400 scale-110" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.me/5543999108255"
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm transform hover:scale-105 hover:-translate-y-1"
            >
              WhatsApp
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none transform hover:scale-110 transition-transform duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 animate-spin" /> : 
              <Menu className="h-6 w-6 hover:animate-pulse" />
            }
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  )
}

export default Header