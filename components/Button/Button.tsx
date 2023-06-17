import { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
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
          ? "bg-transparent text-emerald-500"
          : "bg-emerald-500 text-white"
      } cursor-pointer px-4 py-2 w-fit text-center rounded-2xl text-lg font-bold border-2 border-emerald-500 ${className}`}
      onClick={handleClick} // Attach the onClick event handler to the div
    >
      {children}
    </div>
  );
};

export default Button;
