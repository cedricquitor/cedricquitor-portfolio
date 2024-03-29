import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const companies = [
  {
    id: "SYMPH",
    role: "Software Developer Intern",
    duration: "Jan 2023 - Present",
    name: "Symph Co.",
    link: "https://www.symph.co/",
    description: [
      "Collaborated with a team of 7 to deliver software features, including frontend and backend development, for an Interior Design firm's web app, focusing on enhancing shop filters and resolving bugs.",
      "Explored Large Language Models (LLMs) use cases as part of the AI research team.",
      "Engaged in cross-functional project work, actively participating in two teams at Symph Co., one dedicated to an Interior Design firm's project and another focused on AI research.",
    ],
  },
  {
    id: "OMDENA",
    role: "Junior Machine Learning Engineer",
    duration: "Dec 2022 - Present",
    name: "Omdena",
    link: "https://omdena.com/",
    description: [
      "Collaborated with partner UN Habitat to map urban vulnerability areas in the Philippines using open source data.",
      "Implemented K-Nearest Neighbor classification algorithm to determine an area's vulnerabilit.",
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
    <section id="experience">
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
                      : "border-l-gray-300 hover:bg-gray-100"
                  } border-l-2 transition-all duration-500 w-full p-2 text-left text-sm md:text-base`}
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
          <h2 className="text-xl md:text-2xl font-bold">
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
          <p className="text-gray-400 text-sm md:text-base">
            {activeCompany?.duration}
          </p>
          <ul className="mt-2">
            {activeCompany.description.map((description, key) => {
              return (
                <div key={key} className="flex items-center gap-4 mt-2">
                  <MdKeyboardArrowRight
                    className="text-emerald-600 text-xl"
                    height={32}
                    width={32}
                  />
                  <li className="text-base md:text-lg text-left w-full">
                    {description}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Experience;
