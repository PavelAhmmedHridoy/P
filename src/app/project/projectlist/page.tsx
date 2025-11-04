"use client";

import ProjectCard from "./projectlist"; // Import your fixed ProjectCard
import { motion } from "framer-motion";

export default function ProjectListPage() {
  return (
    <section className="p-4 sm:p-6 md:p-10 min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#141b2d] to-[#1a1f3a] text-white flex flex-col items-center gap-6 sm:gap-8">
      
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-center bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ff006e] bg-clip-text text-transparent tracking-tight"
      >
        🚀 Featured Project
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 max-w-2xl text-center mb-6 sm:mb-8 text-lg sm:text-xl"
      >
        Discover my latest innovation — built for performance, design, and scalability.
      </motion.p>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center"
      >
        <ProjectCard
          title="Zorlyth"
          description="Next-gen social platform for chat, video, and community. Build communities, share content, and connect in real-time with friends and colleagues all in one place."
          logo="/zorlyth.jpg"
          showTime={false}       // No countdown, just active/inactive state
          upcoming={true}        // 🔒 Upcoming badge auto-disabled if publishDate passes
          visitLink="https://chatrio.example.com"
        />
      </motion.div>
    </section>
  );
}