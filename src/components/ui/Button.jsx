function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses =
    "text-center rounded-md px-4 py-2 font-semibold text-sm transition-all duration-300";

  const variants = {
    primary:
      "bg-transparent text-emerald-300 hover:text-emerald-200 border border-emerald-400/80 hover:border-emerald-300 hover:bg-emerald-400/10",
    secondary:
      "bg-transparent text-sky-300 hover:text-sky-200 border border-sky-400/80 hover:border-sky-300 hover:bg-sky-400/10",
    outline:
      "text-white border border-slate-500 hover:bg-slate-700 hover:border-slate-400",
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
