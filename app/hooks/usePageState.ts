import { useState, useEffect } from 'react'

export const usePageState = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showConsentTerm, setShowConsentTerm] = useState(false)

  useEffect(() => {
    // Garantir que estamos no cliente antes de adicionar event listeners
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)
      setIsScrolled(newScrollY > 50)

      // Detectar seção ativa baseada no scroll
      const sections = [
        'home', 'urgency', 'philosophy', 'experience', 'methodology', 
        'team', 'challenge', 'architecture', 'solutions', 'additional', 
        'ready', 'contact'
      ]

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId === 'methodology' ? 'solutions' : 
                           sectionId === 'architecture' ? 'solutions' :
                           sectionId === 'experience' ? 'experience' :
                           sectionId === 'urgency' ? 'home' :
                           sectionId)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleOpenPrivacy = () => setShowPrivacyPolicy(true)
    const handleOpenConsent = () => setShowConsentTerm(true)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener('openPrivacyPolicy', handleOpenPrivacy)
    window.addEventListener('openConsentTerm', handleOpenConsent)

    // Initial scroll check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener('openPrivacyPolicy', handleOpenPrivacy)
      window.removeEventListener('openConsentTerm', handleOpenConsent)
    }
  }, [])

  return {
    activeSection,
    setActiveSection,
    isScrolled,
    mousePosition,
    scrollY,
    showPrivacyPolicy,
    setShowPrivacyPolicy,
    showConsentTerm,
    setShowConsentTerm
  }
}