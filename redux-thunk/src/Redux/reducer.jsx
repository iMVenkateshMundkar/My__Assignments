import * as actionTypes from "./actionTypes";

const initalState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.ADD_TODOS_SUCCESS:
      return {
        ...state,
        // todos: payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
