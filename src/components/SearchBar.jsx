import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    // stores the user input
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();//prevent page reload
    onSearch(input); // prop passed in app.js when fetching
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for books..."
        value={input}
        onChange={(e) => setInput(e.target.value)}  //updating value on change
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
