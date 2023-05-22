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

const Projects = () => {
  const dorav4Desc =
    "Disaster Online Reporting Application (DORA) version 4 is an Android-based mobile application that allows users to easily and quickly report disasters in real-time. With this app, users can provide critical information about the disaster, including its location, type, and images allowing emergency responders to emergency responders to quickly and effectively respond to the situation.";
  return (
    <div className="">
      {/* My Works */}
      <h1 className="font-bold text-3xl">Projects</h1>
      <div className="mt-4 grid grid-cols-2">
        <h1>DORA</h1>
        <h1>imaginkraf</h1>
      </div>
      <div className="mt-4">
        <ProjectItem
          title="Disaster Online Reporting Application v4"
          image={dorav4}
          tags={["JavaScript", "ReactJS", "Firebase", "Google Maps API"]}
          description={dorav4Desc}
        />
      </div>
    </div>
  );
};

const companies = [
  {
    id: "SYMPH",
    role: "Software Developer Intern",
    duration: "Jan 2023 - Present",
    name: "Symph Co.",
    link: "https://www.symph.co/",
    description: [
      "Worked on various projects for Company 1.",
      "Worked on various projects for Company 1.",
      "Worked on various projects for Company 1.",
    ],
  },
  {
    id: "OMDENA",
    role: "Junior Machine Learning Engineer",
    duration: "Dec 2022 - Present",
    name: "Omdena",
    link: "https://omdena.com/",
    description: [
      "Developed and maintained web applications using React and Node.js.",
      "Implemented various features and improvements to existing applications.",
      "Collaborated with team members to meet project requirements and deadlines.",
    ],
  },
];

interface Company {
  id: string;
  role: string;
  duration: string;
  name: string;
  link: string;
  description: string[];
}

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState<Company>({
    ...companies[0],
  });

  const handleClick = (company: Company) => {
    setActiveCompany(company);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Experience</h1>
      <div className="flex flex-row">
        {/* Left Side */}
        <div className="w-1/4 p-4">
          <ul className="">
            {companies.map((company) => (
              <li key={company.id} className="">
                <button
                  className={`${
                    activeCompany.id === company.id
                      ? "bg-emerald-50 text-emerald-600 border-l-green-600"
                      : "border-l-gray-300"
                  } border-l-2 transition-all duration-500 w-full p-2 text-left`}
                  onClick={() => handleClick(company)}
                >
                  {company.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Side */}
        <div className="w-3/4 p-4">
          <h2 className="text-2xl font-bold">
            {activeCompany?.role}{" "}
            <span className="text-gray-600">
              @{" "}
              <Link
                href={activeCompany?.link}
                target="_blank"
                className="transition hover:text-emerald-600"
              >
                {activeCompany?.name}
              </Link>
            </span>
          </h2>
          <p className="text-gray-400">{activeCompany?.duration}</p>
          <ul className="mt-2">
            {activeCompany.description.map((description, key) => {
              return (
                <div key={key} className="flex items-center space-x-2">
                  <MdKeyboardArrowRight className="text-emerald-600 text-xl" />
                  <li>{description}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
