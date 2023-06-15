import { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
  type?: "primary" | "secondary";
  onClick?: () => void; // Add the onClick prop
};

const Button = ({ children, className, type, onClick }: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${
        type === "secondary"
          ? "bg-transparent border-2 border-[#37b47e] text-[#37b47e] hover:text-white"
          : "bg-[#37b47e] text-white"
      } cursor-pointer px-4 py-2 w-fit text-center rounded-2xl text-lg font-bold ${className}`}
      onClick={handleClick} // Attach the onClick event handler to the div
    >
      {children}
    </div>
  );
};

export default Button;
