"use client";

import { GoEye } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";

interface BareButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  afterSuccess: string;
}

const BareButton: React.FC<BareButtonProps> = ({
  children,
  onClick,
  afterSuccess,
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleClick = () => {
    onClick && onClick;

    setIsCompleted(true);
  };

  if (!isCompleted) {
    return (
      <button
        onClick={handleClick}
        className="flex p-[11px_18px_11px_8px] md:p-[12px_18px_12px_8px] justify-center items-center gap-12 rounded-[6px] text-light_1 hover:bg-light_gray_bg text-[14px] md:text-[16px] font-[600] leading-[22px] md:leading-[24px] w-[277px] md:w-[346px] transition duration-300 ease-out active:text-dark active:bg-light_border"
      >
        <span>
          <GoEye />
        </span>{" "}
        {children}
      </button>
    );
  } else {
    return (
      <button className="flex w-[277px] md:w-[346px] p-[11px_18px_11px_8px] md:p-[12px_18px_12px_8px] justify-center items-center gap-12 rounded-[6px] text-green_3 text-[14px] md:text-[16px] font-[600] leading-[22px] md:leading-[24px]">
        <span className="text-icon_success">
          <IoCheckmark />
        </span>
        {afterSuccess}
      </button>
    );
  }
};

export default BareButton;
