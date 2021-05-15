import React from "react";
// import react from "react";
import ReactDOM from "react-dom";
// //redux
// import { provider } from "react-redux";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import reducers from "./redux/reducers/index";
import store from "./redux/store.js";

import App from "./App";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
