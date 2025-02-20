import React from "react";
import { useEditor } from "@craftjs/core";
import { elementConfigs } from "../../../data";

export const RadioIcon: React.FC = () => {
  const { connectors } = useEditor();
  const containerData = elementConfigs.find((el) => el.name === "Radio");

  if (!containerData) return <div>Container not found</div>;

  return (
    <div
      className="flex flex-col items-center gap-5 p-2  cursor-pointer"
    
    >
      <img src={containerData.iconUrl} alt={containerData.name} className="w-8 h-8" />
      <span className="text-sm font-medium">{containerData.name}</span>
    </div>
  );
};
