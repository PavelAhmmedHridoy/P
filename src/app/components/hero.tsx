"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const titles = ["Web Designer", "Frontend Developer"];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth > 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let timeout: NodeJS.Timeout;

    if (typingForward) {
      if (text.length < titles[titleIndex].length) {
        timeout = setTimeout(
          () => setText(titles[titleIndex].slice(0, text.length + 1)),
          120
        );
      } else {
        timeout = setTimeout(() => setTypingForward(false), 1200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, text.length - 1)), 60);
      } else {
        setTypingForward(true);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typingForward, titleIndex, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  const circleSize = isDesktop ? "20rem" : "15rem";
  const heroBg = isDesktop ? "/images/hero-large.jpg" : "/images/hero-small.jpg";

  // NEW: Scroll functions
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: `center ${offset * 0.3}px`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-[#a855f7]/20 to-[#ff006e]/20 pointer-events-none" />

      <div
        className="absolute rounded-full blur-3xl animate-pulse"
        style={{
          top: "4rem",
          right: "3rem",
          width: circleSize,
          height: circleSize,
          backgroundColor: "rgba(0,212,255,0.1)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-pulse"
        style={{
          bottom: "4rem",
          left: "3rem",
          width: circleSize,
          height: circleSize,
          backgroundColor: "rgba(255,0,110,0.1)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ff006e] animate-gradientMove">
            Fullstack
          </span>
          <span className="block text-white">
            {text}
            <span className="inline-block animate-blink text-[#00d4ff]">|</span>
          </span>
        </h1>

        <p className="text-gray-300 text-xl sm:text-2xl mb-10 max-w-2xl mx-auto">
          Crafting stunning, responsive web experiences that feel alive on every screen. ⚡
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={() => scrollToSection("project")}
            className="px-10 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full text-[#0a0e27] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 border border-[#00d4ff] rounded-full text-white font-semibold hover:bg-[#00d4ff]/10 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-14 inline-block px-8 py-4 bg-[#1a1f3a]/60 backdrop-blur border border-[#00d4ff]/30 rounded-full">
          <span className="text-gray-300 text-lg">✨ Available for freelance projects</span>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,50%,100%{opacity:1} 25%,75%{opacity:0} }
        .animate-blink { animation: blink 1s infinite; }
        @keyframes gradientMove { 0% {background-position:0%} 100%{background-position:200%} }
        .animate-gradientMove { background-size: 200% auto; animation: gradientMove 4s linear infinite; }
      `}</style>
    </section>
  );
}
