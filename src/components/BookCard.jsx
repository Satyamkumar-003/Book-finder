import React from "react";

const BookCard = ({ book }) => {
  const coverImg = book.cover_i 
    // buids the cover page as per the book and index
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    // used as place holder when no cover page build
    : "https://via.placeholder.com/150?text=No+Cover";

  return (
    //returing the card with deatils.
    <div className="book-card">
      <img src={coverImg} alt={book.title} /> 
      <h3>{book.title}</h3>
      <p>{book.author_name?.[0] || "Unknown Author"}</p>
      <span>{book.first_publish_year || "N/A"}</span>
    </div>
  );
};

export default BookCard;
