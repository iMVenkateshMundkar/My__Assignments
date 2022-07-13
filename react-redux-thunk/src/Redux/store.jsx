import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { getTodosReducer } from "./reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  getTodosReducer,
  composeEnhancers(applyMiddleware(thunk))
);
