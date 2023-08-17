"use client";

import { useEffect, useState } from "react";

interface AddNewCardButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const AddNewCardButton: React.FC<AddNewCardButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  const [svgColor, setSvgColor] = useState<string>("#0072BC");

  useEffect(() => {
    setSvgColor(disabled ? "#B2B2C2" : "#0072BC");
  }, [disabled]);

  return (
    <button
      onMouseOver={() => setSvgColor("#0B80CC")}
      onMouseLeave={() => setSvgColor("#0072BC")}
      onMouseDown={() => setSvgColor("#0F6399")}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex items-center gap-4 text-[16px] font-[600] leading-[24px] text-blue_2 hover:text-blue_1 active:text-blue_3 transition duration-300 ease-out disabled:text-light_3"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.14014 13.7C6.14014 13.3686 6.40877 13.1 6.74014 13.1H20.9701C21.3015 13.1 21.5701 13.3686 21.5701 13.7V22.54C21.5701 22.8713 21.3015 23.14 20.9701 23.14C20.6388 23.14 20.3701 22.8713 20.3701 22.54V14.3H7.34014V21.94H14.0501C14.3815 21.94 14.6501 22.2086 14.6501 22.54C14.6501 22.8713 14.3815 23.14 14.0501 23.14H6.74014C6.40877 23.14 6.14014 22.8713 6.14014 22.54V13.7Z"
            fill={svgColor}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6504 5.62631C13.8566 5.36728 14.2337 5.32429 14.493 5.53025L25.633 14.3803C25.7577 14.4793 25.8379 14.6238 25.8559 14.782C25.874 14.9402 25.8284 15.0991 25.7292 15.2237L21.4392 20.6137C21.2329 20.873 20.8554 20.9159 20.5961 20.7095C20.3368 20.5031 20.294 20.1257 20.5003 19.8664L24.4163 14.9463L14.2158 6.84265L9.45296 12.8243L9.96342 13.2306C10.2227 13.437 10.2656 13.8144 10.0592 14.0737C9.85286 14.333 9.47539 14.3759 9.21612 14.1695L8.23612 13.3895C8.1116 13.2904 8.03155 13.1459 8.0136 12.9877C7.99564 12.8296 8.04125 12.6708 8.14039 12.5463L13.6504 5.62631Z"
            fill={svgColor}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5102 19.68C15.9307 19.68 14.6502 20.9604 14.6502 22.54C14.6502 24.1195 15.9307 25.4 17.5102 25.4C19.0897 25.4 20.3702 24.1195 20.3702 22.54C20.3702 20.9604 19.0897 19.68 17.5102 19.68ZM13.4502 22.54C13.4502 20.2977 15.2679 18.48 17.5102 18.48C19.7525 18.48 21.5702 20.2977 21.5702 22.54C21.5702 24.7823 19.7525 26.6 17.5102 26.6C15.2679 26.6 13.4502 24.7823 13.4502 22.54Z"
            fill={svgColor}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5102 20.4399C17.8415 20.4399 18.1102 20.7086 18.1102 21.0399V24.0399C18.1102 24.3713 17.8415 24.6399 17.5102 24.6399C17.1788 24.6399 16.9102 24.3713 16.9102 24.0399V21.0399C16.9102 20.7086 17.1788 20.4399 17.5102 20.4399Z"
            fill={svgColor}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4102 22.5399C15.4102 22.2086 15.6788 21.9399 16.0102 21.9399H19.0102C19.3415 21.9399 19.6102 22.2086 19.6102 22.5399C19.6102 22.8713 19.3415 23.1399 19.0102 23.1399H16.0102C15.6788 23.1399 15.4102 22.8713 15.4102 22.5399Z"
            fill={svgColor}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.14014 16.76C6.14014 16.4287 6.40877 16.16 6.74014 16.16H20.9701C21.3015 16.16 21.5701 16.4287 21.5701 16.76C21.5701 17.0914 21.3015 17.36 20.9701 17.36H6.74014C6.40877 17.36 6.14014 17.0914 6.14014 16.76Z"
            fill={svgColor}
          />
        </svg>
      </span>
      {children}
    </button>
  );
};

export default AddNewCardButton;
