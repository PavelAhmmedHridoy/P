"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookMessenger, FaEnvelope } from "react-icons/fa";

interface ContactItem {
  icon: React.ReactNode; // ✅ fixed
  value: string;
  link: string;
}

export default function Contact() {
  const contacts: ContactItem[] = [
    { icon: <FaFacebookMessenger className="text-[#00d4ff] text-3xl sm:text-4xl" />, value: "Messenger", link: "https://m.me/pavel.ahmmed.hridoy" },
    { icon: <FaEnvelope className="text-[#00d4ff] text-3xl sm:text-4xl" />, value: "Mail Me", link: "mailto:ahmmedhridoypavel@gmail.com" },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-t from-[#a855f7]/10 to-transparent">
      <div className="max-w-4xl mx-auto bg-[#1a1f3a] p-10 sm:p-14 rounded-3xl shadow-2xl text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">Contact Me</motion.h1>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[#00d4ff] text-2xl sm:text-3xl font-bold block mb-3">Let&apos;s Work Together 💫</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-gray-300 mb-10 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          I&apos;m always interested in new opportunities, collaborations, and interesting projects.
          Let&apos;s connect and discuss how we can bring your ideas to life.
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((c, idx) => (
            <a key={idx} href={c.link} target="_blank" rel="noopener noreferrer" className="no-underline flex items-center justify-center gap-4 p-6 sm:p-7 bg-[#2a2f4a] rounded-xl hover:bg-[#00d4ff]/10 transition-all text-lg sm:text-xl font-semibold">
              {c.icon}
              <span className="text-white">{c.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
