"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"

interface SectionContextType {
  activeSection: string
  scrollToSection: (section: string) => void
  setActiveSection: (section: string) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "about", "project", "contact"]
      let currentSection = "home"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = section
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(section)
    }
  }, [])

  return (
    <SectionContext.Provider value={{ activeSection, scrollToSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export function useSection() {
  const context = useContext(SectionContext)
  if (!context) {
    throw new Error("useSection must be used within SectionProvider")
  }
  return context
}
