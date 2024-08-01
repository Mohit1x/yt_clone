import { Outlet } from "react-router-dom";
import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className=" grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
