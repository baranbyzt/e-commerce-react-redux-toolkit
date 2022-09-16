import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import "./style/General.css";
import { Provider } from "react-redux";
import store from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>
);
