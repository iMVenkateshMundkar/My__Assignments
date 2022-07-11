import { combineReducers, createStore, legacy_createStore } from "redux";
import { reducer as appTodoReducer } from "./App/reducer";
import { reducer as authTodoReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  app: appTodoReducer,
  auth: authTodoReducer,
});

const store = createStore(rootReducer);

export { store };
