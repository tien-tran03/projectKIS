import React from "react";
import { useEditor } from "@craftjs/core";
import { elementConfigs } from "../../../data";

export const VideoplayerIcon: React.FC = () => {
  const { connectors } = useEditor();
  const textData = elementConfigs.find((el) => el.name === "VideoPlayer");

  if (!textData) return <div>Text not found</div>;

  return (
    <div
      className="flex flex-col items-center gap-5 p-2  cursor-pointer"

    >
      <img src={textData.iconUrl} alt={textData.name} className="w-8 h-8" />
      <span className="text-sm font-medium">{textData.name}</span>
    </div>
  );
};
