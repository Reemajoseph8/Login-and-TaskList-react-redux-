import { combineReducers } from "redux";
import auth from "./auth";
import operations from "./operations";

const reducers = combineReducers({
  auth,
  operations,
});

export default reducers;
