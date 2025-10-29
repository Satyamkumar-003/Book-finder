import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);  // array to hold book objects.
  const [loading, setLoading] = useState(false); //boolean to show loading or not
  const [error, setError] = useState(""); // string to hold error message
  //  called when the seaching the book 
  const fetchBooks = async (query) => {
    // handling empty query
    if (!query.trim()) {
      setError("Please enter a book title!");
      setBooks([]);
      return;
    }
    // updating state 
    setLoading(true);
    setError("");

    try {
      // fecting the response as per the query
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      // data.doc is the array of books returned
      const data = await res.json(); //res.json to parse json
      // if no data
      if (data.docs.length === 0) {
        setError("No books found!");
        setBooks([]);
      } else {
        setBooks(data.docs.slice(0, 40)); // limit results for UI
      }
    } catch (err) {
      setError("Something went wrong while fetching data!");
    } finally {
      // updating status of loading
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">📚 Book Finder</h1>
      {/* on searching fetchbook function is called  */}
      <SearchBar onSearch={fetchBooks} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
       {/* showing the books fetched from open library  */}
      <BookList books={books} />
    </div>
  );
}

export default App;
