import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const langKey = useSelector((state) => state.config.lang);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // make an api call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal Returns, Koyi Mil Gaya ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    if (!gptResults.choices) {
      // TODO: write error handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // Chupke Chupke, Amar Akbar Anthony, Chhoti Si Baat, Baton Baton Mein, Pati Patni Aur Woh
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // after(split): ["Chupke Chupke", "Amar Akbar Anthony", "Chhoti Si Baat", "Baton Baton Mein", "Pati Patni Aur Woh"]
    // it becomes an array.
    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies , movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-slate-950 grid grid-cols-12 rounded-md bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-[1%] m-[2%] col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-[6%] px-[5%] mx-[20%] my-[5%] bg-red-700 rounded-md font-bold text-white bg-origin-border border-1 border-red-950 shadow-md hover:bg-red-400"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
