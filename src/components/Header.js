import { useDispatch, useSelector } from "react-redux";
import { toDark, toggle } from "../utils/SidebarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResult } from "../utils/SearchSlice";
import { handleFilteredVideo } from "../utils/AllVideosSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheSearch = useSelector((store) => store.search);
  const allVideo = useSelector((store) => store.videos.allVideo);

  const searchData = () => {
    const filter = allVideo.filter((video) =>
      video.snippet.title.toLowerCase().includes(searchText.toLowerCase())
    );

    dispatch(handleFilteredVideo(filter));
  };

  const dispatch = useDispatch();

  const btnToggle = () => {
    dispatch(toggle());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[searchText]) {
        setSuggestions(cacheSearch[searchText]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchText);
      const json = await data.json();

      setSuggestions(json[1]);

      dispatch(
        cacheResult({
          [searchText]: json[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex grid grid-flow-col items-center mx-4 shadow-lg p-2">
      <div className="flex col-span-2 items-center">
        <img
          onClick={() => btnToggle()}
          className="w-6 h-6 mr-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Hamburger Icon"
        />
        <Link to="./">
          <img
            className="w-[120px] cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ3eqypsoYsYKfqRQARvArBYzJgLUfqErnQ&s"
            alt="yt__logo"
          />
        </Link>
      </div>
      <div className="col-span-10 ml-24 relative">
        <input
          type="text"
          className=" w-7/12 border border-gray-400 rounded-l-full py-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          onClick={() => searchData()}
          className="border border-gray-400 rounded-r-full  py-1 px-2 bg-gray-100"
        >
          Search
        </button>
        {showSuggestions && (
          <ul className="absolute top-10 bg-white py-2 px-5 w-[31rem] shadow-lg rounded-lg border border-gray-100">
            {suggestions.map((suggestion, index) => {
              return (
                <li key={index} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {suggestion}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <img
        className="w-10 col-span-1"
        src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        alt="avatar"
      />
    </div>
  );
};

export default Header;
