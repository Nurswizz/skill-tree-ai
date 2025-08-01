const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`flex justify-center items-center cursor-pointer px-4 py-2 rounded-md ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
