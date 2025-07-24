import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import { XCircle, CheckCircle } from "lucide-react"
import { SharedSectionProps } from "../../types"

const ArchitectureSection = ({ setActiveSection }: SharedSectionProps) => {
  const architectureRef = useRef<HTMLElement>(null)
  useSectionActive(architectureRef, "architecture", setActiveSection)

  const simpleArchitecture = [
    "Modelo único para múltiplas tarefas",
    "Sem separação de responsabilidades",
    "Consumo excessivo de tokens",
    "Difícil manutenção e escalabilidade",
    "Baixa precisão em tarefas específicas"
  ]

  const robustArchitecture = [
    "Agentes especializados para cada tarefa",
    "Separação clara de responsabilidades",
    "Consumo otimizado de tokens",
    "Fácil manutenção e escalabilidade",
    "Maior precisão em tarefas específicas"
  ]

  return (
    <section id="architecture" ref={architectureRef} className="py-16 sm:py-24 relative aytt-bg-accent texture-concrete">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Arquitetura Simples vs{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              Robusta
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <div className="card-danger p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center mb-4 sm:mb-6">
              <XCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-400 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl sm:text-2xl font-bold text-red-400">Arquitetura Simples</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {simpleArchitecture.map((item, index) => (
                <div key={index} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-success p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center mb-4 sm:mb-6">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl sm:text-2xl font-bold text-green-400">Arquitetura Robusta (AYTT)</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {robustArchitecture.map((item, index) => (
                <div key={index} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                  <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pizza Example Section */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
          <div className="card p-6 sm:p-8 md:p-12 transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500 group">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              O erro mais comum em projetos de IA explicado com... 
              <span className="text-blue-400">pizza 🍕</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors duration-300">
              <p className="text-sm sm:text-base leading-relaxed">
                Imagine uma IA responsável por identificar fatias com calabresa em uma pizza com 100 sabores.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                Mas... calabresa moída vale? E presunto moído? Peperoni é calabresa?
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                Como se trata de um software probabilístico, ela consome muitos tokens (moeda consumida pela IA durante o processamento) e por vezes trazendo resultados incorretos.
              </p>
              
              <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20 mt-6">
                <p className="text-sm sm:text-base leading-relaxed text-green-300">
                  <strong>Nossa solução:</strong> Quando dividimos a pizza de 100 sabores em várias pizzas de 2 sabores, aumentamos a complexidade da arquitetura do software mas simplificamos muito a complexidade da tarefa atribuída à IA (agentes super especializados).
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-green-300 mt-2">
                  Com isso, aumentamos a taxa de acerto reduzindo o custo do processamento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 animate-on-scroll">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Veja algumas aplicações práticas, pensadas para gerar <strong className="text-white">valor real no dia a dia da sua empresa.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureSection