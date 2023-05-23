import { dorav4 } from "../public/images/project";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const dorav4Desc =
    "Disaster Online Reporting Application (DORA) version 4 is an Android-based mobile application that allows users to easily and quickly report disasters in real-time. With this app, users can provide critical information about the disaster, including its location, type, and images allowing emergency responders to emergency responders to quickly and effectively respond to the situation.";
  return (
    <div className="">
      {/* My Works */}
      <h1 className="font-bold text-3xl">Projects</h1>
      <div className="mt-4 flex flex-col gap-8">
        <ProjectItem
          title="Disaster Online Reporting Application v4"
          image={dorav4}
          tags={["JavaScript", "React", "Firebase", "Google Maps API", "GCP"]}
          description={dorav4Desc}
          award="🥉 This project was awarded Top 3, Best Capstone Award"
        />
        <ProjectItem
          title="Imaginkraf"
          image={dorav4}
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
          image={dorav4}
          tags={["TypeScript", "React", "Firebase", "Google Maps API"]}
          description={dorav4Desc}
        />
        <ProjectItem
          title="Trinkets of Luna Ecommerce"
          image={dorav4}
          tags={["JavaScript", "React", "Firebase", "Google Maps API"]}
          description={dorav4Desc}
        />
        <ProjectItem
          title="cedric.ph"
          image={dorav4}
          tags={["TypeScript", "Next.jS", "Tailwind CSS"]}
          description={dorav4Desc}
        />
      </div>
    </div>
  );
};

export default Projects;
