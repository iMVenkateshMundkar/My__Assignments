import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getTodosRequest = () => {
  return {
    type: actionTypes.GET_TODOS_REQUEST,
  };
};
export const getTodosSuccess = (payload) => {
  return {
    type: actionTypes.GET_TODOS_SUCCESS,
    payload,
  };
};
export const getTodosFailure = () => {
  return {
    type: actionTypes.GET_TODOS_FAILURE,
  };
};

export const getTodos = (dispatch) => {
  dispatch(getTodosRequest());
  axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodosSuccess(r.data)))
    .catch((e) => dispatch(getTodosFailure(e)));
};

export const addTodosRequest = () => {
  return {
    type: actionTypes.ADD_TODOS_REQUEST,
  };
};
export const addTodosSuccess = (payload) => {
  return {
    type: actionTypes.ADD_TODOS_SUCCESS,
    payload,
  };
};
export const addTodosFailure = () => {
  return {
    type: actionTypes.ADD_TODOS_FAILURE,
  };
};
