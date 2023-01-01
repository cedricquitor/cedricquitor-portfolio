type Props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return <div className={`bg-gradient-to-r from-sky-600 to-blue-900 cursor-pointer py-3 px-6 rounded-xl text-white text-base font-montserrat font-medium ${className}`}>{children}</div>;
};

export default Button;
