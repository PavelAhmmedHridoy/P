"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FC } from "react";
import { Menu, X } from "lucide-react";
import { useSection } from "../context/SectionContext";

interface NavbarProps {
  logo: string;
  ctaLabel?: string;
}

export const Navigation: FC<NavbarProps> = ({ logo, ctaLabel = "Connect Me" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { activeSection, scrollToSection } = useSection();

  useEffect(() => setMounted(true), []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const navLinks = ["home", "skills", "about", "project", "contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 border-b border-[#2a2f4a] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center text-white space-x-3 lg:space-x-5">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSection === id
                    ? "bg-white/20 border border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse"
                    : "hover:bg-white/10"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Desktop Connect Button */}
          <div className="hidden md:flex items-center">
            <Link href="/connect">
              <button className="px-5 py-2 rounded-full text-white bg-white/10 border border-white/30 hover:scale-105 transition-transform">
                {ctaLabel}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0a0e27] border-t border-[#2a2f4a] py-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-full mb-2 text-white transition ${
                  activeSection === id
                    ? "bg-white/20 border border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    : "hover:bg-[#1a1f3a]"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            {/* Mobile Connect Button */}
            <div className="w-full flex justify-center">
  <Link
    href="/connect"
    className="w-[90%] max-w-xs px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white hover:scale-105 transition-transform no-underline text-center"
  >
    {ctaLabel}
  </Link>
</div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24" />
    </>
  );
};