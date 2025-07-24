import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { NavigationItem } from "../../types"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: NavigationItem[]
}

const MobileMenu = ({ isOpen, onClose, navigationItems }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-30 lg:hidden bg-grafitti-gradient backdrop-blur-md pt-20 sm:pt-24 transition-all duration-500 ease-out animate-slideInLeft texture-subtle">
      <nav className="container mx-auto px-4 sm:px-6 flex flex-col space-y-6 sm:space-y-8 py-6 sm:py-8">
        {navigationItems.map((item, index) => (
          <Link
            key={item.key}
            href={'isExternal' in item && item.isExternal ? item.href! : `#${item.key}`}
            className="text-lg sm:text-xl font-medium border-b border-gray-800 pb-3 sm:pb-4 flex justify-between items-center transform hover:translate-x-4 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={onClose}
          >
            <span>{item.label}</span>
            <ChevronRight className="h-5 w-5 text-blue-400 transform hover:translate-x-2 transition-transform duration-300" />
          </Link>
        ))}
        <Link
          href="https://wa.me/5543999108255"
          target="_blank"
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium text-center mt-4 transform hover:scale-105 transition-all duration-300"
          onClick={onClose}
        >
          WhatsApp
        </Link>
      </nav>
    </div>
  )
}

export default MobileMenu