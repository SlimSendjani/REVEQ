import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

    const variants = {
      primary:
        "bg-brand text-black hover:bg-brand-hover shadow-glow active:scale-[0.98] font-black",
      secondary:
        "bg-white text-dark-950 hover:bg-slate-100 active:scale-[0.98] font-bold shadow-sm",
      outline:
        "border border-slate-700 bg-dark-850/80 text-white hover:bg-dark-800 hover:border-slate-500 active:scale-[0.98]",
      ghost:
        "text-slate-400 hover:text-white hover:bg-dark-800 active:scale-[0.98]",
      danger:
        "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-3 gap-2",
      lg: "text-base px-7 py-4 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={twMerge(clsx(base, variants[variant], sizes[size], className))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
