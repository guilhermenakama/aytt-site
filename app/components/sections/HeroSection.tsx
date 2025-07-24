import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SharedSectionProps } from "../../types"
import { PAIN_POINTS, WHATSAPP_LINKS } from "../../data/constants.ts"

const HeroSection = ({ activeSection, setActiveSection }: SharedSectionProps) => {
  const heroRef = useRef<HTMLElement>(null)
  useSectionActive(heroRef, "home", setActiveSection)

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-28 md:pt-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 sm:mb-8 animate-slideInUp">
            Cansado de Projetos de IA que{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text animate-pulse">
              Não Saem do Papel?
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 px-4 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            <strong>Se você já investiu meses em um projeto de IA e...</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-5xl mx-auto">
            {PAIN_POINTS.map((point, index) => (
              <div
                key={index}
                className="card-danger p-4 sm:p-6 transform hover:scale-105 hover:-translate-y-2 hover:bg-red-900/20 transition-all duration-300 animate-slideInUp group cursor-pointer"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="text-red-400 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-all duration-300">
                    {point.icon}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{point.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 sm:mb-10 text-red-400 px-4 animate-slideInUp animate-pulse" style={{ animationDelay: '1.2s' }}>
            Você já passou por algo assim?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-slideInUp" style={{ animationDelay: '1.5s' }}>
            <Link
              href={WHATSAPP_LINKS.HERO}
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center text-sm sm:text-base transform hover:scale-110 hover:-translate-y-2 group"
            >
              Quero Implementar IA na Minha Empresa
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-green-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}

export default HeroSection