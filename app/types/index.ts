import { ReactNode, Dispatch, SetStateAction, RefObject } from "react"

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
  setActiveSection: Dispatch<SetStateAction<SectionId>>
}

export type IconType = ReactNode

export type Founder = {
  name: string
  role: string
  description: string
  image: string
}

export type ServiceItem = {
  icon: IconType
  text: string
}

export type Solution = {
  title: string
  features: string[]
  icon: IconType
}

export type AdditionalService = {
  title: string
  services: string[]
  icon: IconType
}

export type TeamRole = {
  title: string
  description: string
  responsibilities: string[]
  icon: IconType
}
