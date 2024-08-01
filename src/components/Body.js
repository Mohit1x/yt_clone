import { Outlet } from "react-router-dom";
import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className=" grid grid-flow-col">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
