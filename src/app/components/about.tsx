"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  // 🧠 Wait until client hydration to render animations (prevents mismatch)
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-t from-[#a855f7]/10 to-transparent">
      <div className="max-w-4xl mx-auto bg-[#1a1f3a] p-10 sm:p-14 rounded-3xl shadow-2xl text-center relative overflow-hidden">

        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/10 via-[#a855f7]/10 to-[#ff006e]/10 blur-2xl animate-pulseSlow"></div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center relative"
        >
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-r from-[#00d4ff]/30 via-[#a855f7]/30 to-[#ff006e]/30 blur-lg animate-pulseSlow"></div>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0a0e27] flex items-center justify-center border-2 border-white/20">
            <span className="text-6xl sm:text-7xl">💻</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-3 text-white"
        >
          Pavel Ahmmed Hridoy
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-3xl text-[#a855f7] font-semibold mb-8"
        >
          Frontend Web Developer
        </motion.h2>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-5 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            I’m a passionate{" "}
            <span className="text-[#00d4ff] font-semibold">Frontend Web Developer</span>{" "}
            with over 1.5 years of experience building modern, responsive, and user-friendly web apps.
          </p>
          <p>
            Skilled in{" "}
            <span className="text-[#a855f7] font-semibold">HTML</span>,{" "}
            <span className="text-[#38bdf8] font-semibold">CSS</span>,{" "}
            <span className="text-[#00d4ff] font-semibold">JavaScript</span>,{" "}
            <span className="text-[#a855f7] font-semibold">React</span>, and{" "}
            <span className="text-[#38bdf8] font-semibold">Tailwind CSS</span>, I focus on crafting{" "}
            <strong>clean, scalable, and maintainable code</strong>.
          </p>
          <p>
            My projects include personal portfolios, e-commerce platforms, dashboards, and creative landing pages — all designed with performance and UI polish in mind ✨
          </p>
          <p>
            I love learning new frameworks, optimizing experiences, and pushing the boundaries of what’s possible on the web.
          </p>
          <p>
            My goal? <strong>Create web experiences people remember.</strong> 💡
          </p>
        </motion.div>

        {/* Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="no-underline mt-10 inline-block px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#ff006e] text-white text-lg sm:text-xl rounded-xl font-semibold hover:shadow-lg hover:shadow-[#a855f7]/40 transition-all"
        >
          Continue Scrolling
        </motion.a>
      </div>

      {/* Tailwind custom animation */}
      <style jsx global>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
