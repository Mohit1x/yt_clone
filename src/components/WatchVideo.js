import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    closeSidebar();
  }, []);

  return (
    <div className="flex">
      <div className="px-5">
        <iframe
          width="920"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchVideo;
