import React from "react";
import { useEditor } from "@craftjs/core";
import { elementConfigs } from "../../../data";
import { TextLayout } from "./text-layout";

export const TextIcon: React.FC = () => {
  const { connectors } = useEditor();
  const textData = elementConfigs.find((el) => el.name === "Text");

  if (!textData) return <div>Text not found</div>;

  return (
    <div
      className="flex flex-col items-center gap-5 p-2  cursor-pointer"
      ref={(ref) => { if (ref) connectors.create(ref, <TextLayout/>); }}
    >
      <img src={textData.iconUrl} alt={textData.name} className="w-8 h-8" />
      <span className="text-sm font-medium">{textData.name}</span>
    </div>
  );
};
