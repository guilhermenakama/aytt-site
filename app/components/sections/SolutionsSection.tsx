import React, { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import Link from "next/link"
import { SharedSectionProps } from "../../types"
import { SOLUTION_DIFFERENTIALS, WHATSAPP_LINKS } from "../../data/constants"

const SolutionsSection = ({ setActiveSection }: SharedSectionProps) => {
  const solutionsRef = useRef<HTMLElement>(null)
  useSectionActive(solutionsRef, "methodology", setActiveSection)

  return (
    <section id="methodology" ref={solutionsRef} className="py-16 sm:py-24 relative aytt-bg-primary texture-concrete">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Como Entregamos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              Soluções
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">Alocação de Times de Desenvolvimento de Soluções de IA</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {SOLUTION_DIFFERENTIALS.map((differential, index) => (
            <div
              key={index}
              className="card-info p-4 sm:p-6 text-center animate-on-scroll transform hover:scale-110 hover:-translate-y-4 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 transform group-hover:scale-110 transition-all duration-300">
                {React.createElement(differential.icon, { className: "h-6 w-6 text-purple-400" })}
              </div>
              <p className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{differential.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-3xl p-6 sm:p-8 animate-on-scroll transform hover:scale-105 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400 animate-pulse">
            A Vantagem para o Seu Negócio:
          </h3>
          <p className="text-lg sm:text-xl text-gray-300">
            Soluções personalizadas para a sua empresa, sem escopo engessado - seu projeto cresce e se adapta conforme você descobre novas necessidades
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href={WHATSAPP_LINKS.MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Quero desenvolver uma automação com IA para minha empresa
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection