"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* Main Content Area */}
      <div className="flex flex-col">
        <Hero />
        <hr className="my-8" />
        <About />
        <hr className="my-8" />
        <Skills />
        <hr className="my-8" />
        <Experience />
        <hr className="my-8" />
        <Projects />
        <hr className="my-8" />
        <Contact />
      </div>
    </>
  );
}
