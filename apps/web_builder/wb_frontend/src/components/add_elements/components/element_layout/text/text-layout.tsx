import React from "react";
import { useNode } from "@craftjs/core";

interface TextComponentProps {
  text?: string;
}

export const TextLayout: React.FC<TextComponentProps> = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <h1
      ref={(ref) => {
        if (ref) {
          connect(ref);
          drag(ref); 
        }
      }}
      className="cursor-pointer"
    >
      {text}
    </h1>
  );
};
TextLayout.craft = {
  displayName: "TextLayout",
  props: {
    text: "Hi there",
  },
};
