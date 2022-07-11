import * as actionTypes from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN_TODO_REQUEST:
      return {
        ...state,
        isAuth: false,
        isError: false,
      };

    case actionTypes.LOGIN_TODO_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isError: false,
      };

    case actionTypes.LOGIN_TODO_FAILURE:
      return {
        ...state,
        isAuth: false,
        isError: true,
      };

    case actionTypes.LOGIN_TODO_REQUEST:
      return {
        ...state,
        isAuth: true,
        isError: false,
      };

    case actionTypes.LOGIN_TODO_SUCCESS:
      return {
        ...state,
        isAuth: false,
        token: payload,
        isError: false,
      };

    case actionTypes.LOGIN_TODO_FAILURE:
      return {
        ...state,
        isAuth: true,
        token: "",
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
