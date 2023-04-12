import React from "react";

interface ICustomButtonProps {
  onClick?: () => void;
  label?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
    {label}
  </button>
);

export default React.memo(CustomButton);
