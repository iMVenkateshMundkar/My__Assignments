import * as actionTypes from "./actionTypes";

const getTodoListsRequest = () => {
  return { type: actionTypes.GET_TODO_LISTS_REQUEST };
};

const getTodoListsSuccess = (payload) => {
  return { type: actionTypes.GET_TODO_LISTS_SUCCESS, payload };
};

const getTodoListsFailure = () => {
  return { type: actionTypes.GET_TODO_LISTS_FAILURE };
};

const addTodoRequest = () => {
  return { type: actionTypes.ADD_TODO_REQUEST };
};

const addTodoSuccess = (payload) => {
  return { type: actionTypes.ADD_TODO_SUCCESS, payload };
};

const addTodoFailure = () => {
  return { type: actionTypes.ADD_TODO_FAILURE };
};

const toggleTodoRequest = () => {
  return { type: actionTypes.TOGGLE_TODO_REQUEST };
};

const toggleTodoSuccess = (payload) => {
  return { type: actionTypes.TOGGLE_TODO_SUCCESS, payload };
};

const toggleTodoFailure = () => {
  return { type: actionTypes.TOGGLE_TODO_FAILURE };
};

const removeTodoRequest = () => {
  return { type: actionTypes.REMOVE_TODO_REQUEST };
};

const removeTodoSuccess = (payload) => {
  return { type: actionTypes.REMOVE_TODO_SUCCESS, payload };
};

const removeTodoFailure = () => {
  return { type: actionTypes.REMOVE_TODO_FAILURE };
};

const editTodoRequest = () => {
  return { type: actionTypes.EDIT_TODO_REQUEST };
};

const editTodoSuccess = (payload) => {
  return { type: actionTypes.EDIT_TODO_SUCCESS, payload };
};

const editTodoFailure = () => {
  return { type: actionTypes.EDIT_TODO_FAILURE };
};

export {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  editTodoFailure,
  editTodoRequest,
  editTodoSuccess,
};
