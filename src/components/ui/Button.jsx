function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses =
    "text-center rounded-lg px-6 py-3 font-bold text-base transition-all duration-300 shadow-lg";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/80 hover:shadow-accent/50 border-2 border-accent hover:scale-105",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "text-white border-2 px-8 py-4 hover:bg-accent hover:border-accent hover:shadow-accent/50 hover:scale-105",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
