type Props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return <div className={`bg-[#37b47e] cursor-pointer px-10 py-6 w-fit text-center rounded-full text-white text-lg font-bold ${className}`}>{children}</div>;
};

export default Button;
