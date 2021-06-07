import React, { useState } from "react";

const Search = ({searchTerm}) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchTerm(text)
  };
  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={onSubmit}>
        <div className="rounded-none	">
          <input
            type="text"
            placeholder="serach item"
            onChange={(e) => setText(e.target.value)}
            className="py-3 px-3 w-64 border-2 rounded-2xl focus:outline-none"
          required/>
          <button
            type="submit"
            className="py-3 px-3 mx-1 bg-gray-300 rounded-2xl focus:outline-none"
          >
            Serach
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
