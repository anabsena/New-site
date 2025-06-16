import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  className?: string;
}

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  const baseStyles = "px-8 py-2 text-base rounded-xl font-medium transition-colors cursor-pointer";
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
};

export default Button;
