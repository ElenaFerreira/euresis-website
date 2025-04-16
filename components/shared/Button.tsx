import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
export function Button({ children, primary = true, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
        primary ? "bg-tertiary text-white hover:bg-hover-button" : "bg-white text-primary hover:bg-blue-50"
      }`}
    >
      {children}
    </button>
  );
}
