import axios from "axios";
import * as actionTypes from "./appActionTypes";

export const getTasks = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TASKS_REQUEST });
  return axios
    .get("http://localhost:5000/tasks")
    .then((r) =>
      dispatch({ type: actionTypes.GET_TASKS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_TASKS_FAILURE, payload: e }));
};
