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

  const projectDesc = {
    dora: "Disaster Online Reporting Application (DORA) version 4 is an Android-based mobile app that enables users to report disasters in real-time, providing critical information to emergency responders for swift and effective response.",
    imaginkraf:
      "Imaginkraf is a pioneering platform that seamlessly merges art and advanced technology, empowering users to effortlessly create compelling AI-generated images. Experience the transformative synergy of AI-driven artistry and embark on a journey of boundless inspiration within a thriving community of artists on Imaginkraf.",
    botomasino:
      "BOTOmasino revolutionizes the voting system for the University of Santo Tomas Central Student Council with a secure and transparent NFT-gated platform. Each college is represented by a unique NFT, ensuring eligible voters can participate, fostering inclusivity and integrity. Experience the future of student governance on Polygon with BOTOmasino, where technology and transparency converge for an equitable electoral process.",
    trinkets:
      "Trinkets of Luna Ecommerce platform is a sophisticated solution that effortlessly showcases exquisite dainty jewelries. Experience an immersive shopping experience, curated with precision and empowered by a comprehensive Content Management System (CMS), while enjoying the convenience of multiple payment options made possible by PayMongo's payment gateway API.",
    boston:
      "Data-Driven Boston: XGBoost Regression for Housing Prices is a project utilizing XGBoost regression to provide accurate predictions of housing prices in Boston. By harnessing the power of machine learning and ensemble models, this project offers valuable insights for informed decision-making in the real estate market.",
  };

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
          description={projectDesc.dora}
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
            "Express.js",
            "Cloudinary",
          ]}
          description={projectDesc.imaginkraf}
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
            "Polygon",
            "Solidity",
            "Hardhat",
            "Ethers.js",
          ]}
          description={projectDesc.botomasino}
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
          description={projectDesc.boston}
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
          description={projectDesc.trinkets}
          projectLink="https://trinketsofluna-ecommerce-fbase.firebaseapp.com/"
          githubLink="https://github.com/cedricquitor/trinketsofluna-ecommerce-web-app"
        />
      </div>
    </section>
  );
};

export default Projects;
