const Videos = ({ info }) => {
  return (
    <div className="p-2 m-2 w-[22rem] cursor-pointer">
      <img
        className="rounded-xl"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <h2 className="py-2 font-bold">{info?.snippet?.title}</h2>
      <h3 className=" text-[#909090]">{info?.snippet?.channelTitle}</h3>
      <h3 className=" text-[#909090]">{info?.statistics?.viewCount} views</h3>
    </div>
  );
};

export default Videos;
