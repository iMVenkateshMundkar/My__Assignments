import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getTodos = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TODOS_REQUEST });
  axios
    .get("/todos")
    .then((r) =>
      dispatch({ type: actionTypes.GET_TODOS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_TODOS_FAILURE }));
};