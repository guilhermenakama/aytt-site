import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import { SharedSectionProps } from "../../types"

const PhilosophySection = ({ setActiveSection }: SharedSectionProps) => {
  const philosophyRef = useRef<HTMLElement>(null)
  useSectionActive(philosophyRef, "philosophy", setActiveSection)

  return (
    <section id="philosophy" ref={philosophyRef} className="py-16 sm:py-24 relative section-bg-dark texture-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 italic px-4 transform hover:scale-105 transition-all duration-500">
            "A AYTT nasceu de uma convicção simples: a tecnologia deveria{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              simplificar, não complicar.
            </span>"
          </blockquote>

          <div className="card p-6 sm:p-8 md:p-12 transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500 group">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
              Aristóteles chamava de <em>phronesis</em> — a sabedoria prática que equilibra conhecimento técnico com bom senso humano.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
              Não buscamos extremos: nem a paralisia da complexidade, nem a ilusão da simplicidade absoluta. Nosso foco é o meio-termo virtuoso entre inovação e prudência, entre ambição tecnológica e viabilidade real.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Porque a excelência não está em fazer o mais complexo possível, mas em fazer exatamente o que precisa ser feito.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection