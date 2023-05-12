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
          Building web, data, and AI/ML applications.
        </h1>
        <div className="mt-2">
          <p className="text-2xl">
            a <span className="font-bold">Machine Learning Engineer</span> based
            in Manila, PH.
          </p>
          <p className="text-2xl">
            I specialize in end-to-end development of digital products.
          </p>
        </div>
        <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl mx-auto mt-6">
          Connect with me
        </Button>
      </div>
      {/* Grid 2 - Right
            <div className="order-1 md:order-2">3D Model Here</div> */}
    </div>
  );
};

const About = () => {
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
    <div className="mt-8">
      {/* About Me */}
      <h1 className="font-bold text-3xl">Who I am</h1>
      <p className="mt-4 text-xl">
        Hi there! My name is Cedric Quitor, a Machine Learning Engineer base in
        Manila, Philippines
      </p>
      <p className="mt-2 text-xl">
        I am currently an IT student at the University of Santo Tomas. After I
        finish my bachelor&apos;s degree, I plan to pursue a career in Software
        Engineering. Aside from that, I am also very interested in building web,
        data, and AI/ML applications. I am excited to see what the future holds
        for me and I am eager to learn more about this field.
      </p>
      <div className="mt-4">
        <Link
          href="/about"
          className="text-xl underline underline-offset-8 transition duration-300 hover:text-[#37b47e]"
        >
          Learn more about me
        </Link>
      </div>
      {/* What I do and Tech Stack */}
      <div className="mt-8">
        <h1 className="font-oswald text-3xl">What I do</h1>
        <div className="mt-4 space-y-8">
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
          <div>
            <h2 className="text-2xl">Software Engineering</h2>
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
        </div>
        <div className="mt-4">
          <Link
            href="/about"
            className="text-xl underline underline-offset-8 transition duration-300 hover:text-[#37b47e]"
          >
            Learn more about my arsenal
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="">
      {/* My Works */}
      <h1 className="font-oswald text-3xl">My works</h1>
      <div className="mt-4 grid grid-cols-2">
        <h1>DORA</h1>
        <h1>imaginkraf</h1>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="">
      {/* Get In Touch */}
      {/* Contact Form */}
      <h1 className="font-oswald text-3xl">Get in touch</h1>
      <h1 className="mt-4">
        Get in touch to discuss your next software project. Let&apos;s make it
        happen.
      </h1>
      <h1>Add contact me form here</h1>
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
        <Projects />
        <hr className="my-8" />
        <Contact />
      </div>
    </>
  );
}
