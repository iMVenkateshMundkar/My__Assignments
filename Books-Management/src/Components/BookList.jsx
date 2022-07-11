import React, { useEffect } from "react";
import BookCard from "./BookCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Actions
import { getBooks } from "../Redux/Application/appAction";

const BookList = () => {
  const books = useSelector((state) => state.AppReducer.books);
  const dispatch = useDispatch();
  const [serachParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (books.length === 0 || location.search) {
      const sortBy = serachParams.get("sortBy");
      let getBooksParams = {
        params: {
          category: serachParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBooksParams));
    } else {
      dispatch(getBooks());
    }
  }, [location.search]);

  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          return (
            <BookCardWrapper key={singleBook.id}>
              <Link to={`/books/${singleBook.id}`}>
                <BookCard bookData={singleBook} />
              </Link>
            </BookCardWrapper>
          );
        })}
    </>
  );
};

export default BookList;

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  padding: 5px;
  width: 310px;
`;
