"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface VerticalTabProps {
  tabs: string[];
  children: React.ReactNode;
}

const VerticalTab: React.FC<VerticalTabProps> = ({ tabs, children }) => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);

  return (
    <div className="flex gap-24">
      {/* TABS */}
      <aside className="inline-flex flex-col gap-12">
        {tabs?.map((tab: string, index: number) => (
          <button
            key={index}
            onClick={() => setShouldOpenTab(index)}
            className={cn(
              "h-[37px] flex flex-col justify-between text-[16px] font-[400] leading-[24px] transition duration-300 ease-out",
              shouldOpenTab === index && "font-[600] text-blue_2"
            )}
          >
            {tab}
            <span
              className={cn(
                "bg-blue_2 items-stretch h-[2px] w-full opacity-0 transition duration-300 ease-out -translate-x-full",
                shouldOpenTab === index && "opacity-100 translate-x-0"
              )}
            ></span>
          </button>
        ))}
      </aside>

      {/* CONTENTS */}
      <div>
        {React.Children.toArray(children).map(
          (item: React.ReactNode, index: number) => (
            <div
              key={index}
              className={cn(shouldOpenTab === index ? "block" : "hidden")}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default VerticalTab;
