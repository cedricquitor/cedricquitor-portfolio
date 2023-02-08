import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

const ToolItem = ({ name, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 h-[12rem] rounded-2xl md:h-[9rem]">
      <Image src={image} height={64} alt={`${name} Logo`} />
      <h1>{name}</h1>
    </div>
  );
};

export default ToolItem;
