"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { SVGReturner } from "@/assets/icons/newButtonIconSet/page";
import { useState } from "react";
import { getGap } from "@/helpers/getGap";

export const buttonVariants = cva(
  "inline-block text-center px-[21px] md:px-[31px] py-[11px] rounded-[6px] border-[1px] transition duration-300 ease-out text-[14px] md:text-[16px] font-[600] leading-[22px] md:leading-[24px]",
  {
    variants: {
      variant: {
        primary:
          "bg-blue_1 border-blue_1 text-white hover:bg-blue_2 active:bg-blue_3 disabled:bg-light_gray_bg disabled:text-light_3 disabled:border-light_gray_bg",
        secondary:
          "bg-white border-blue_1 text-blue_1 hover:text-blue_2 hover:border-blue_2 active:text-blue_3 active:border-blue_3 disabled:bg-white disabled:border-light_border disabled:text-light_border",
        arrow:
          "border-white bg-white disabled:text-light_3 w-[160px] h-48 p-[8px_20px_8px_24px] md:p-[8px_20px_8px_24px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  placeholder?: string;
  handleClick?: () => void;
  reverse?: boolean;
  svgName?: string;
  height?: number;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({
  handleClick,
  placeholder,
  variant,
  disabled,
  type,
  reverse,
  svgName,
  height,
  width,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={cn(
        buttonVariants({ variant }),
        "flex items-center",
        getGap(variant!),
        !placeholder && "px-[11px] md:px-[11px]"
      )}
    >
      {!reverse ? (
        <>
          {placeholder}
          {SVGReturner(
            svgName!,
            height!,
            width!,
            variant!,
            disabled!,
            isHover,
            isActive
          )}
        </>
      ) : (
        <>
          {SVGReturner(
            svgName!,
            height!,
            width!,
            variant!,
            disabled!,
            isHover,
            isActive
          )}
          {placeholder}
        </>
      )}
    </button>
  );
};

export default Button;
