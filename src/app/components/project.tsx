"use client"

import { motion } from "framer-motion"

export default function Project() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-t from-[#a855f7]/10 to-transparent">
      <div className="max-w-4xl mx-auto bg-[#1a1f3a] p-10 sm:p-14 rounded-3xl shadow-2xl text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight"
        >
          Projects 🚀
        </motion.h1>

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[#00d4ff] text-2xl sm:text-3xl font-bold block mb-5"
        >
          What I’ve Been Building
        </motion.span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 mb-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Yo 👋 I’m a passionate{" "}
          <span className="text-[#00d4ff] font-semibold">Frontend Web Developer</span> skilled in building
          modern, responsive, and dynamic web applications. I work with{" "}
          <span className="text-[#a855f7] font-semibold">React</span>,{" "}
          <span className="text-[#38bdf8] font-semibold">Tailwind CSS</span>, and a bunch of other modern tools
          to bring designs to life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 mb-10 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          My projects range from personal portfolios to full e-commerce systems and creative web experiments.
          Every project reflects a mix of design, performance, and clean UI vibes ✨
        </motion.p>

        {/* Button */}
        <motion.a
          href="/project/projectlist"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className=" no-underline inline-block px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#ff006e] text-white text-lg sm:text-xl rounded-xl font-semibold hover:shadow-lg hover:shadow-[#a855f7]/40 transition-all"
        >
          View Projects
        </motion.a>
      </div>
    </section>
  )
}