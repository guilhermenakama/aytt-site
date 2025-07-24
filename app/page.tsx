"use client"

import { useState } from "react";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ModalContainer from "./components/ui/ModalContainer";

// Importe suas sections na ordem desejada
import HeroSection from "./components/sections/HeroSection";
import PhilosophySection from "./components/sections/PhilosophySection";
import FoundersSection from "./components/sections/FoundersSection";
import TeamSection from "./components/sections/TeamSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import AdditionalSection from "./components/sections/AdditionalSection";
import ArchitectureSection from "./components/sections/ArchitectureSection";
import PracticalSection from "./components/sections/PracticalSection";
import ChallengeSection from "./components/sections/ChallengeSection";
import ReadySection from "./components/sections/ReadySection";
import UrgencySection from "./components/sections/UrgencySection";
import ContactSection from "./components/sections/ContactSection";
// ...adicione outras sections aqui

export default function HomePage() {
  // Estado global para navegação/menu
  const [activeSection, setActiveSection] = useState("home");
  // Estado global para modais
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showConsentTerm, setShowConsentTerm] = useState(false);
  // (se quiser: controle de scroll, carregamento, etc.)

  return (
    <>
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        // ...demais props
      />
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
        <ContactSection setActiveSection={setActiveSection} 
          setShowPrivacyPolicy={setShowPrivacyPolicy}
          setShowConsentTerm={setShowConsentTerm}
        />
        {/* ...adicione outras sections na ordem desejada */}
      </main>
      <Footer 
        setShowPrivacyPolicy={setShowPrivacyPolicy}
        setShowConsentTerm={setShowConsentTerm}
      />
      <ModalContainer
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
        showConsentTerm={showConsentTerm}
        setShowConsentTerm={setShowConsentTerm}
      />
    </>
  );
}
