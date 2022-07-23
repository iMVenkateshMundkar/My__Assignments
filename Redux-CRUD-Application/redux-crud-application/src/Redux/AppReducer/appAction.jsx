import axios from "axios";
import * as actionTypes from "./appActionTypes";

export const getTasks = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TASKS_REQUEST });
  return axios
    .get("http://localhost:5000/tasks")
    .then((r) =>
      dispatch({ type: actionTypes.GET_TASKS_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.GET_TASKS_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const updateTask = (id, params) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_TASK_REQUEST });
  return axios
    .patch(`http://localhost:5000/tasks/${id}`, params)
    .then((r) =>
      dispatch({ type: actionTypes.UPDATE_TASK_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.UPDATE_TASK_FAILURE,
        payload:
          e.response && e.respose.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const createTask = (params) => (dispatch) => {
  dispatch({ tyep: actionTypes.CREATE_TASK_REQUEST });
  return axios
    .post("http://localhost:5000/tasks", params)
    .then((r) =>
      dispatch({ type: actionTypes.CREATE_TASK_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.CREATE_TASK_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const addSubTask = (id, params) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_SUBTASK_REQUEST });
  return axios
    .patch(`http://localhost:5000/tasks/${id}`, params)
    .then((r) =>
      dispatch({ type: actionTypes.ADD_SUBTASK_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.ADD_SUBTASK_FAILURE,
        payload:
          e.response && e.respose.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const deleteSubTask = (id, params) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_SUBTASK_REQUEST });
  return axios
    .patch(`http://localhost:5000/tasks/${id}`, params)
    .then((r) =>
      dispatch({ type: actionTypes.DELETE_SUBTASK_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.DELETE_SUBTASK_FAILURE,
        payload:
          e.response && e.respose.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};
