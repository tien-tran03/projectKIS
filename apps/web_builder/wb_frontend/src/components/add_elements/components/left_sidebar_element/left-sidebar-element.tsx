import React from "react";
import iconLogo from "../../../../assets/icons/logo.svg";
import iconAdd from "../../../../assets/icons/add.svg";
import iconProject from "../../../../assets/icons/project.svg";
import iconCheckbox from "../../../../assets/icons/checkbox-sidebar.svg";
import iconDiv from "../../../../assets/icons/div.svg";
import iconHelp from "../../../../assets/icons/help.svg";
import iconSetting from "../../../../assets/icons/setting.svg";

export const LeftSideBar: React.FC = () => {
  return (
    <aside className="border
     border-gray-500
      bg-slate-900
       h-screen
      w-16
       flex
        flex-col
         items-center
          py-4"
          >
    <div className="mt-5 mb-10">
      <img src={iconLogo} alt="l" width="22" height="23" />
    </div>
    <nav className="flex flex-col space-y-8 flex-1">
      <button className="text-gray-400 hover:text-white">
        <img src={iconAdd} alt="Icon2" width="24" height="25" />
      </button>
      <button className="text-gray-400 hover:text-white">
        <img src={iconProject} alt="Icon3" width="24" height="25" />
      </button>
      <button className="text-gray-400 hover:text-white">
        <img src={iconCheckbox} alt="Icon4" width="24" height="25" />
      </button>
      <button className="text-gray-400 hover:text-white">
        <img src={iconDiv} alt="Icon5" width="24" height="25" />
      </button>
    </nav>
    <div className="flex flex-col space-y-8 mt-auto">
      <button className="text-gray-400 hover:text-white">
        <img src={iconHelp} alt="Icon6" width="24" height="25" />
      </button>
      <button className="text-gray-400 hover:text-white">
        <img src={iconSetting} alt="Icon7" width="24" height="25" />
      </button>
    </div>
  </aside>
  
  );
};

