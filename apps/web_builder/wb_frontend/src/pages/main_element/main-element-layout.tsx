import { Editor, Frame, Element } from "@craftjs/core";
import {
  LeftSideBar,
  AddElementsHeader,
  RightSidebar,
  DeviceMockup,
  AddElementsComponent,
} from "../../components/add_elements";
import { componentMap } from "../../components/add_elements/components/layout_map";

export const AddElementPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Bên Trái */}
      <LeftSideBar />
      <div className="flex flex-col flex-grow">
        <AddElementsHeader />

        <div className="flex flex-grow">
          <Editor resolver={componentMap}>
            <div className="flex-grow">
              <AddElementsComponent />
            </div>
            <div className="pr-24 flex flex-grow items-center">
              <DeviceMockup>
                <Frame>
                  <Element canvas is={componentMap.ContainerLayout}>
                    <Element is={componentMap.TextLayout} text="Hello world" />
                  </Element>
                </Frame>
              </DeviceMockup>
            </div>
          </Editor>

          <div className="flex flex-col">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
