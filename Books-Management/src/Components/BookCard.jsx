import React from "react";

const BookCard = ({ bookData }) => {
  return (
    <div style={{ color: "black" }}>
      <img src={bookData.cover_photo} width="100%" alt="" />
      <div style={{ textDecoration: "none" }}>{bookData.book_name}</div>
      <div>{bookData.release_year}</div>
      <div>{bookData.category}</div>
    </div>
  );
};

export default BookCard;
