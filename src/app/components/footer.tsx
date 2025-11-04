"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Show when 10% of footer is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative text-center py-16 sm:py-20 md:py-24 bg-[#0a0e27] text-gray-400"
    >
      {/* Footer Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
        Stay Connected
      </h2>

      {/* Footer Text */}
      <p className="text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed mb-4">
        © 2025 <span className="text-white font-semibold">Pavel Ahmmed Hridoy</span>. All rights reserved.
      </p>

      <p className="text-xs sm:text-sm max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed text-gray-400">
        Explore my portfolio and projects, and feel free to reach out through the contact page.  
        Built with care and attention to detail for performance and design.
      </p>

      {/* Scroll to top button */}
      {mounted && (
        <AnimatePresence>
          {isVisible && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8
                         bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ff006e]
                         text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg
                         hover:bg-gradient-to-l hover:from-[#ff006e] hover:via-[#a855f7] hover:to-[#00d4ff]
                         transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.button>
          )}
        </AnimatePresence>
      )}
    </footer>
  );
}