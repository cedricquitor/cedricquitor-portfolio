type Props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return <div className={`bg-[#37b47e] cursor-pointer py-6 w-64 rounded-full text-white text-lg font-bold ${className}`}>{children}</div>;
};

export default Button;
