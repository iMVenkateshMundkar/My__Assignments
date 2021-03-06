import * as actionTypes from "./actionTypes";

const initialState = {
  isAuth: false,
  iLoading: false,
  token: "",
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isError: false,
      };

    case actionTypes.LOGIN_TODO_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        token: payload,
        isError: false,
      };

    case actionTypes.LOGIN_TODO_FAILURE:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
