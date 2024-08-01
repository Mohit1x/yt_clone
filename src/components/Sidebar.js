import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSlideOpen = useSelector((store) => store.sidebar.value);

  if (!isSlideOpen) return null;

  return (
    <div className="col-span-1 m-6 shadow-lg top-0 sticky h-fit">
      <h1 className=" font-bold hover:bg-gray-200  cursor-pointer w-[150px] my-6 py-2  px-6">
        <Link to="./">HOME</Link>
      </h1>
      <h1 className=" font-bold hover:bg-gray-200 w-[150px] py-2 px-6 cursor-pointer my-6">
        SHORTS
      </h1>
      <h1 className=" font-bold hover:bg-gray-200 w-[150px] py-2 px-5 cursor-pointer my-6">
        SUBSCRIPTIONS
      </h1>
      <h1 className=" font-bold hover:bg-gray-200 w-[150px] py-2 px-5 cursor-pointer my-6">
        HISTORY
      </h1>
      <h1 className=" font-bold hover:bg-gray-200 w-[150px] py-2 px-5 cursor-pointer my-6">
        MUSIC
      </h1>
      <h1 className=" font-bold hover:bg-gray-200 w-[150px] py-2 px-5 cursor-pointer my-6">
        SETTINGS
      </h1>
    </div>
  );
};

export default Sidebar;
