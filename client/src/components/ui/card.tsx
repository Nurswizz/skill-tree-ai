const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-dark-slate rounded-lg shadow-lg ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>
    {children}
  </div>
);
const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-lg font-semibold text-white ${className}`}>
    {children}
  </h2>
);
const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);


export {
  Card,
  CardHeader,
  CardTitle,
  CardContent
};
