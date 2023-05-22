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
import ToolItem from "../components/ToolItem";

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
    <section>
      {/* What I do and Tech Stack */}
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
            These are the languages and tools I mainly use in experimenting with
            and deploying machine learning models.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4">
            {mlTools.map((tool) => (
              <ToolItem key={tool.name} name={tool.name} image={tool.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
