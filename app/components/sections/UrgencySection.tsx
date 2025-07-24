import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import { SharedSectionProps } from "../../types"
import { URGENCY_INDICATORS } from "../../data/constants.ts"

const UrgencySection = ({ setActiveSection }: SharedSectionProps) => {
  const urgencyRef = useRef<HTMLElement>(null)
  useSectionActive(urgencyRef, "urgency", setActiveSection)

  return (
    <section id="urgency" ref={urgencyRef} className="py-16 sm:py-24 relative section-bg-blue texture-grunge">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            O Mercado Está{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text animate-gradient-x">
              Mudando Rápido
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl px-4">
            A IA deixou de ser tendência. Agora é uma <strong>decisão estratégica</strong>.
            <br />
            <span className="block mt-4 font-semibold text-white">
              Se você sente que...
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {URGENCY_INDICATORS.map((indicator, index) => (
            <div
              key={index}
              className="card-info p-6 sm:p-8 text-center transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 animate-on-scroll group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-container w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 transform group-hover:scale-110 transition-all duration-300">
                {indicator.icon}
              </div>
              <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{indicator.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-6 sm:p-8 animate-on-scroll transform hover:scale-105 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Então é o momento de você conhecer a{" "}
            <span className="text-blue-400 animate-pulse">AYTT</span>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default UrgencySection