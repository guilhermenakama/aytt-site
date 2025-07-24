"use client"

import { useRef } from "react"
import { useSectionActive } from "../../hooks/useSectionActive"
import Link from "next/link"
import type { SharedSectionProps } from "../../types"
import { READY_CHECKLIST, WHATSAPP_LINKS } from "../../data/constants"

const ReadySection = ({ setActiveSection }: SharedSectionProps) => {
  const readyRef = useRef<HTMLElement>(null)
  useSectionActive(readyRef, "ready", setActiveSection)

  return (
    <section id="ready" ref={readyRef} className="py-16 sm:py-24 relative aytt-bg-primary texture-grunge">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Como saber se é o momento certo{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-gradient-x">
              para ter um time de IA?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mt-2">Você está pronto se...</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {READY_CHECKLIST.map((item, index) => (
            <div
              key={index}
              className="card-success p-4 sm:p-6 text-center animate-on-scroll transform hover:scale-110 hover:-translate-y-4 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container-success w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 transform group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-6 w-6 text-green-400" />
              </div>
              <p className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-3xl p-6 sm:p-8 animate-on-scroll transform hover:scale-105 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400 animate-pulse">A boa notícia?</h3>
          <p className="text-lg sm:text-xl text-gray-300">
            Automatizar pode ser simples — se for feito do jeito certo.
          </p>
        </div>

        <div className="text-center mt-8 animate-on-scroll">
          <Link
            href={WHATSAPP_LINKS.READY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1"
          >
            Estou pronto para automatizar com IA
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReadySection
