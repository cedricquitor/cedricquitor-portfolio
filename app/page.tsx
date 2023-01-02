import Navbar from "../components/Navbar";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Content Area */}
      <div>
        {/* Add grid grid-cols-1 md:grid-cols-2 when if implementing 3D */}
        <div className="my-[10%] flex items-center justify-center">
          {/* Grid 1 - Left */}
          <div className="order-2 md:order-1 text-center">
            <h2 className="font-source text-4xl">Hello!👋</h2>
            <h1 className="font-source text-6xl mt-2">
              I'm <span className="font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-900">Cedric Quitor</span>
            </h1>
            <p className="font-source text-4xl">
              I build <span className="font-bold text-sky-600">web</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-900">data</span>, and <span className="font-bold text-blue-900">AI/ML</span>{" "}
              applications
            </p>
            <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl w-1/4 mx-auto mt-6">Let's talk</Button>
          </div>
          {/* Grid 2 - Right
            <div className="order-1 md:order-2">3D Model Here</div> */}
        </div>
        {/* About Me */}
        <div className="">
          <h1 className="font-oswald text-3xl">About me</h1>
          <p className="mt-4 font-source text-xl">
            Hi there! My name is Cedric Quitor and I am an IT student at the University of Santo Tomas. After I finish my bachelor's degree, I plan to pursue a career in data science. Aside from that, I am also very interested in building web, data,
            and AI/ML applications. I am excited to see what the future holds for me and I am eager to learn more about this field.
          </p>
        </div>
        {/* My Works */}
        <div className="my-[10%]">
          <h1 className="font-oswald text-3xl">My works</h1>
          <div className="mt-4 grid grid-cols-2">
            <h1>Post 1</h1>
            <h1>Post 2</h1>
          </div>
        </div>
        {/* Get In Touch */}
        <div className="">
          {/* Contact Form */}
          <h1 className="font-oswald text-3xl">Get in touch</h1>
          <h1 className="mt-4">Let's get in touch</h1>
          <h1>Add contact me form here</h1>
        </div>
      </div>
    </>
  );
}
