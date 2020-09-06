import React from "react";
import { renderToString } from "react-dom/server";
import Dashboard from "./pages/dashboard/dashboard";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

module.exports = function render(initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState);

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return { content, preloadedState };
};
