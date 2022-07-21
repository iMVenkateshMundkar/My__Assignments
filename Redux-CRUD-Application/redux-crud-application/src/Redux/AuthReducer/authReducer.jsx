import {
  getLocalLoginData,
  saveLocalLoginData,
} from "../../Utils/localStorage";
import * as actionTypes from "./authActionTypes";

const initialState = {
  isAuth: getLocalLoginData("token") ? true : false,
  token: getLocalLoginData("token") || "",
  userProfile: {},
  isLoading: false,
  isError: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      saveLocalLoginData("token", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };

    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };

    case actionTypes.PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userProfile: payload,
        isError: false,
      };

    case actionTypes.PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        userProfile: {},
      };

    default:
      return state;
  }
};

export { authReducer };
