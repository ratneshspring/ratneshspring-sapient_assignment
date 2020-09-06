import React from "react";
import { render } from "react-dom";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard/dashboard";

// Create a fresh store
const store = configureStore();

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.querySelector("#app")
);
