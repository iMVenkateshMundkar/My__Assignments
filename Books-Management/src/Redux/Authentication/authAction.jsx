import * as actionTypes from "./authActionTypes";
import axios from "axios";

const userLogin = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((r) =>
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.USER_LOGIN_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export { userLogin };
