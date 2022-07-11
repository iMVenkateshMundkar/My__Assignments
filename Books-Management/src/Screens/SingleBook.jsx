import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooks } from "../Redux/Application/appAction";
import { Link } from "react-router-dom";
import "../Style/SingleBook.css";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (books?.length === 0) {
      dispatch(getBooks());
    }
  }, [books?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const tempBook = books?.find((book) => book.id === Number(id));
      tempBook && setCurrentBook(tempBook);
    }
  }, [books, id]);

  return (
    <div className="singlebook">
      <img src={currentBook.cover_photo} alt="" />
      <div>
        <h3>{currentBook.book_name}</h3>
        <p>
          Author : <span>{currentBook.author}</span>
        </p>
        <p>
          No. of chapters: <span>{currentBook.no_of_chapters}</span>
        </p>
        <p>
          Categosy: <span>{currentBook.category}</span>
        </p>
        <p>
          Release year: <span>{currentBook.release_year}</span>
        </p>
        <Link to={`/books/${currentBook.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBook;
