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
    case actionTypes.UPDATE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPDATE_TASK_SUCCESS:
      let updateTasks = state.tasks.filter((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        tasks: updateTasks,
        isLoading: false,
        isError: false,
      };
    case actionTypes.UPDATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actionTypes.CREATE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_TASK_SUCCESS:
      let addedTasks = state.tasks.push(payload);
      return {
        ...state,
        tasks: addedTasks,
        isLoading: false,
        isError: false,
      };
    case actionTypes.CREATE_TASK_FAILURE:
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
