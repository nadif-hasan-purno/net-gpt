import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector(state => state.config.lang);


  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 bg-slate-950 grid grid-cols-12 rounded-md bg-opacity-80">
        <input
          className="p-[1%] m-[2%] col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-[6%] px-[5%] mx-[20%] my-[5%] bg-red-700 rounded-md font-bold text-white bg-origin-border border-1 border-red-950 shadow-md hover:bg-red-400">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar