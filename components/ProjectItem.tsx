import Image, { StaticImageData } from "next/image";
import { dorav4 } from "../public/images/project";
import Button from "./Button/Button";

interface TagItemProps {
  tag: string;
}

interface ProjectItemProps {
  title: string;
  image: StaticImageData;
  tags: string[];
  description: string;
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

const ProjectItem = (props: ProjectItemProps) => {
  const { title, image, tags, description, projectLink, githubLink } = props;
  return (
    <div className="grid grid-cols-12 space-x-4 rounded-md">
      {/* Left Side */}
      <div className="col-span-4 flex bg-red-100">
        <Image
          src={image}
          alt="Project Item Image"
          height={320}
          className="border-2 border-gray-100 rounded-lg group-hover:border-gray-300"
        />
      </div>
      {/* Right Side */}
      <div className="col-span-8">
        <h1 className="text-2xl font-jakarta font-bold group-hover:text-green-400">
          {title}
        </h1>
        <div className="flex flex-wrap mt-2 gap-2 w-3/4">
          {tags.map((tag) => {
            return <TagItem tag={tag} key={tag} />;
          })}
        </div>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex space-x-4">
          <Button className="py-2 w-54 text-center transition hover:bg-emerald-600">
            Visit Project
          </Button>
          <Button
            type="secondary"
            className="py-2 w-54 text-center transition hover:bg-emerald-600"
          >
            GitHub Repo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
