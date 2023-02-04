import Navbar from "../components/Navbar";
import Button from "../components/Button/Button";
import { typescript_logo, reactjs_logo, nodejs_logo, postgresql_logo } from "../public/images/techstack";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      {/* Add grid grid-cols-1 md:grid-cols-2 when if implementing 3D */}
      {/* Grid 1 - Left */}
      <div className="order-2 md:order-1 text-center">
        {/* Image Here (Your emoji) */}
        <h2 className="font-source text-4xl">Hello!👋</h2>
        <h1 className="font-source text-6xl mt-2">
          I&apos;m <span className="font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-900">Cedric Quitor</span>
        </h1>
        <p className="font-source text-4xl">
          I build <span className="font-bold text-sky-600">web</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-900">data</span>, and <span className="font-bold text-blue-900">AI/ML</span>{" "}
          applications
        </p>
        <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl w-1/4 mx-auto mt-6">Let&apos;s talk</Button>
      </div>
      {/* Grid 2 - Right
            <div className="order-1 md:order-2">3D Model Here</div> */}
    </div>
  );
};

const About = () => {
  return (
    <div className="">
      {/* About Me */}
      <h1 className="font-oswald text-3xl">Who I am</h1>
      <p className="mt-4 font-source text-xl">Hi there! My name is Cedric Quitor, a Software Engineer base in Manila, Philippines</p>
      <p className="mt-2 font-source text-xl">
        I am currently an IT student at the University of Santo Tomas. After I finish my bachelor&apos;s degree, I plan to pursue a career in data science. Aside from that, I am also very interested in building web, data, and AI/ML applications. I am
        excited to see what the future holds for me and I am eager to learn more about this field.
      </p>
      {/* Services Offered */}
      <div className="mt-8">
        <h1 className="font-oswald text-3xl">What I do</h1>
        <div className="mt-4">
          <h1>Development</h1>
          <h1>UI/UX Design</h1>
          <h1>SEO Marketing</h1>
        </div>
      </div>
      {/* Main Techstack */}
      <div className="mt-8">
        <h1 className="font-oswald text-3xl">How I do it</h1>
        <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center bg-gray-200 h-[12rem] rounded-2xl md:h-[9rem]">
            <Image src={typescript_logo} height={64} alt="TypeScript Logo" />
            <h1>TypeScript</h1>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 h-[12rem] rounded-2xl md:h-[9rem]">
            <Image src={reactjs_logo} height={64} alt="ReactJS Logo" />
            <h1>ReactJS</h1>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 h-[12rem] rounded-2xl md:h-[9rem]">
            <Image src={nodejs_logo} height={64} alt="NodeJS Logo" />
            <h1>NodeJS</h1>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 h-[12rem] rounded-2xl md:h-[9rem]">
            <Image src={postgresql_logo} height={64} alt="PostgreSQL Logo" />
            <h1>PostgreSQL</h1>
          </div>
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
      <h1 className="mt-4">Get in touch to discuss your next software project. Let&apos;s make it happen.</h1>
      <h1>Add contact me form here</h1>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Content Area */}
      <div className="flex flex-col">
        <Hero />
        <hr className="my-8" />
        <About />
        <hr className="my-8" />
        <Projects />
        <hr className="my-8" />
        <Contact />
      </div>
    </>
  );
}
