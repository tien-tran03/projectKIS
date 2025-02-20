import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux_logic/store";
import { setProperties } from "../../../../redux_logic/features/properties_data_panel/properties";
import Slider from "@mui/material/Slider";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Height as HeightIcon, WidthFull as WidthFullIcon } from "@mui/icons-material";

export const ContainerProperties: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const properties = useSelector((state: RootState) => state.properties);

  const [isExpanded, setIsExpanded] = useState(true);
  const [sections, setSections] = useState({
    fillColor: true,
    borderColor: true,
    borderWidth: true,
    borderRadius: true,
    padding: true,
    height: true,
    width: true,  
  });

  const handleChange = (newProperties: Partial<RootState["properties"]>) => {
    dispatch(setProperties(newProperties));
  };

  return (
    <div className="w-full bg-transparent text-white p-2 border-t border-gray-700 shadow-lg">
      <div
        className="flex items-center justify-between px-2 py-2 cursor-pointer border-b border-gray-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-sm font-semibold">Container Properties</h2>
        <ExpandMoreIcon className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </div>

      {isExpanded && (
        <div>
          {Object.entries(sections).map(([key, value]) => (
            <div key={key}>
              <div
                className="flex items-center justify-between px-2 py-2 cursor-pointer border-b border-gray-700"
                onClick={() => setSections((prev) => ({ ...prev, [key]: !value }))}
              >
                <label className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                <ExpandMoreIcon className={`transform transition-transform ${value ? "rotate-180" : ""}`} />
              </div>
              {value && (
                <div className="p-2">
                  {key === "fillColor" && (
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={properties.backgroundColor}
                        onChange={(e) => handleChange({ backgroundColor: e.target.value })}
                        className="w-10 h-10 border border-gray-600"
                      />
                      <input
                        type="text"
                        value={properties.backgroundColor}
                        onChange={(e) => handleChange({ backgroundColor: e.target.value })}
                        className="w-20 bg-gray-800 text-white text-sm border border-gray-600 px-2 py-1 text-center"
                      />
                    </div>
                  )}
                  {key === "borderColor" && (
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={properties.borderColor}
                        onChange={(e) => handleChange({ borderColor: e.target.value })}
                        className="w-10 h-10 border border-gray-600"
                      />
                      <input
                        type="text"
                        value={properties.borderColor}
                        onChange={(e) => handleChange({ borderColor: e.target.value })}
                        className="w-20 bg-gray-800 text-white text-sm border border-gray-600 px-2 py-1 text-center"
                      />
                    </div>
                  )}
                  {key === "borderWidth" && (
                    <input
                      type="text"
                      value={properties.borderWidth}
                      onChange={(e) => handleChange({ borderWidth: e.target.value })}
                      className="w-full bg-gray-800 text-white border border-gray-600 px-2 py-1 text-sm"
                    />
                  )}
                  {key === "borderRadius" && (
                    <Slider
                      min={0}
                      max={100}
                      value={parseInt(properties.borderRadius.replace("px", ""), 10) || 0}
                      onChange={(event, val) => handleChange({ borderRadius: `${val}px` })}
                      valueLabelDisplay="auto"
                    />
                  )}
                  {key === "padding" && (
                    <div className="grid grid-cols-2 gap-4">
                      {["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"].map((prop) => (
                        <div key={prop}>
                          <label className="text-xs font-medium">{prop.replace("padding", "")}</label>
                          <Slider
                            min={0}
                            max={100}
                            value={typeof properties[prop as keyof RootState["properties"]] === 'number' ? properties[prop as keyof RootState["properties"]] : 0}
                            onChange={(event, val) => handleChange({ [prop]: val })}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {key === "height" && (
                    <div className="flex items-center gap-2">
                      <IconButton
                        onClick={() => handleChange({ height: properties.height ? properties.height : 300 })}
                      >
                        <HeightIcon />
                      </IconButton>
                      <input
                        type="number"
                        value={properties.height }
                        onChange={(e) => handleChange({ height: e.target.value })}
                        className="w-full bg-gray-800 text-white border border-gray-600 px-2 py-1 text-sm"
                      />
                    </div>
                  )}
                  {key === "width" && (
                    <div className="flex items-center gap-2">
                      <IconButton
                        onClick={() => handleChange({ width: properties.width ? properties.width : 300 })}
                      >
                        <WidthFullIcon />
                      </IconButton>
                      <input
                        type="number"
                        value={properties.width}
                        onChange={(e) => handleChange({ width: e.target.value })}
                        className="w-full bg-gray-800 text-white border border-gray-600 px-2 py-1 text-sm"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
