import Link from "next/link";
import { BsGithub, BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";
import Button from "./Button/Button";
import { FaKaggle } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Contact</h1>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center">
          Let&apos;s work together
        </h1>
        <div className="mt-6 flex text-3xl space-x-8 justify-center items-center text-slate-400">
          <BsLinkedin className="transition hover:text-emerald-600 cursor-pointer" />
          <BsGithub className="transition hover:text-emerald-600 cursor-pointer" />
          <BsTwitter className="transition hover:text-emerald-600 cursor-pointer" />
          <BsMedium className="transition hover:text-emerald-600 cursor-pointer" />
          <FaKaggle className="transition hover:text-emerald-600 cursor-pointer" />
        </div>
        <p className="mt-6 text-center">
          I&apos;m always open to discussing software engineering work or
          partnership opportunities
        </p>
        <Link href="https://cal.com/cedricquitor/" target="_blank">
          <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl mx-auto mt-6">
            Schedule a call
          </Button>
        </Link>
        <p className="text-gray-400 text-center mt-2">
          or{" "}
          <Link
            href="https://www.linkedin.com/in/cedricquitor/"
            target="_blank"
          >
            <span className="font-bold transition hover:text-emerald-600">
              connect
            </span>
          </Link>{" "}
          with me instead
        </p>
      </div>
    </div>
  );
};

export default Contact;
