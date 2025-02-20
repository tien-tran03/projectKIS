import React, { useEffect, useRef, useState, useMemo } from "react";
import { HasData } from "../../../../react_utils";
import { FiSearch, FiChevronDown, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useNode } from "@craftjs/core";
import { ContainerIcon } from "../element_layout/container/container-icons";
import { TextIcon } from "../element_layout/text/text-icon";
import { ButtonIcon } from "../element_layout/button/button-icon";
import { HeadingIcon } from "../element_layout/heading/heading-icon";
import { ColumnIcon } from "../element_layout/column/column-icon";
import { GridIcon } from "../element_layout/grid/grid-icon";
import { RowIcon } from "../element_layout/row/row-icon";
import { ListIcon } from "../element_layout/list/list-icon";
import { DividerIcon } from "../element_layout/divider/divider-icon";
import { TabIcon } from "../element_layout/tabs/tabs-icon";
import { VideoplayerIcon } from "../element_layout/videoplayer/videoplayer-icon";
import { LinkIcon } from "../element_layout/link/link-icon";
import { CheckboxIcon } from "../element_layout/checkbox/checkbox-icon";
import { ImageIcon } from "../element_layout/image/image-icon";
import { FabIcon } from "../element_layout/fab";
import { RadioIcon } from "../element_layout/radio";
interface ElementData {
  id: string;
  name: string;
  category: string;
  iconUrl: string;
}

export const AddElementsComponent: React.FC<HasData> = ({ data: elementConfigs }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const filteredElements = useMemo(() => {
    return elementConfigs.filter((element: ElementData) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [elementConfigs, searchTerm]);
  const groupedElements = useMemo(() => {
    return filteredElements.reduce((acc: Record<string, ElementData[]>, element: ElementData) => {
      if (!acc[element.category]) acc[element.category] = [];
      acc[element.category].push(element);
      return acc;
    }, {});
  }, [filteredElements]);
  return (
    <div className={`transition-all duration-300 bg-gray-900 text-white h-full flex flex-col ${isSidebarOpen ? "w-64" : "w-12"}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        {isSidebarOpen && <span className="text-sm font-medium">Add Element</span>}
        <button className="text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
        </button>
      </div>
      {isSidebarOpen && (
        <div className="flex px-3 py-2 items-center border-b border-gray-700">
          <FiSearch className="text-gray-400 mr-2" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white text-sm w-full px-2 py-1 rounded outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      {isSidebarOpen &&
        Object.keys(groupedElements).map((groupName) => (
          <div key={groupName} className="pl-1 pr-1 pt-1">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer border-b border-gray-700"
              onClick={() => setCollapsedGroups((prev) => ({ ...prev, [groupName]: !prev[groupName] }))}
            >
              <span className="text-xs font-medium uppercase">{groupName}</span>
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${collapsedGroups[groupName] ? "rotate-180" : ""}`}
              />
            </div>
            {!collapsedGroups[groupName] && (
  <div className="grid grid-cols-3 gap-2 px-2 py-2">
    {groupedElements[groupName].map((element: any) => (
      <div className="flex items-center justify-center w-full">
        {element.name === "Container" && <ContainerIcon />}
        {element.name === "Text" && <TextIcon />}
        {element.name === "Button" && <ButtonIcon />}
        {element.name === "Heading" && <HeadingIcon />}
        {element.name === "Column" && <ColumnIcon />}
        {element.name === "Grid" && <GridIcon />}
        {element.name === "Row" && <RowIcon/>}
        {element.name === "List" && <ListIcon/>}
        {element.name === "Divider" && <DividerIcon/>}
        {element.name === "Tabs" && <TabIcon/>}
        {element.name === "VideoPlayer" && <VideoplayerIcon/>}
        {element.name === "Link" && <LinkIcon/>}
        {element.name === "Checkbox" && <CheckboxIcon/>}
        {element.name === "Image" && <ImageIcon/>}
        {element.name === "FAB" && <FabIcon/>}
        {element.name === "Radio" && <RadioIcon/>}
      </div>
    ))}
  </div>
)}

          </div>
        ))}
      {isSidebarOpen && filteredElements.length === 0 && (
        <div className="text-center text-gray-400 py-4">No elements found.</div>
      )}
    </div>
  );
};
