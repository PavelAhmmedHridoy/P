"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  upcoming?: boolean;
  publishDate?: string;
  showTime?: boolean;
  visitLink?: string;
}

export default function ProjectCard({
  title,
  description,
  logo,
  upcoming = false,
  publishDate,
  showTime = false,
  visitLink,
}: ProjectCardProps) {
  const [timeText, setTimeText] = useState("");
  const [showMore, setShowMore] = useState(false);

  const disabled = upcoming && (!publishDate || new Date(publishDate) > new Date());

  useEffect(() => {
    if (!publishDate || !showTime) return;
    const update = () => {
      const now = new Date();
      const pub = new Date(publishDate);
      setTimeText(
        pub > now
          ? `${Math.floor((pub.getTime() - now.getTime()) / 1000)}s ⏳`
          : "Live"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [publishDate, showTime]);

  const MAX = 100;
  const isLong = description.length > MAX;
  const displayedText = showMore || !isLong ? description : description.slice(0, MAX) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      transition={{ duration: 0.4, type: "spring" }}
      className={`
        w-full max-w-xs sm:max-w-sm p-6 rounded-3xl 
        bg-gradient-to-b from-[#1a1f3a] to-[#0f172a] 
        shadow-2xl hover:shadow-[#00d4ff]/30 
        flex flex-col items-center text-center transition-all duration-500
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
      `}
    >
      {/* Logo fixed, no bouncing, no border */}
      <motion.img
        src={logo}
        alt={`${title} Logo`}
        className="w-24 h-24 object-contain mb-4 rounded-xl"
      />

      {/* Title */}
      <motion.h3
        className="text-2xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ff006e] bg-clip-text text-transparent tracking-tight"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed">
        {displayedText}
      </p>

      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400 text-sm sm:text-base mb-3"
          >
            This project pushes creativity and performance to the next level ⚡
          </motion.div>
        )}
      </AnimatePresence>

      {/* Read More */}
      {isLong && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
          className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#ff006e] rounded-lg hover:shadow-md hover:shadow-[#a855f7]/50 transition-all w-full mb-2"
        >
          {showMore ? "Show Less" : "Read More"}
        </motion.button>
      )}

      {/* Visit Button */}
      {!disabled && visitLink && (
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#ff006e] rounded-lg hover:shadow-md hover:shadow-[#00d4ff]/50 transition-all w-full mb-2"
        >
          Visit Project 🚀
        </motion.a>
      )}

      {/* Time Info */}
      {publishDate && showTime && (
        <p className="text-gray-400 text-xs sm:text-sm mb-2">{timeText}</p>
      )}

      {/* Upcoming Tag */}
      {disabled && (
        <span className="text-sm font-semibold text-gray-400 bg-[#0f172a] rounded-full px-3 py-1">
          🔒 Upcoming
        </span>
      )}
    </motion.div>
  );
}