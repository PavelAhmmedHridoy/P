"use client"

import { useState } from "react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
} from "react-icons/si"

const skillsData = [
  { name: "HTML", icon: <SiHtml5 size={45} />, color: "from-orange-500 to-red-500" },
  { name: "CSS", icon: <SiCss3 size={45} />, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: <SiJavascript size={45} />, color: "from-yellow-400 to-orange-500" },
  { name: "React", icon: <SiReact size={45} />, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", icon: <SiTypescript size={45} />, color: "from-blue-600 to-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={45} />, color: "from-teal-400 to-blue-500" },
  { name: "Bootstrap", icon: <SiBootstrap size={45} />, color: "from-purple-500 to-indigo-500" },
  { name: "Next.js", icon: <SiNextdotjs size={45} />, color: "from-gray-500 to-gray-700" },
]

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  // Type-safe hover handler
  const handleHover = (name: string | null) => setActiveSkill(name)

  const handleClick = (name: string) => {
    setActiveSkill((prev) => (prev === name ? null : name))
  }

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("skills-container")
    if (container) {
      const scrollAmount = 300
      container.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e27] text-center relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-14 bg-gradient-to-r from-[#a855f7] via-[#00d4ff] to-[#ff006e] text-transparent bg-clip-text animate-pulse">
          Skills 💪
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => handleHover(skill.name)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => handleClick(skill.name)}
              className={`group p-8 rounded-2xl bg-gradient-to-br ${skill.color} opacity-90 cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105 ${
                activeSkill === skill.name
                  ? "scale-110 shadow-[0_0_25px_#00d4ff]"
                  : "scale-100"
              }`}
            >
              <div className="text-5xl mb-4 text-center animate-bounce-slow">
                {skill.icon}
              </div>
              <h3 className="text-white font-bold text-xl text-center tracking-wide">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mt-6">
          <div
            id="skills-container"
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
          >
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => handleHover(skill.name)}
                onMouseLeave={() => handleHover(null)}
                onClick={() => handleClick(skill.name)}
                className={`flex-shrink-0 w-44 p-6 rounded-2xl bg-gradient-to-br ${skill.color} opacity-90 transform transition-transform duration-500 ease-in-out cursor-pointer ${
                  activeSkill === skill.name
                    ? "scale-110 shadow-[0_0_25px_#00d4ff]"
                    : "scale-100"
                }`}
              >
                <div className="text-5xl mb-3 text-center animate-bounce-slow">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-lg text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#1a1f3a] hover:bg-[#2a2f4a] text-[#00d4ff] p-3 rounded-full transition-all text-xl"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#1a1f3a] hover:bg-[#2a2f4a] text-[#00d4ff] p-3 rounded-full transition-all text-xl"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}
