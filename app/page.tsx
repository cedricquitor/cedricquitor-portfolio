"use client";
import Link from "next/link";
import Button from "../components/Button/Button";

import Image from "next/image";

import ProjectItem from "../components/ProjectItem";
import { dorav4 } from "../public/images/project";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTwitter, BsMedium } from "react-icons/bs";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const AwardsAndCertificates = () => {
  // Hardcoded certification data for demonstration
  const certifications = [
    {
      id: 1,
      title: "Certification 1",
      organization: "Organization A",
      date: "May 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: "/organization-a-logo.png", // Replace with the actual path of the organization's logo image in your Next.js project
    },
    {
      id: 2,
      title: "Certification 2",
      organization: "Organization B",
      date: "July 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: "/organization-b-logo.png", // Replace with the actual path of the organization's logo image in your Next.js project
    },
    // Add more certification objects as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="grid gap-6">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {certification.title}
              </h3>
              <p className="text-emerald-500 mb-4">
                {certification.organization}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Achieved: {certification.date}
              </p>
              <p className="text-gray-800">{certification.description}</p>
            </div>
            <div className="ml-4">
              <Image
                src={certification.logo}
                alt={`${certification.organization} Logo`}
                width={48}
                height={48}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center">
        Let&apos;s work together
      </h1>
      <div className="mt-6 flex text-3xl space-x-8 justify-center items-center text-slate-400">
        <BsLinkedin className="transition hover:text-emerald-600 cursor-pointer" />
        <BsGithub />
        <BsTwitter />
        <BsMedium />
      </div>
      <p className="mt-6 text-center">
        I&apos;m always open to discussing software engineering work or
        partnership opportunities
      </p>
      <Link href="https://cal.com/cedricquitor/" target="_blank">
        <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl mx-auto mt-6">
          Schedule a call
        </Button>
      </Link>
      <p className="text-gray-400 text-center mt-2">
        or{" "}
        <Link href="https://www.linkedin.com/in/cedricquitor/" target="_blank">
          <span className="font-bold transition hover:text-emerald-600">
            connect
          </span>
        </Link>{" "}
        with me instead
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Main Content Area */}
      <div className="flex flex-col mt-[20vh]">
        <Hero />
        <hr className="mt-24" />
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
