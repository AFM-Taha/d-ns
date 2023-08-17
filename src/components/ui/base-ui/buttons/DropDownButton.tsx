"use client";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

interface DropDownButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const DropDownButton: React.FC<DropDownButtonProps> = ({
  children,
  onClick,
}) => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const handleClick = () => {
    setIsDropDown(!isDropDown);

    onClick && onClick;
  };

  const matches = useMediaQuery("(min-width: 360px)");

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-4 text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[26px] text-blue_2"
    >
      {children}{" "}
      <span
        className={cn(
          isDropDown && "rotate-180",
          "transition duration-300 ease-out"
        )}
      >
        {matches ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.5 8.25L12 15.75L4.5 8.25"
              stroke="#0072BC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.25 6.875L10 13.125L3.75 6.875"
              stroke="#0072BC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default DropDownButton;
