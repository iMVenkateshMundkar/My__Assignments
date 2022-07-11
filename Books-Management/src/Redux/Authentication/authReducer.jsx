import * as actionTypes from "./authActionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  error: "",
};

const userLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        error: "",
      };

    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        error: payload,
      };

    default:
      return state;
  }
};

export { userLoginReducer };
