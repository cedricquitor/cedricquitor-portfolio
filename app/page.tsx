import Navbar from "../components/Navbar";
import Button from "../components/Button/Button";
import { Oswald } from "@next/font/google";

export default function Home() {
  return (
    <div className="border border-red-200">
      {/* Navbar */}
      <Navbar />
      {/* Main Content Area */}
      <div className="h-screen mx-auto">
        <div className="my-[10%] grid grid-cols-1 md:grid-cols-2">
          {/* Grid 1 - Left */}
          <div className="order-2 md:order-1">
            <h2 className="font-source text-4xl">Hello!👋</h2>
            <h1 className="font-oswald text-6xl">I'm Cedric Quitor</h1>
            <p className="font-source text-4xl">I build web, data, and AI/ML applications</p>
            <Button>Let's talk</Button>
          </div>
          {/* Grid 2 - Right */}
          <div className="order-1 md:order-2">3D Model Here</div>
        </div>
        {/* About Me */}
        <div className="">
          <h1>About Me</h1>
        </div>
        {/* My Works */}
        <div className="">
          <h1>My Works</h1>
        </div>
        {/* Get In Touch */}
        <div className="">
          <h1>Let's get in touch</h1>
        </div>
      </div>
    </div>
  );
}
