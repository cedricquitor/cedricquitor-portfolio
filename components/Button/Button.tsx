import { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
  type?: "primary" | "secondary";
};

const Button = ({ children, className, type }: Props) => {
  return (
    <div
      className={`${
        type === "secondary"
          ? "bg-transparent border-2 border-[#37b47e] text-[#37b47e] hover:text-white"
          : "bg-[#37b47e] text-white"
      } cursor-pointer px-10 py-6 w-fit text-center rounded-2xl text-lg font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
