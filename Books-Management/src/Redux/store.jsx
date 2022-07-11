import {
  compose,
  legacy_createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { getBooksReducer as AppReducer } from "./Application/appReducer";
import { userLoginReducer as AuthReducer } from "./Authentication/authReducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ AppReducer, AuthReducer });

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
