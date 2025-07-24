import { useEffect } from "react";

export function useSectionActive(ref: React.RefObject<HTMLElement>, sectionId: string, setActiveSection: (id: string) => void) {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) setActiveSection(sectionId);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, sectionId, setActiveSection]);
}