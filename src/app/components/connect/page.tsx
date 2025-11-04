"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaGithub,
  FaFacebookMessenger,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface CardContent {
  title: string;
  description: string;
  icon: React.ReactElement;
  link?: string;
}

interface FloatProps {
  y: number;
  rotation: number;
  speed: number;
}

export default function ConnectPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted)
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-[#0a0e27]">
        Loading...
      </main>
    );

  const contacts: CardContent[] = [
    { title: "GitHub", description: "Explore my projects.", icon: <FaGithub />, link: "https://github.com/PavelAhmmedHridoy077" },
    { title: "WhatsApp", description: "Quick connect.", icon: <FaWhatsapp />, link: "https://wa.me/8801705533875" },
    { title: "Email", description: "Send a message.", icon: <FaEnvelope />, link: "mailto:ahmmedhridoypavel@gmail.com" },

    { title: "LinkedIn", description: "Professional network.", icon: <FaLinkedin />, link: "https://linkedin.com/in/pavel-ahmmed-hridoy-3396b9374" },
    { title: "Facebook", description: "Stay connected.", icon: <FaFacebook />, link: "https://facebook.com/pavel.ahmmed.hridoy" },
    { title: "Messenger", description: "Fast chat.", icon: <FaFacebookMessenger />, link: "https://m.me/pavel.ahmmed.hridoy" },
    { title: "X (Twitter)", description: "Tech insights.", icon: <FaXTwitter />, link: "https://x.com/HridoyAhmm2731" },
  ];

  return (
    <main className="bg-[#0a0e27] text-white min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-10">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10
                   bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ff006e]
                   bg-clip-text text-transparent"
      >
        Let’s Connect & Collaborate 🚀
      </motion.h1>

      {/* Cards Grid */}
      <div className="w-full max-w-full md:max-w-6xl lg:max-w-7xl xl:max-w-8xl
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
                      gap-6 justify-items-center">
        {contacts.map((card, idx) => (
          <FloatingCard key={card.title} card={card} index={idx} />
        ))}
      </div>
    </main>
  );
}

function FloatingCard({ card, index = 0 }: { card: CardContent; index?: number }) {
  const [float, setFloat] = useState<FloatProps>({ y: 0, rotation: 0, speed: 0.05 });

  useEffect(() => {
    const speed = 0.05 + Math.random() * 0.05;
    let t = 0;
    const interval = setInterval(() => {
      t += speed;
      setFloat({ y: Math.sin(t) * 6, rotation: Math.sin(t / 2) * 2, speed });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      >
        <div
          style={{ transform: `translateY(${float.y}px) rotate(${float.rotation}deg)` }}
          className="relative group rounded-2xl overflow-hidden
                     bg-gradient-to-br from-white/10 via-[#00d4ff]/20 to-[#ff006e]/20
                     backdrop-blur-xl border border-white/20
                     w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-52 xl:h-52
                     flex flex-col items-center justify-center
                     transition-all duration-500 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]
                     hover:rotate-[1deg] hover:-translate-y-1"
        >
          <div className="flex flex-col items-center justify-center gap-3 p-4 h-full text-center">
            <div className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-[#00d4ff]">{card.icon}</div>
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      </motion.a>
    </AnimatePresence>
  );
}