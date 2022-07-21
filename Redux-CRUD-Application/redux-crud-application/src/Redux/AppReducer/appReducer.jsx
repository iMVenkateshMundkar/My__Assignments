import * as actionTypes from "./appActionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { appReducer };
