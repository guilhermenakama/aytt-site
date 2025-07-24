import { PoliticaPrivacidade } from "../shared/PoliticaPrivacidade"
import { TermoConsentimento } from "../shared/TermoConsentimento"

interface ModalContainerProps {
  showPrivacyPolicy: boolean
  setShowPrivacyPolicy: (show: boolean) => void
  showConsentTerm: boolean
  setShowConsentTerm: (show: boolean) => void
}

export const ModalContainer = ({
  showPrivacyPolicy,
  setShowPrivacyPolicy,
  showConsentTerm,
  setShowConsentTerm
}: ModalContainerProps) => {
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPrivacyPolicy(false)
      setShowConsentTerm(false)
    }
  }

  return (
    <>
      {/* Modal da Política de Privacidade */}
      {showPrivacyPolicy && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="card border border-white/20 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-grafitti-gradient border-b border-white/20 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Política de Privacidade</h2>
              <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                ✕
              </button>
            </div>
            <PoliticaPrivacidade />
          </div>
        </div>
      )}

      {/* Modal do Termo de Consentimento */}
      {showConsentTerm && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="card border border-white/20 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-grafitti-gradient border-b border-white/20 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Termo de Consentimento</h2>
              <button 
                onClick={() => setShowConsentTerm(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                ✕
              </button>
            </div>
            <TermoConsentimento />
          </div>
        </div>
      )}
    </>
  )
}