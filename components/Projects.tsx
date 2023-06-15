import {
  dorav4,
  imaginkraf,
  botomasino,
  trinkets,
} from "../public/images/project";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const dorav4Desc =
    "Disaster Online Reporting Application (DORA) version 4 is an Android-based mobile application that allows users to easily and quickly report disasters in real-time. With this app, users can provide critical information about the disaster, including its location, type, and images allowing emergency responders to emergency responders to quickly and effectively respond to the situation.";
  return (
    <div className="">
      {/* My Works */}
      <h1 className="font-bold text-3xl">Projects</h1>
      <div className="mt-4 gap-24 flex flex-col md:gap-12">
        <ProjectItem
          title="Disaster Online Reporting Application v4"
          image={dorav4}
          tags={[
            "JavaScript",
            "React",
            "Firebase",
            "Google Maps API",
            "GCP",
            "Android",
            "Java",
          ]}
          description={dorav4Desc}
          award="🥉 This project was awarded Top 3, Best Capstone Award"
        />
        <ProjectItem
          title="Imaginkraf"
          image={imaginkraf}
          tags={[
            "JavaScript",
            "React",
            "Tailwind CSS",
            "DALL·E 2",
            "Node.js",
            "Express",
            "Cloudinary",
          ]}
          description={dorav4Desc}
        />
        <ProjectItem
          title="BOTOmasino"
          image={botomasino}
          tags={[
            "TypeScript",
            "React",
            "Firebase",
            "Google Maps API",
            "Polygon",
            "Solidity",
            "Hardhat",
          ]}
          description={dorav4Desc}
        />
        <ProjectItem
          title="Trinkets of Luna Ecommerce"
          image={trinkets}
          tags={[
            "JavaScript",
            "React",
            "Firebase",
            "Redux",
            "Tailwind CSS",
            "PayMongo",
          ]}
          description={dorav4Desc}
        />
      </div>
    </div>
  );
};

export default Projects;
