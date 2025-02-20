import { Outlet } from "react-router-dom";
import { DefaultFcProps, HasClasses } from "../../react_utils";
import {
  Header,
  Sidebar,
} from "../../components";


export const DefaultLayout: React.FC<DefaultFcProps & HasClasses> = ({
  classes
}) => {
  return (
    <div className={classes.pageWrapper} >
      <div className="flex w-full flex-1">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Outlet />
        </div>
      </div>
      <footer className="bg-green-500">This's footer</footer>
    </div>
  );
};
