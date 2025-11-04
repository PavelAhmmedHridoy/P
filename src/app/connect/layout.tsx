"use client"; // ensure client-only

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ConnectLayoutProps {
  children: React.ReactNode;
}

interface Particle {
  x: number;
  y: number;
}

export default function ConnectLayout({ children }: ConnectLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);

    // generate particles only after mount to avoid SSR mismatch
    setParticles(
      Array.from({ length: 15 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );
  }, []);

  if (!mounted) return null; // prevent server render

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(135deg, #0a0e27, #001f3f, #0a0e27, #001f3f)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Floating Glow Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm"
            initial={{ x: p.x, y: p.y }}
            animate={{ y: [p.y, p.y + 200, p.y], x: [p.x, p.x + 50, p.x - 50] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="no-underline
          fixed top-6 left-6
          px-5 py-2
          bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ff006e]
          hover:from-[#00bfff] hover:via-[#a14fff] hover:to-[#ff004d]
          rounded-lg text-white font-semibold shadow-lg hover:shadow-xl
          transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-20
        "
      >
        ← Back
      </Link>

      {/* Page Content */}
      <div className="mt-20 w-full max-w-full md:max-w-6xl lg:max-w-7xl xl:max-w-8xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex flex-col items-center z-10">
        {children}
      </div>
    </div>
  );
}