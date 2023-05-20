"use client";

import Link from "next/link";
import Button from "../components/Button/Button";
import {
  typescript_logo,
  reactjs_logo,
  nodejs_logo,
  postgresql_logo,
  python_logo,
  scikitlearn_logo,
  tensorflow_logo,
  flask_logo,
} from "../public/images/techstack";
import memoji from "../public/images/memoji.png";
import Image from "next/image";
import ToolItem from "../components/ToolItem";
import ProjectItem from "../components/ProjectItem";
import { dorav4 } from "../public/images/project";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="h-[65vh]">
      {/* Add grid grid-cols-1 md:grid-cols-2 order-2 md:order-1 when if implementing 3D */}
      {/* Grid 1 - Left */}
      <div className="text-center flex flex-col gap-y-8">
        {/* Image Here (Your emoji) */}
        <div className="flex flex-col items-center gap-y-6">
          <div className="h-32 w-32 bg-[#37b47e] rounded-full flex justify-center items-center">
            <Image src={memoji} alt="Cedric's Memoji" className="h-32 w-auto" />
          </div>
          <h2 className="font-bold text-2xl">Hi, I&apos;m Cedric👋</h2>
        </div>
        <h1 className="text-7xl font-bold">
          Building web and AI/ML applications
        </h1>
        <div className="mt-2">
          <p className="text-2xl">
            a <span className="font-bold">Software Engineer</span> based in
            Manila, PH🇵🇭.
          </p>
          <p className="text-2xl">
            I specialize in developing end-to-end products.
          </p>
        </div>
        <Link href="https://www.linkedin.com/in/cedricquitor/" target="_blank">
          <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl mx-auto mt-6">
            Connect with me
          </Button>
        </Link>
      </div>
      {/* Grid 2 - Right
            <div className="order-1 md:order-2">3D Model Here</div> */}
    </div>
  );
};

const About = () => {
  return (
    <div className="mt-8">
      {/* About Me */}
      <h1 className="font-bold text-3xl">About</h1>
      <p className="mt-4 text-xl">
        Hello there! My name is Cedric Quitor, and I&apos;sm delighted to
        introduce myself as a Software Engineer based in Manila, Philippines 🇵🇭
      </p>
      <p className="mt-2 text-xl">
        I recently completed my{" "}
        <span>Bachelor of Science degree in Information Technology</span> from
        the esteemed <span>University of Santo Tomas</span>. Currently, I am
        focused on <span>pursuing a career in Software Engineering</span>, with
        a keen interest in transitioning to the field of Machine Learning
        Engineering in the future. My passion lies in{" "}
        <span>developing web applications</span> and exploring the world of
        AI/ML applications.
      </p>
      <p className="mt-2 text-xl">
        Throughout my academic journey, I had the privilege of being recognized
        for my efforts and dedication. I am humbled to have been{" "}
        <span>included in the Dean&apos;s List on multiple occasions</span>,
        which reflects my commitment to achieving academic excellence.
        Additionally, I take great pride in being awarded the{" "}
        <span>Top 3 honor for the Best Capstone Project</span>, an
        accomplishment that fuels my curiosity and motivates me to continually
        push the boundaries of innovation.
      </p>
      <p className="mt-2 text-xl">
        I am thrilled by the endless possibilities that lie ahead in the
        software engineering field. The ever-evolving nature of technology
        presents exciting challenges, and I am eager to immerse myself in new
        experiences, acquire further knowledge, and contribute to groundbreaking
        projects.
      </p>
    </div>
  );
};

const Skills = () => {
  const seTools = [
    {
      name: "TypeScript",
      image: typescript_logo,
    },
    {
      name: "ReactJS",
      image: reactjs_logo,
    },
    {
      name: "NodeJS",
      image: nodejs_logo,
    },
    {
      name: "PostgreSQL",
      image: postgresql_logo,
    },
  ];

  const mlTools = [
    {
      name: "Python",
      image: python_logo,
    },
    {
      name: "Scikit-learn",
      image: scikitlearn_logo,
    },
    {
      name: "TensorFlow",
      image: tensorflow_logo,
    },
    {
      name: "Flask",
      image: flask_logo,
    },
  ];

  return (
    <>
      {/* What I do and Tech Stack */}
      <div className="mt-8">
        <h1 className="font-bold text-3xl">Skills</h1>
        <div className="mt-4 space-y-8">
          <div>
            <h2 className="text-2xl">Software Development</h2>
            <p>
              These are the languages and tools I mainly use in creating web
              applications.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4">
              {seTools.map((tool) => (
                <ToolItem key={tool.name} name={tool.name} image={tool.image} />
              ))}
            </div>
          </div>
          {/* Here */}
          <div>
            <h2 className="text-2xl">Machine Learning</h2>
            <p>
              These are the languages and tools I mainly use in experimenting
              with and deploying machine learning models.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4">
              {mlTools.map((tool) => (
                <ToolItem key={tool.name} name={tool.name} image={tool.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
      <h1>Experience</h1>
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
      <h1 className="text-3xl font-bold mb-6 text-center">
        Let&apos;s work together
      </h1>
      <p className="text-center">
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
          <span className="font-bold">connect</span>
        </Link>{" "}
        with me instead
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>Email: cedricjohn.quitor.cics@ust.edu.ph</p>
          <p>Phone: +63 (916) 597 5656</p>
          <p>Location: Manila, Philippines</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Social Media</h3>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/cedricquitor">
              linkedin.com/in/cedricquitor
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/cedricquitor">
              github.com/cedricquitor
            </a>
          </p>
        </div>
      </div>
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
        <Projects />
        <hr className="my-8" />
        <Experience />
        <hr className="my-8" />
        <AwardsAndCertificates />
        <hr className="my-8" />
        <Contact />
      </div>
    </>
  );
}
