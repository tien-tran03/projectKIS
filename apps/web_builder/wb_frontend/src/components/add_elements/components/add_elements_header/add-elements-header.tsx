import React from "react";
import pen from "../../../../assets/icons/pen.svg";
import smartPhone from "../../../../assets/icons/smartphone.svg";
import tablet from "../../../../assets/icons/tablet.svg";
import desktop from "../../../../assets/icons/desktop.svg";
import down from "../../../../assets/icons/down.svg";
import error from "../../../../assets/icons/error.svg";
import eye from "../../../../assets/icons/eye.svg";
import search from "../../../../assets/icons/search.svg";
import apk from "../../../../assets/icons/apk.svg";
import share from "../../../../assets/icons/share.svg";

export const AddElementsHeader: React.FC = () => {
  return (
    <header className="border border-gray-700 bg-slate-900 h-12 flex items-center justify-between px-4 text-white shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Project Name</span>
        <button className="text-gray-400 hover:text-white">
          <img src={pen} alt="Edit Icon" width="30" height="30" />
        </button>
      </div>
      <div className="flex items-center space-x-12">
        <span className="text-xs text-gray-400">375px x 812px</span>
        <div className="flex items-center space-x-7">
          <button className="text-gray-400 hover:text-white">
            <img src={smartPhone} alt="Smartphone" width="20" height="20" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <img src={tablet} alt="Tablet" width="20" height="20" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <img src={desktop} alt="Desktop" width="20" height="20" />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-sm">Grids</span>
          <button className="text-gray-400 hover:text-white">
            <img src={down} alt="Dropdown" width="20" height="20" />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white">
            <img src={error} alt="Error Icon" width="25" height="25" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <img src={eye} alt="Eye Icon" width="25" height="25" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white">
          <img src={search} alt="Search Icon" width="20" height="20" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <img src={apk} alt="APK Icon" width="20" height="20" />
        </button>
        <button className="flex items-center text-gray-400 hover:text-white space-x-1">
          <span className="mr-2 text-xs">Share</span>
          <img src={share} alt="Share Icon" width="20" height="20" />
        </button>
      </div>
    </header>
  );
};
