"use client"
import { useState, useEffect } from "react"
import { Shield, ExternalLink } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Garantir que estamos no cliente
    setIsClient(true)

    // Verificar se o usuário já aceitou os cookies
    if (typeof window !== "undefined") {
      const hasAccepted = localStorage.getItem("aytt-cookies-accepted")
      if (!hasAccepted) {
        setIsVisible(true)
      }
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aytt-cookies-accepted", "true")
    }
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  // Não renderizar no servidor
  if (!isClient || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md border-t border-white/20 shadow-2xl animate-slideInUp">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Conteúdo principal */}
          <div className="flex items-center gap-3 flex-1">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-1.5 flex-shrink-0">
              <Shield className="h-4 w-4 text-white" />
            </div>

            <div className="flex-1">
              <p className="text-gray-300 text-xs sm:text-sm">
                Utilizamos cookies para melhorar sua experiência. Ao continuar, você aceita nossa{" "}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openPrivacyPolicy"))}
                  className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 transition-colors duration-300"
                >
                  Política de Privacidade
                  <ExternalLink className="h-3 w-3" />
                </button>{" "}
                e{" "}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openConsentTerm"))}
                  className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 transition-colors duration-300"
                >
                  Termo de Consentimento
                  <ExternalLink className="h-3 w-3" />
                </button>
                .
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleAccept}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-1.5 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm transform hover:scale-105 whitespace-nowrap"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
