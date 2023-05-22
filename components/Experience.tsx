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
export default Experience;
