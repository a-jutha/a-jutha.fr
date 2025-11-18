function Input({ className = "", as = "input", ...props }) {
  const baseClasses =
    "bg-primary text-secondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 border border-gray-700 hover:border-accent";

  const Component = as;

  return <Component className={`${baseClasses} ${className}`} {...props} />;
}

export default Input;
