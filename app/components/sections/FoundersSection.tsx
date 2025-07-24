import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import Image from "next/image"
import { SharedSectionProps } from "../../types"
import { FOUNDERS, COMPANY_LOGOS } from "../../data/constants"

const FoundersSection = ({ setActiveSection }: SharedSectionProps) => {
  const foundersRef = useRef<HTMLElement>(null)
  useSectionActive(foundersRef, "founders", setActiveSection)

  return (
    <section id="experience" ref={foundersRef} className="py-16 sm:py-24 relative aytt-bg-accent texture-grunge">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Founders{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              Multidisciplinares
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {FOUNDERS.map((founder, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:-translate-y-4 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <img
                    src={founder.image}
                    alt={`Foto de ${founder.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{founder.name}</h3>
                <p className="text-blue-400 font-medium text-sm sm:text-base animate-pulse">{founder.role}</p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{founder.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 animate-on-scroll transform hover:scale-105 transition-all duration-500">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Experiência dos Fundadores</h3>
          <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
            Nossos fundadores têm experiência em consultoria e serviços tecnológicos para empresas consolidadas no mercado:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {COMPANY_LOGOS.map((logo, index) => (
              <div
                key={logo.name}
                className="bg-white rounded-lg p-4 flex items-center justify-center h-28 transform hover:scale-110 hover:-translate-y-2 hover:rotate-3 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={`/logos/${logo.file}`}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-16 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersSection