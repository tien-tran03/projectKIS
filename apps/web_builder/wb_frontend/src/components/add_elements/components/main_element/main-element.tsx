import React from "react";
import { Element, useNode } from "@craftjs/core";

interface DeviceMockupProps {
  children?: React.ReactNode;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ children }) => {
  return (
    <div
      className=" bg-white p-4  "
    >
      <h3 className="text-center text-gray-700">Iphone</h3>
      <div
        className="h-[1000px] w-[900px] border-solid border-2 border-gray-300 p-2"
      >
        {children}
      </div>
    </div>
  );
};
