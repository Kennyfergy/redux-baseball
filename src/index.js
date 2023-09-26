import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    //put reducers here
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />)
  </Provider>
);
