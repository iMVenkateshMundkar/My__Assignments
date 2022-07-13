import * as actionTypes from "./actionTypes";

const loginTodoRequest = () => {
  return { type: actionTypes.LOGIN_TODO_REQUEST };
};

const loginTodoSuccess = (payload) => {
  return { type: actionTypes.LOGIN_TODO_SUCCESS, payload: payload };
};

const loginTodoFailure = () => {
  return { type: actionTypes.LOGIN_TODO_FAILURE };
};

export { loginTodoFailure, loginTodoRequest, loginTodoSuccess };
