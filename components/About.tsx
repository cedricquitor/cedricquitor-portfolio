import Image from "next/image";
import { mock_grad_pic } from "../public/images/about";
import Button from "./Button/Button";

const About = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">About</h1>
      <div className="flex gap-8 mt-4">
        <div className="flex w-2/6 justify-center">
          <Image
            src={mock_grad_pic}
            alt="Cedric's Graduation Picture"
            className="h-[65%] object-cover object-top rounded-full"
          />
        </div>
        <div className="w-4/6 flex flex-col">
          {/* About Me */}
          <p className="">
            Hello! I&apos;m Cedric Quitor, a Software Engineer based in Manila,
            Philippines🇵🇭. I recently graduated with a{" "}
            <span>Bachelor of Science degree in Information Technology</span>{" "}
            from the <span>University of Santo Tomas</span>. Currently, I am
            focused on pursuing a career in Software Engineering and have a keen
            interest in transitioning to the field of Machine Learning
            Engineering in the future. My passion lies in{" "}
            <span>full-stack development of web applications</span> and
            exploring the world of AI/ML applications.
          </p>
          <p className="mt-2">
            Throughout my academic journey, I have been honored to be included
            in the <span>Dean&apos;s List on multiple occasions</span>,
            highlighting my dedication to academic excellence. Additionally, I
            take great pride in receiving the{" "}
            <span>Top 3 award for the Best Capstone Project</span>, which fuels
            my curiosity and motivates me to push the boundaries of innovation.
            I am thrilled by the endless possibilities in the software
            engineering field and am eager to immerse myself in new experiences,
            acquire further knowledge, and contribute to groundbreaking
            projects.
          </p>
          <Button className="mt-4 py-2 w-54 text-center transition hover:bg-emerald-600 flex items-center justify-center">
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
