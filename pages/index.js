import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cedric Quitor</title>
        <meta name="description" content="A portfolio website for Cedric Quitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Start */}
      <div className="h-screen bg-red-100">
        {/* Navbar */}
        <Navbar />
        {/* Main Content Area */}
        <div className="h-screen bg-red-200 w-[50%] mx-auto">
          <div className="bg-red-300">
            <h2>Hello!👋</h2>
            <h1>I'm Cedric Quitor</h1>
            <p>I like to build web, data, and AI/ML applications</p>
            <button>
              <p>Let's talk</p>
            </button>
          </div>
          {/* About Me */}
          <div className="bg-red-300">
            <h1>About Me</h1>
          </div>
          {/* My Works */}
          <div className="bg-red-300">
            <h1>My Works</h1>
          </div>
          {/* Get In Touch */}
          <div className="bg-red-300">
            <h1>Let's get in touch</h1>
          </div>
        </div>
      </div>
    </>
  );
}
