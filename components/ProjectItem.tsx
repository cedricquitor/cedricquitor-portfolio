import Image, { StaticImageData } from "next/image";
import { dorav4 } from "../public/images/project";
import { BsGithub, BsMedium } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FaKaggle } from "react-icons/fa";
import Button from "./Button/Button";

interface TagItemProps {
  tag: string;
}

interface ProjectItemProps {
  title: string;
  image: StaticImageData;
  tags: string[];
  description: string;
  award?: string;
  projectLink?: string;
  githubLink?: string;
  mediumLink?: string;
  kaggleLink?: string;
}

const TagItem = (props: TagItemProps) => {
  const { tag } = props;
  return (
    <p className="text-xs md:text-sm text-gray-400 border border-gray-300 rounded-full px-2 w-fit">
      {tag}
    </p>
  );
};

const ProjectItem = (props: ProjectItemProps) => {
  const {
    title,
    image,
    tags,
    description,
    award,
    projectLink,
    githubLink,
    mediumLink,
    kaggleLink,
  } = props;
  return (
    <div className="space-y-4 rounded-md md:grid md:grid-cols-12 md:space-x-4 md:space-y-0">
      {/* Left Side */}
      <div className="md:col-span-4">
        <Image
          src={image}
          alt="Project Item Image"
          height={500}
          width={500}
          className="border-2 border-gray-100 rounded-lg group-hover:border-gray-300 object-cover object-center w-full h-full"
        />
      </div>
      {/* Right Side */}
      <div className="md:col-span-8">
        <h1 className="text-xl md:text-2xl font-jakarta font-bold group-hover:text-green-400">
          {title}
        </h1>
        <div className="flex flex-wrap mt-2 gap-2 w-3/4">
          {tags.map((tag) => {
            return <TagItem tag={tag} key={tag} />;
          })}
        </div>
        <p className="mt-4 text-sm md:text-base text-gray-500">{description}</p>
        {award && (
          <p className="mt-2 text-sm md:text-base text-gray-500">{award}</p>
        )}
        <div className="mt-4 flex space-x-4">
          <Button className="py-2 w-54 text-center transition hover:bg-emerald-600 flex items-center justify-center">
            <BiLinkExternal className="text-2xl" />
          </Button>
          <Button
            type="secondary"
            className="py-2 w-54 text-center transition hover:bg-emerald-600 flex items-center justify-center"
          >
            <BsGithub className="text-2xl" />
          </Button>
          <Button
            type="secondary"
            className="py-2 w-54 text-center transition hover:bg-emerald-600 flex items-center justify-center"
          >
            <BsMedium className="text-2xl" />
          </Button>
          <Button
            type="secondary"
            className="py-2 w-54 text-center transition hover:bg-emerald-600 flex items-center justify-center"
          >
            <FaKaggle className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
