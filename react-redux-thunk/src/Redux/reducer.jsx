import * as actionTypes from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const getTodosReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};
