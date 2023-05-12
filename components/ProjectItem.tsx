import Image from "next/image";
import { dorav4 } from "../public/images/project";
import Button from "./Button/Button";

interface TagItemProps {
  tag: string;
}

interface ProjectItemProps {
  title: string;
  image: string;
  tags: string[];
  projectLink?: string;
  githubLink?: string;
}

const TagItem = (props: TagItemProps) => {
  const { tag } = props;
  return (
    <p className="text-sm text-gray-400 border border-gray-300 rounded-full px-2 w-fit">
      {tag}
    </p>
  );
};

const ProjectItem = () => {
  return (
    <div className="grid grid-cols-12 space-x-4 rounded-md">
      {/* Left Side */}
      <div className="col-span-4 flex bg-red-100">
        <Image
          src={dorav4}
          alt="Project Item Image"
          height={320}
          className="border-2 border-gray-100 rounded-lg group-hover:border-gray-300"
        />
      </div>
      {/* Right Side */}
      <div className="col-span-8">
        <h1 className="text-2xl font-jakarta font-bold group-hover:text-green-400">
          Disaster Online Reporting Application v4
        </h1>
        <div className="flex space-x-2 mt-2">
          <TagItem tag="JavaScript" />
          <TagItem tag="ReactJS" />
          <TagItem tag="Firebase" />
          <TagItem tag="Google Maps API" />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Disaster Online Reporting Application (DORA) version 4 is an
          Android-based mobile application that allows users to easily and
          quickly report disasters in real-time. With this app, users can
          provide critical information about the disaster, including its
          location, type, and images allowing emergency responders to emergency
          responders to quickly and effectively respond to the situation.
        </p>
        <div className="mt-4 flex space-x-4">
          <Button className="py-2 w-64 text-center transition hover:bg-emerald-600">
            Visit App
          </Button>
          <Button
            type="secondary"
            className="py-2 w-64 text-center transition hover:bg-emerald-600"
          >
            GitHub Repo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
