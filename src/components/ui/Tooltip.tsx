"use client";
import React from "react";

interface TooltipProps {
  title: string;
  position: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, title, position }) => {
  return (
    <>
      {/* <!-- Show tooltip on top --> */}
      <div
        data-tooltip-target={`tooltip-${position}`}
        data-tooltip-placement={`${position}`}
        className="w-fit mx-auto"
      >
        {children}
      </div>

      <div
        id={`tooltip-${position}`}
        role="tooltip"
        className="absolute z-10 max-w-sm inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-white rounded shadow_popover opacity-0 tooltip"
      >
        <div className="w-full flex items-start justify-center gap-2 relative">
          <span className="text-md absolute top-0 right-0 cursor-pointer font-bold text-gray-700">
            &#10005;
          </span>
          <span className="pr-3 py-3">{title}</span>
        </div>
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default Tooltip;
