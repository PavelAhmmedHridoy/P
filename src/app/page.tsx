"use client";

import { Navigation } from "./components/navigation";
import Hero from "./components/hero";
import Skills from "./components/skills";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navigation
        logo="/Logo.jpeg"
        ctaLabel="Connect Me"
      />

      <main className="scroll-smooth">

        {/* Hero Section (flush to top) */}
        <section id="home" className="m-0 pt-0 pb-16">
          <Hero />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-mt-16 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
        >
          <Skills />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-16 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
        >
          <About />
        </section>

        {/* Project Section */}
        <section
          id="project"
          className="scroll-mt-16 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
        >
          <Project />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-16 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
        >
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}