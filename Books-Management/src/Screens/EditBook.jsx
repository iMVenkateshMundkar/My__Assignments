import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBooks, getBooks } from "../Redux/Application/appAction";

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
  const [currentBook, setCurrentBook] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const navigate = useNavigate();

  const handleEditData = () => {
    dispatch(
      editBooks({ book_name: newTitle, author: newAuthor }, currentBook.id)
    );
    console.log(books);
    navigate(`/books/${id}`);
  };

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, []);

  useEffect(() => {
    let tempBook = books.find((item) => item.id === id);
    tempBook && setCurrentBook(tempBook);
  }, []);

  return (
    <div>
      <form onSubmit={handleEditData}>
        <label>Enter the new title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <label>Enter the new author name</label>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button type="submit">Edit & Save</button>
      </form>
    </div>
  );
};

export default EditBook;
