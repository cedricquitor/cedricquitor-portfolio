import Image from "next/image";
import Link from "next/link";
import Button from "./Button/Button";
import memoji from "../public/images/memoji.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Add grid grid-cols-1 md:grid-cols-2 order-2 md:order-1 when if implementing 3D */}
      {/* Grid 1 - Left */}
      <div className="text-center flex flex-col gap-y-8">
        {/* Image Here (Your emoji) */}
        <div className="flex flex-col items-center gap-y-6">
          <div className="h-32 w-32 bg-[#37b47e] rounded-full flex justify-center items-center">
            <Image src={memoji} alt="Cedric's Memoji" className="h-32 w-auto" />
          </div>
          <h2 className="font-bold text-xl md:text-2xl">
            Hi, I&apos;m Cedric👋
          </h2>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold">
          Building{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-500">
            web
          </span>{" "}
          and{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200">
            AI/ML
          </span>{" "}
          applications
        </h1>
        <div className="mt-2">
          <p className="text-xl md:text-2xl">
            a{" "}
            <span className="font-bold text-emerald-500">
              Software Engineer
            </span>{" "}
            based in Manila, PH🇵🇭.
          </p>
          <p className="text-xl md:text-2xl">
            I specialize in developing end-to-end products.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="https://www.linkedin.com/in/cedricquitor/"
            target="_blank"
          >
            <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-2xl mx-auto">
              Connect with me
            </Button>
          </Link>
        </div>
      </div>
      {/* Grid 2 - Right
            <div className="order-1 md:order-2">3D Model Here</div> */}
    </div>
  );
};

export default Hero;
