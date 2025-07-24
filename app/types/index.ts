import { Dispatch } from "react"

export type SectionId =
  | "home"
  | "urgency"
  | "philosophy"
  | "experience"
  | "team"
  | "challenge"
  | "architecture"
  | "solutions"
  | "additional"
  | "ready"
  | "contact"

export type SharedSectionProps = {
  activeSection?: SectionId  // ← MUDANÇA: Agora é opcional
  setActiveSection: (sectionId: SectionId) => void
}

export type Founder = {
  name: string
  role: string
  description: string
  image: string
}

export type ServiceItem = {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export type Solution = {
  title: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
}

export type AdditionalService = {
  title: string
  services: string[]
  icon: React.ComponentType<{ className?: string }>
}

export type TeamRole = {
  title: string
  description: string
  responsibilities: string[]
  icon: React.ComponentType<{ className?: string }>
}

export type FormData = {
  nome: string
  email: string
  empresa: string
  projeto: string
}

export type FooterProps = {
  setShowPrivacyPolicy: (value: boolean) => void;
  setShowConsentTerm: (value: boolean) => void;
};

export type HeaderProps = {
  isScrolled: boolean
  activeSection: SectionId
  setActiveSection: (sectionId: SectionId) => void
}

export type NavigationItem =
  | { key: SectionId; label: string }
  | { key: string; label: string; isExternal: true; href: string }

// Tipo específico para ContactSection (precisa de props extras)
export type ContactSectionProps = {
  activeSection?: SectionId
  setActiveSection: (sectionId: SectionId) => void
  setShowPrivacyPolicy: (show: boolean) => void
  setShowConsentTerm: (show: boolean) => void
}