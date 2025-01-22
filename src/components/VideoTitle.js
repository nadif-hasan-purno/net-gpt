import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black to-transparent w-full">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg text-gray-400 w-1/4">{overview}</p>

      <div>
        <button className="bg-white text-black text-lg m-2 px-10 py-4  border-black border-1 drop-shadow-md rounded-md hover:bg-gray-500 hover:text-white">
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-white text-xl m-2 px-10 py-4  border-white border-1 drop-shadow-md rounded-md hover:bg-gray-800 hover:text-white">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
