import React from "react";
import { useNode } from "@craftjs/core";
import { Paper } from "@material-ui/core";

interface ContainerProps {
  children?: React.ReactNode;
}

export const ContainerLayout: React.FC<ContainerProps> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
          
        }
      }}
    >
      {children ? (
        children
      ) : (
        <div className="text-center italic p-4 bg-yellow-100 outline-1 outline-dashed outline-amber-400 h-44 w-44">
        </div>
      )}
    </div>
  );
};
ContainerLayout.craft = {
  displayName: 'ContainerLayout',
  rules: {
    canDrag: () => true,
    canDrop: (incomingNode:any) => {
      return true; 
    },
  },
  canvas: true,
};
