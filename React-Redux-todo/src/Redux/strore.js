import { combineReducers, legacy_createStore } from "redux";
import { reducer as appTodoReducer } from "./App/reducer";
import { reducer as authTodoReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  app: appTodoReducer,
  auth: authTodoReducer,
});

const store = legacy_createStore(rootReducer);

export { store };
