type Props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <div className={`${className}`}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
