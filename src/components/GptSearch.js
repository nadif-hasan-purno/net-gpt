import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-screen -z-10 inset-0">
        <img src={NETFLIX_BG} alt="Netflix Bg" className="w-full h-full " />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
