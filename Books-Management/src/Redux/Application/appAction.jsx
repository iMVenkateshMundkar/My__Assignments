import * as actionTypes from "./appActionTypes";
import axios from "axios";

const getBooks = (params) => (dispatch) => {
  dispatch({ type: actionTypes.GET_BOOKS_REQUEST });
  axios
    .get("/books", params)
    .then((r) =>
      dispatch({ type: actionTypes.GET_BOOKS_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.GET_BOOKS_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

const editBooks = (params, id) => (dispatch) => {
  dispatch({ type: actionTypes.EDIT_BOOK_DATA_REQUEST });
  axios
    .patch(`/books/${id}`, params)
    .then((r) =>
      dispatch({ type: actionTypes.EDIT_BOOK_DATA_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.EDIT_BOOK_DATA_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export { getBooks, editBooks };
