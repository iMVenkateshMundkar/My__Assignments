import * as actionTypes from "./actionTypes";

const loginTodoRequest = () => {
  return { type: actionTypes.LOGIN_TODO_REQUEST };
};

const loginTodoSuccess = (payload) => {
  return { type: actionTypes.LOGIN_TODO_SUCCESS, payload };
};

const loginTodoFailure = () => {
  return { type: actionTypes.LOGIN_TODO_FAILURE };
};

const logoutTodoRequest = () => {
  return { type: actionTypes.LOGOUT_TODO_REQUEST };
};

const logoutTodoSuccess = (payload) => {
  return { type: actionTypes.LOGOUT_TODO_SUCCESS, payload };
};

const logoutTodoFailure = () => {
  return { type: actionTypes.LOGOUT_TODO_FAILURE };
};

export {
  loginTodoFailure,
  loginTodoRequest,
  loginTodoSuccess,
  logoutTodoFailure,
  logoutTodoRequest,
  logoutTodoSuccess,
};
