import axios from "axios";
import * as actionTypes from "./authActionTypes";

const register = (params) => (dispatch) => {
  dispatch({ type: actionTypes.REGISTER_REQUEST });
  return axios
    .post("/auth/register", params)
    .then((r) => {
      dispatch({ type: actionTypes.REGISTER_SUCCESS, payload: r.data });
      return actionTypes.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({
        type: actionTypes.REGISTER_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
      return actionTypes.REGISTER_FAILURE;
    });
};

const login = (params) => (dispatch) => {
  dispatch({ type: actionTypes.LOGIN_REQUEST });
  return axios
    .post("/auth/login", params)
    .then((r) => {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: r.data.token });
      return actionTypes.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
      return actionTypes.LOGIN_FAILURE;
    });
};

const getProfile = (username, token) => (dispatch) => {
  dispatch({ type: actionTypes.PROFILE_REQUEST });
  return axios
    .get(`/user/${username}`, {
      headers: {
        Autherization: token,
      },
    })
    .then((r) => {
      dispatch({ type: actionTypes.PROFILE_SUCCESS, payload: r.data });
      return actionTypes.PROFILE_SUCCESS;
    })
    .catch((e) => {
      dispatch({
        type: actionTypes.PROFILE_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
      return actionTypes.PROFILE_FAILURE;
    });
};

export { register, login, getProfile };
