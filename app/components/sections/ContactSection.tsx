import { useState, useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import Link from "next/link"
import { ArrowRight, Mail, Check } from "lucide-react"
import { SharedSectionProps, FormData } from "../../types"
import { WHATSAPP_LINKS, CONTACT_INFO } from "../../data/constants"

const ContactSection = ({ setActiveSection }: SharedSectionProps) => {
  const contactRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    empresa: '',
    projeto: ''
  })
  const [consentimentoAceito, setConsentimentoAceito] = useState(false)
  const [enviandoEmail, setEnviandoEmail] = useState(false)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showConsentTerm, setShowConsentTerm] = useState(false)
  useSectionActive(contactRef, "contact", setActiveSection)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const enviarEmail = () => {
    if (!consentimentoAceito) {
      alert('Por favor, aceite os termos de consentimento para continuar.')
      return
    }

    if (!formData.nome || !formData.email || !formData.empresa) {
      alert('Por favor, preencha pelo menos Nome, E-mail e Empresa.')
      return
    }

    setEnviandoEmail(true)

    const assunto = `Contato AYTT - ${formData.empresa}`
    const corpo = `
      Olá! Recebi um novo contato através do site da AYTT:

      DADOS DO CONTATO:
      ━━━━━━━━━━━━━━━━━━━━━━━━━
      📋 Nome: ${formData.nome}
      📧 E-mail: ${formData.email}
      🏢 Empresa: ${formData.empresa}

      PROJETO DE AUTOMAÇÃO:
      ━━━━━━━━━━━━━━━━━━━━━━━━━
      ${formData.projeto || 'Não especificado'}

      ━━━━━━━━━━━━━━━━━━━━━━━━━
      ✅ Consentimento LGPD: Aceito
      📅 Data/Hora: ${new Date().toLocaleString('pt-BR')}
      🌐 Origem: Site AYTT (aytt.com.br)
        `.trim()

    const mailtoLink = `mailto:${CONTACT_INFO.EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setEnviandoEmail(false)
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        projeto: ''
      })
      setConsentimentoAceito(false)
    }, 1000)
  }

  const readyChecklistItems = [
    "Tem processos repetitivos consumindo tempo da equipe",
    "Já pensou em IA mas não sabe por onde começar",
    "Perde oportunidades por lentidão operacional",
    "Se frustrou com consultorias que prometem mas não entregam",
    "Quer resultado real ao invés de relatórios bonitos"
  ]

  return (
    <section id="contact" ref={contactRef} className="py-16 sm:py-24 relative aytt-bg-accent texture-concrete">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Pronto para Automatizar com IA{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">Sem Dor de Cabeça?</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Agende uma reunião conosco e implemente IA na prática, com um time que fala a língua do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <div className="card p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Entre em Contato</h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Projeto de Automação
                </label>
                <textarea
                  rows={4}
                  name="projeto"
                  value={formData.projeto}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Conte-nos sobre seus processos que precisam ser automatizados..."
                ></textarea>
              </div>

              {/* Checkbox de Consentimento */}
              <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentimentoAceito}
                    onChange={(e) => setConsentimentoAceito(e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Aceito os termos de consentimento</strong> e autorizo o tratamento dos meus dados pessoais conforme a{" "}
                    <button
                      type="button"
                      onClick={() => setShowPrivacyPolicy(true)}
                      className="text-blue-400 hover:text-blue-300 underline font-medium"
                    >
                      Política de Privacidade
                    </button>
                    {" "}e{" "}
                    <button
                      type="button"
                      onClick={() => setShowConsentTerm(true)}
                      className="text-blue-400 hover:text-blue-300 underline font-medium"
                    >
                      Termo de Consentimento
                    </button>
                    .
                  </span>
                </label>
              </div>

              {/* Botão de Enviar Email */}
              <button
                onClick={enviarEmail}
                disabled={!consentimentoAceito || enviandoEmail}
                className={`w-full py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex items-center justify-center transform hover:scale-105 hover:-translate-y-1 ${
                  consentimentoAceito && !enviandoEmail
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white cursor-pointer'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {enviandoEmail ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar por E-mail
                  </>
                )}
              </button>

              {/* Nota sobre o envio */}
              <p className="text-xs text-gray-500 text-center">
                * Campos obrigatórios. O e-mail será aberto no seu cliente de e-mail padrão.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll space-y-6 sm:space-y-8">
            <div className="card p-6 sm:p-8 transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Fale Conosco</h3>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-gray-400 mb-2 text-sm sm:text-base">WhatsApp</p>
                  <a
                    href={WHATSAPP_LINKS.MAIN}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    {CONTACT_INFO.WHATSAPP}
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 mb-2 text-sm sm:text-base">E-mail</p>
                  <a
                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                    className="text-base sm:text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    {CONTACT_INFO.EMAIL}
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 mb-2 text-sm sm:text-base">Instagram</p>
                  <a 
                    href="https://instagram.com/aytt.tech" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    {CONTACT_INFO.INSTAGRAM}
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6 sm:p-8 transform hover:scale-105 hover:border-blue-500/30 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Você Está Pronto Quando:</h3>

              <div className="space-y-3 sm:space-y-4">
                {readyChecklistItems.map((item, index) => (
                  <div key={index} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-gray-400 text-sm sm:text-base hover:text-white transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 animate-on-scroll">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Link
              href={WHATSAPP_LINKS.MAIN}
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center text-sm sm:text-base transform hover:scale-110 hover:-translate-y-2 group"
            >
              Agendar Reunião
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              href="https://instagram.com/aytt.tech"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center text-sm sm:text-base transform hover:scale-110 hover:-translate-y-2"
            >
              📱 Seguir no Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection