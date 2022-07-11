import * as actionTypes from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_TODO_LISTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GET_TODO_LISTS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_TODO_LISTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.ADD_TODO_SUCCESS:
      let newTodo = [...state.todos, payload];
      return {
        ...state,
        todos: newTodo,
        isLoading: false,
        isError: false,
      };

    case actionTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.TOGGLE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.TOGGLE_TODO_SUCCESS:
      let newtoggledTodo = state.todos.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        todos: newtoggledTodo,
        isLoading: false,
        isError: false,
      };

    case actionTypes.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.REMOVE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.REMOVE_TODO_SUCCESS:
      let removedTodo = state.todos.filter((item) => item.id !== payload);
      return {
        ...state,
        todos: removedTodo,
        isLoading: false,
        isError: false,
      };

    case actionTypes.REMOVE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.EDIT_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.EDIT_TODO_SUCCESS:
      let newEditedTodo = state.todos.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        todos: newEditedTodo,
        isLoading: false,
        isError: false,
      };

    case actionTypes.EDIT_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
