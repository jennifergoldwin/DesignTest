import React from "react";

interface IButtonProps {
  background: any;
  color: any;
  text: any;
}
const Button: React.FC<IButtonProps> = ({ background, color, text }) => {
  return (
    <button
      className={`${background} ${color} rounded-full w-full font-[600] py-2`}
    >
      {text}
    </button>
  );
};

export default Button;
