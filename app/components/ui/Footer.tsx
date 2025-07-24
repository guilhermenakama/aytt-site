import { Instagram, MessageCircle } from "lucide-react"
import { FooterProps } from "../../types"

const Footer = ({ setShowPrivacyPolicy, setShowConsentTerm }: FooterProps) => {
  return (
    <footer className="py-12 sm:py-16 bg-grafitti-gradient border-t border-white/10 texture-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6 sm:mb-8 animate-on-scroll">
            <div className="text-xl sm:text-2xl font-bold transform hover:scale-110 transition-transform duration-300">
              <span className="text-blue-400 animate-pulse">AYTT</span>
              <span className="text-gray-400 text-xs sm:text-sm ml-2">Assemble Your Tech Team</span>
            </div>
          </div>

          <p className="text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4 animate-on-scroll">
            Transformando complexidade em resultado. A tecnologia deveria simplificar, não complicar.
          </p>

          {/* Ícones sociais e links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8 animate-on-scroll">
            {/* Redes sociais */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://instagram.com/aytt.tech" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://wa.me/5543999108255" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            
            {/* Separador visual (apenas em desktop) */}
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            
            {/* Links de política */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs sm:text-sm font-medium transform hover:scale-105"
              >
                Política de Privacidade
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setShowConsentTerm(true)}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs sm:text-sm font-medium transform hover:scale-105"
              >
                Termos de Uso
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 animate-on-scroll">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} AYTT - Assemble Your Tech Team. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 animate-pulse">
              Clareza • Transparência • Resultado
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer