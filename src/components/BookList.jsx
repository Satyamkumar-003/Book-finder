import React from "react";
import BookCard from "./BookCard";

// recieves books array from the app.js using the props
const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {/* iterate the map and render the bookcard for each map  */}
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
