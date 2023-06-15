import Link from "next/link";
import { BsGithub, BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";
import Button from "./Button/Button";
import { FaKaggle } from "react-icons/fa";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/cedricquitor/",
  github: "https://github.com/cedricquitor",
  kaggle: "https://www.kaggle.com/cedricquitor",
  twitter: "https://twitter.com/cedricquitor",
  medium: "https://medium.com/@cedricquitor",
};

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="font-bold text-3xl">Contact</h1>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center">
          Let&apos;s work together
        </h1>
        <div className="mt-6 flex text-3xl space-x-8 justify-center items-center text-slate-400">
          <Link href={socialLinks.linkedin} target="_blank">
            <BsLinkedin className="transition hover:text-emerald-600 cursor-pointer" />
          </Link>
          <Link href={socialLinks.github} target="_blank">
            <BsGithub className="transition hover:text-emerald-600 cursor-pointer" />
          </Link>
          <Link href={socialLinks.kaggle} target="_blank">
            <FaKaggle className="transition hover:text-emerald-600 cursor-pointer" />
          </Link>
          <Link href={socialLinks.twitter} target="_blank">
            <BsTwitter className="transition hover:text-emerald-600 cursor-pointer" />
          </Link>
          <Link href={socialLinks.medium} target="_blank">
            <BsMedium className="transition hover:text-emerald-600 cursor-pointer" />
          </Link>
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
    </section>
  );
};

export default Contact;
