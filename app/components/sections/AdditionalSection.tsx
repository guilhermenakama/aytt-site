import { useRef } from "react";
import { useSectionActive } from "../../hooks/useSectionActive";
import { CheckCircle } from "lucide-react"
import { SharedSectionProps } from "../../types"
import { ADDITIONAL_SERVICES } from "../../data/constants.ts"

const AdditionalSection = ({ setActiveSection }: SharedSectionProps) => {
  const additionalRef = useRef<HTMLElement>(null)
  useSectionActive(additionalRef, "additional", setActiveSection)

  return (
    <section id="additional" ref={additionalRef} className="py-16 sm:py-24 relative section-bg-dark texture-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Serviços{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              Adicionais
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Além da solução, oferecemos o apoio necessário para que a IA funcione de verdade no seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {ADDITIONAL_SERVICES.map((service, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:-translate-y-4 group"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="icon-container mr-3 sm:mr-4 transform group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {service.services.map((item, i) => (
                  <div key={i} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                    <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdditionalSection