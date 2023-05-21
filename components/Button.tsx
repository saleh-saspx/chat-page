import React from "react";

interface ButtonProps {
  active?: boolean;
  label: string;
  onClick?: (() => void)   ;
}
const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 w-full h-[60px] py-3 rounded-full text-sm max-md:px-3 max-md:py-2 ${
        active ? "text-white bg-primary" : 'text-black bg-white dark:bg-primary-dark dark:text-white'
      }`}
    >
      {label}
    </button>
  );
};
export default Button;
