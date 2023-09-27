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

const pitcherList = (
  state = ["Maud Nelson", "Ila Borders", "Don Newcombe", "CC Sabathia"],
  action
) => {
  switch (action.type) {
    case "SET_PITCHER_LIST":
      return [];
    case "ADD_PITCHER":
      return [...state, action.payload];
    default:
      return state;
  }
};
const catcherList = (
  state = ["Roy Campanella", "Elston Howard", "Kenji Jojima"],
  action
) => {
  switch (action.type) {
    case "SET_CATCHER_LIST":
      return [];
    case "ADD_CATCHER":
      return [...state, action.payload];
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    //put reducers here
    pitcherList,
    catcherList,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />)
  </Provider>
);
