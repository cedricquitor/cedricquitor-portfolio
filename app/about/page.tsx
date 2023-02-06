import Image from "next/image";
import Button from "../../components/Button/Button";
import { ust_logo, ustshs_logo, ustcics_logo } from "../../public/images/education";

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl">Get to know more about me</h1>
      <div className="flex mt-4 gap-x-8 items-center">
        <div>
          <div className="h-48 w-48 bg-[#37b47e] rounded-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <p>
            Welcome to my portfolio project website! I&apos;m <span className="font-bold">Cedric Quitor</span>, a student at the University of Santo Tomas pursuing a degree in Information Technology. My passion for technology and data drives me to
            continuously learn and expand my knowledge in the field.
          </p>
          <p>I am particularly interested in Software Engineering and have a goal of pursuing a career in this exciting field after completing my bachelor&apos;s degree.</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <p className="text-gray-500">
          Aside from academics, I am also keen on developing web, data, and AI/ML applications. I believe that technology has the power to solve some of the world&apos;s biggest challenges, and I am eager to contribute my own solutions.
        </p>
        <p className="text-gray-500">
          As a student, I am always looking for new opportunities to learn and grow, and I am excited to see what the future holds for me in this constantly evolving field. I hope to make a difference by utilizing my technical skills and passion for
          technology to make a positive impact in the world.
        </p>
        <p className="text-gray-500">Thank you for taking the time to visit my portfolio website. If you have any questions or would like to learn more about my work, don&apos;t hesitate to get in touch!</p>
      </div>
      <Button className="transition duration-500 hover:-translate-y-2 hover:shadow-xl mt-6">Connect with me</Button>
    </div>
  );
};

const Education = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-3xl">Education</h1>
      <div className="mt-4 flex flex-col gap-y-4">
        {/* TOOD: Make this card a component */}
        <div className="outline outline-2 outline-gray-200 p-4 rounded-2xl flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl text-[#37b47e]">University of Santo Tomas</h1>
            <h2 className="font-bold text-sm text-[#37b47e]">College of Information and Computing Sciences</h2>
            <h2 className="font-bold text-sm">Bachelor of Science in Information Technology</h2>
            <h3 className="italic text-sm">Specialization in Web and Mobile Development</h3>
          </div>
          <div className="flex gap-x-4 justify-between w-[8rem]">
            <Image src={ust_logo} height={56} alt="University of Santo Tomas Logo" />
            <Image src={ustcics_logo} height={56} alt="University of Santo Tomas College of Information and Computing Sciences Logo" />
          </div>
        </div>
        <div className="outline outline-2 outline-gray-200 p-4 rounded-2xl flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl text-[#37b47e]">University of Santo Tomas</h1>
            <h2 className="font-bold text-sm text-[#37b47e]">Senior High School</h2>
            <h2 className="font-bold text-sm">Accountacy, Business, and Management Strand</h2>
          </div>
          <div className="flex gap-x-4 justify-between w-[8rem]">
            <Image src={ust_logo} height={56} alt="University of Santo Tomas Logo" />
            <Image src={ustshs_logo} height={56} alt="University of Santo Tomas College of Information and Computing Sciences Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-3xl">Tools</h1>
      <div className="grid grid-cols-4 place-items-center">
        <p>Tool 1</p>
        <p>Tool 2</p>
        <p>Tool 3</p>
        <p>Tool 4</p>
        <p>Tool 5</p>
        <p>Tool 6</p>
        <p>Tool 7</p>
        <p>Tool 8</p>
        <p>Tool 9</p>
        <p>Tool 10</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-3xl">Experience</h1>
      <div>
        <p>Experience 1</p>
        <p>Experience 2</p>
        <p>Experience 3</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-3xl">Certifications</h1>
      <div>
        <p>Certificate 1</p>
        <p>Certificate 2</p>
        <p>Certificate 3</p>
        <p>Certificate 4</p>
        <p>Certificate 5</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="mt-[20vh]">
      <AboutMe />
      <Education />
      <Tools />
      <Experience />
      <Certifications />
    </div>
  );
};

export default About;
