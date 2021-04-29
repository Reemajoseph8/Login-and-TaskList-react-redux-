// import { createStore } from "redux";
// import rootReducer from "./reducer/rootReducer";
// import { initialState } from "./initialState";

// import { devToolsEnhancer } from "redux-devtools-extension";
// const store = createStore(rootReducer, initialState, devToolsEnhancer());

// export default store;

import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducer/rootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
