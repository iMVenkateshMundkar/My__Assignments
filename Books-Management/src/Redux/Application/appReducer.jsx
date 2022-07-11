import * as actionTypes from "./appActionTypes";

const initialState = {
  books: [],
  isLoading: false,
  error: "",
};

const getBooksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case actionTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        isLoading: false,
        error: "",
      };

    case actionTypes.GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case actionTypes.EDIT_BOOK_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case actionTypes.EDIT_BOOK_DATA_SUCCESS:
      let newBooks = state.books.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        books: newBooks,
        isLoading: false,
        error: "",
      };

    case actionTypes.EDIT_BOOK_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export { getBooksReducer };
