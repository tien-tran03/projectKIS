import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux_logic/store";
import { setProperties } from "../../../../redux_logic/features/properties_data_panel/properties";  
import { TextField, InputAdornment } from "@mui/material";
import { Link as LinkIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { ContainerProperties } from "../edit_properties";

export const RightSidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const containerProperties = useSelector((state: RootState) => state.properties);
  const [isSizeExpanded, setIsSizeExpanded] = useState<boolean>(true);

  const handleContainerChange = (newProperties: Partial<typeof containerProperties>) => {
    dispatch(setProperties(newProperties));
  };

  return (
    <div className="bg-gray-900 text-white w-72 h-full flex flex-col p-2 border-l border-gray-700">
      <div className="flex flex-col gap-3">

        <div className="flex justify-between border-b border-gray-700 pb-1">
          <button className="text-xs text-white font-medium px-2 py-1 bg-gray-800 rounded">Style</button>
          <button className="text-xs text-gray-400 font-medium px-2 py-1 hover:bg-gray-800 rounded">Interactions</button>
          <button className="text-xs text-gray-400 font-medium px-2 py-1 hover:bg-gray-800 rounded">Inspector</button>
        </div>

        <div className="border-b border-gray-700 pb-2">
          <label className="block text-xs font-medium mb-1">Page</label>
          <select className="bg-gray-800 text-white text-sm w-full p-1 rounded border border-gray-700 focus:outline-none" defaultValue="Login">
            <option value="Login">Login</option>
            <option value="Home">Home</option>
            <option value="Settings">Settings</option>
          </select>
        </div>
        <div className="border-b border-gray-700">
          <div
            className="flex items-center justify-between px-3 py-2 bg-gray-800 cursor-pointer"
            onClick={() => setIsSizeExpanded(!isSizeExpanded)}
          >
            <label className="text-sm font-medium text-white">Size</label>
            <ExpandMoreIcon className={`transform transition-transform duration-200 ${isSizeExpanded ? "rotate-180" : "rotate-0"}`} />
          </div>

          {isSizeExpanded && (
            <div className="transition-all duration-300">
              <div className="grid grid-cols-3 gap-1 items-center mb-5">
                <div className="col-span-1">
                  <label className="block text-xs font-medium">Width</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    defaultValue="375"
                    fullWidth
                    InputProps={{
                      endAdornment: <InputAdornment position="end">px</InputAdornment>,
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "#1F2937", color: "white", borderRadius: "6px" } }}
                  />
                </div>

                <div className="col-span-1 flex items-center justify-center">
                  <LinkIcon sx={{ color: "#9CA3AF", cursor: "pointer" }} />
                </div>

                <div className="col-span-1">
                  <label className="block text-xs font-medium">Height</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    defaultValue="812"
                    fullWidth
                    InputProps={{
                      endAdornment: <InputAdornment position="end">px</InputAdornment>,
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "#1F2937", color: "white", borderRadius: "6px" } }}
                  />
                </div>
              </div>


              <div className="relative flex justify-center items-center h-16 border border-gray-700 rounded bg-gray-800">
                <span className="text-xs text-white absolute">Padding</span>
                <div className="absolute flex flex-col items-center justify-between h-full">
                  <span className="text-xs text-gray-500">Auto</span>
                  <span className="text-xs text-gray-500">Auto</span>
                </div>
                <div className="absolute flex flex-row items-center justify-between w-full">
                  <span className="text-xs text-gray-500">Auto</span>
                  <span className="text-xs text-gray-500">Auto</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gap */}
        <div className="border-b border-gray-700 pb-2">
          <label className="block text-xs font-medium mb-1">Gap</label>
          <div className="grid grid-cols-3 gap-1 items-center">
            <div className="col-span-1">
              <label className="block text-xs font-medium">Columns</label>
              <TextField
                variant="outlined"
                size="small"
                defaultValue="0"
                fullWidth
                type="number"
                sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "#1F2937", color: "white", borderRadius: "6px" } }}
              />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <LinkIcon sx={{ color: "#9CA3AF", cursor: "pointer" }} />
            </div>

            <div className="col-span-1">
              <label className="block text-xs font-medium">Rows</label>
              <TextField
                variant="outlined"
                size="small"
                defaultValue="0"
                fullWidth
                type="number"
                sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "#1F2937", color: "white", borderRadius: "6px" } }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <ContainerProperties properties={containerProperties} onChange={handleContainerChange} />
      </div>
    </div>
  );
};
