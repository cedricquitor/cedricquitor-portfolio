import {
  dorav4,
  imaginkraf,
  botomasino,
  trinkets,
  boston,
} from "../public/images/project";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const dorav4Desc =
    "Disaster Online Reporting Application (DORA) version 4 is an Android-based mobile application that allows users to easily and quickly report disasters in real-time. With this app, users can provide critical information about the disaster, including its location, type, and images allowing emergency responders to emergency responders to quickly and effectively respond to the situation.";
  return (
    <section id="projects">
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
          githubLink="https://github.com/cedricquitor/disaster-online-reporting-application-v4-web-app"
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
          projectLink="https://imaginkraf-web-app.vercel.app/"
          githubLink="https://github.com/cedricquitor/imaginkraf-web-app"
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
          githubLink="https://github.com/cedricquitor/blockchain-web-app"
        />
        <ProjectItem
          title="Data-Driven Boston: XGBoost Regression for Housing Prices"
          image={boston}
          tags={[
            "Python",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Scikit-learn",
            "XGBoost",
            "Regression",
          ]}
          description={dorav4Desc}
          kaggleLink="https://www.kaggle.com/code/cedricquitor/ml-regression-boston-house-price-prediction"
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
          projectLink="https://trinketsofluna-ecommerce-fbase.firebaseapp.com/"
          githubLink="https://github.com/cedricquitor/trinketsofluna-ecommerce-web-app"
        />
      </div>
    </section>
  );
};

export default Projects;
