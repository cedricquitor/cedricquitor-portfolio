import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  image: StaticImageData;
}

const ToolItem: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center border group border-gray-200 bg-gray-100 h-[12rem] rounded-2xl md:h-[9rem] relative">
      <Image
        src={image}
        height={64}
        alt={`${name} Logo`}
        className="grayscale fill-emerald-500 transition duration-500 group-hover:grayscale-0"
      />
      <h1 className="mt-2 text-sm text-gray-400">{name}</h1>
    </div>
  );
};

export default ToolItem;
