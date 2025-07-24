import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import { CheckCircle } from "lucide-react"
import { SharedSectionProps } from "../../types"
import { TEAM_ROLES } from "../../data/constants"

const TeamSection = ({ setActiveSection }: SharedSectionProps) => {
  const teamRef = useRef<HTMLElement>(null)
  useSectionActive(teamRef, "team", setActiveSection)

  return (
    <section id="team" ref={teamRef} className="py-16 sm:py-24 relative aytt-bg-secondary texture-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Time{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              Completo
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {TEAM_ROLES.map((role, index) => (
            <div
              key={index}
              className="card p-6 sm:p-8 animate-on-scroll transform hover:scale-105 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="icon-container mr-3 sm:mr-4 flex-shrink-0 transform group-hover:scale-110 transition-all duration-300">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{role.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">{role.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {role.responsibilities.map((responsibility, i) => (
                  <div key={i} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                    <p className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection