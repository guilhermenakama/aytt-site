import { useEffect } from "react";
import type { SectionId } from "../types";

export function useSectionActive(
  ref: React.RefObject<HTMLElement>,
  sectionId: string,
  setActiveSection: (id: SectionId) => void
) {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sectionId as SectionId);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, sectionId, setActiveSection]);
}
