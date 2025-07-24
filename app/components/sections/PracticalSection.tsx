import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import { CheckCircle } from "lucide-react"
import { SharedSectionProps } from "../../types"
import { PRACTICAL_SOLUTIONS } from "../../data/constants.ts"

const PracticalSection = ({ setActiveSection }: SharedSectionProps) => {
  const practicalRef = useRef<HTMLElement>(null)
  useSectionActive(practicalRef, "solutions", setActiveSection)

  return (
    <section id="solutions" ref={practicalRef} className="py-16 sm:py-24 relative aytt-bg-secondary texture-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Soluções Práticas com{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              IA
            </span>
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg px-4">
            IA não precisa ser mágica. Precisa ser usada com estratégia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {PRACTICAL_SOLUTIONS.map((solution, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="icon-container mr-3 sm:mr-4 transform group-hover:scale-110 transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">{solution.title}</h3>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Funcionalidades:</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                        <p className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticalSection