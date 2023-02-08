import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  image: StaticImageData;
}

const ToolItem: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 h-[12rem] rounded-2xl md:h-[9rem]">
      <Image src={image} height={64} alt={`${name} Logo`} />
      <h1>{name}</h1>
    </div>
  );
};

export default ToolItem;
