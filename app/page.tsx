"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"

// Dynamic imports para componentes que podem ter problemas de SSR
const ModalContainer = dynamic(
  () => import("./components/ui/ModalContainer").then((mod) => ({ default: mod.ModalContainer })),
  { ssr: false },
)

const CookieBanner = dynamic(() => import("./components/shared/CookieBanner"), { ssr: false })

// Importe suas sections na ordem desejada
import HeroSection from "./components/sections/HeroSection"
import PhilosophySection from "./components/sections/PhilosophySection"
import FoundersSection from "./components/sections/FoundersSection"
import TeamSection from "./components/sections/TeamSection"
import SolutionsSection from "./components/sections/SolutionsSection"
import AdditionalSection from "./components/sections/AdditionalSection"
import ArchitectureSection from "./components/sections/ArchitectureSection"
import PracticalSection from "./components/sections/PracticalSection"
import ChallengeSection from "./components/sections/ChallengeSection"
import ReadySection from "./components/sections/ReadySection"
import UrgencySection from "./components/sections/UrgencySection"
import ContactSection from "./components/sections/ContactSection"

import type { SectionId } from "./types"

export default function HomePage() {
  // Estado global para navegação/menu
  const [activeSection, setActiveSection] = useState<SectionId>("home")
  const [isScrolled, setIsScrolled] = useState(false)

  // Estado global para modais
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showConsentTerm, setShowConsentTerm] = useState(false)

  // Hook para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hook para animações de scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Header isScrolled={isScrolled} activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <HeroSection activeSection={activeSection} setActiveSection={setActiveSection} />
        <PhilosophySection setActiveSection={setActiveSection} />
        <FoundersSection setActiveSection={setActiveSection} />
        <TeamSection setActiveSection={setActiveSection} />
        <SolutionsSection setActiveSection={setActiveSection} />
        <AdditionalSection setActiveSection={setActiveSection} />
        <ArchitectureSection setActiveSection={setActiveSection} />
        <PracticalSection setActiveSection={setActiveSection} />
        <ChallengeSection setActiveSection={setActiveSection} />
        <ReadySection setActiveSection={setActiveSection} />
        <UrgencySection setActiveSection={setActiveSection} />
        <ContactSection
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setShowPrivacyPolicy={setShowPrivacyPolicy}
          setShowConsentTerm={setShowConsentTerm}
        />
      </main>
      <Footer setShowPrivacyPolicy={setShowPrivacyPolicy} setShowConsentTerm={setShowConsentTerm} />
      <ModalContainer
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
        showConsentTerm={showConsentTerm}
        setShowConsentTerm={setShowConsentTerm}
      />
      <CookieBanner />
    </>
  )
}
