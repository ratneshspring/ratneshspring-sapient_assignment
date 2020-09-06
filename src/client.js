import React, { Component } from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard/dashboard";
import configureStore from "./redux/configureStore";

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.querySelector("#app")
);
