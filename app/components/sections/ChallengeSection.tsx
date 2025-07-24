import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import { SharedSectionProps } from "../../types"

const ChallengeSection = ({ setActiveSection }: SharedSectionProps) => {
  const challengeRef = useRef<HTMLElement>(null)
  useSectionActive(challengeRef, "challenge", setActiveSection)

  return (
    <section id="challenge" ref={challengeRef} className="py-16 sm:py-24 relative section-bg-blue texture-grunge">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            O Grande Desafio dos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              Projetos de IA
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Projetos de IA exigem muito mais do que desenvolvimento de software comum
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 animate-on-scroll transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500 group">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
              Eles envolvem elementos com output probabilístico (IA) e maior incerteza técnica. Ao projetar uma arquitetura 
              de solução com IA, é fundamental compreender as limitações e potencialidades para garantir desempenho, 
              escalabilidade e viabilidade financeira.
            </p>
            
            <div className="card-danger p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-3 sm:mb-4 animate-pulse">Problema Comum</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Tratar IA como um "componente mágico que resolve tudo" gera frustração, altos custos de processamento 
                e resultados insatisfatórios.
              </p>
            </div>
          </div>

          {/* Transição integrada */}
          <div className="text-center animate-on-scroll">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-blue-400">
              Como solucionamos esses desafios?
            </h3>
            
            <div className="card-info p-6 sm:p-8 transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500 group">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
                Na AYTT, desenvolvemos uma abordagem que separa elementos determinísticos dos probabilísticos, criando arquiteturas modulares com agentes especializados.
              </p>
              
              <p className="text-lg sm:text-xl font-semibold text-white">
                Veja a diferença na prática:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengeSection