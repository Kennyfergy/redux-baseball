import React from "react";
import ReactDOM from "react-dom/client"; //client
import App from "./components/App/App";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import pitcherList from "./reducers/pitcherList.reducer";
import catcherList from "./reducers/catcherList.reducer";

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
    <App />
  </Provider>
);
