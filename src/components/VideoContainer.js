import Videos from "./Videos";
import { Link, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { handleAllVideos, handleFilteredVideo } from "../utils/AllVideosSlice";
import Store from "../utils/Store";
const VideoContainer = () => {
  const dispatch = useDispatch();

  const filteredVideos = useSelector((Store) => Store.videos.filteredVideos);
  const [region, setRegion] = useState("US");
  const [showRegion, setShowRegion] = useState(false);

  const getVideos = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${region}&key=` +
          GOOGLE_API_KEY
      );
      console.log(region);
      const json = await data.json();
      dispatch(handleAllVideos(json.items));
      dispatch(handleFilteredVideo(json.items));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, [region]);

  return (
    <div>
      <img
        onClick={() => setShowRegion((prev) => !prev)}
        className="w-8 cursor-pointer"
        src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/view-more.png"
      />
      {showRegion && (
        <>
          <button
            onClick={() => setRegion("GB")}
            className="p-2 m-2 w-20 bg-gray-100 hover:bg-gray-300"
          >
            UK
          </button>
          <button
            onClick={() => setRegion("IN")}
            className="p-2 m-2 w-20 bg-gray-100 hover:bg-gray-300"
          >
            IND
          </button>
          <button
            onClick={() => setRegion("US")}
            className="p-2 m-2 w-20 bg-gray-100 hover:bg-gray-300"
          >
            US
          </button>
          <button
            onClick={() => setRegion("JP")}
            className="p-2 m-2 w-20 bg-gray-100 hover:bg-gray-300"
          >
            JAP
          </button>
          <button
            onClick={() => setRegion("KR")}
            className="p-2 m-2 w-20 bg-gray-100 hover:bg-gray-300"
          >
            KOR
          </button>
        </>
      )}
      <div className="flex flex-wrap mx-auto justify-center">
        {filteredVideos?.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <Videos info={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
