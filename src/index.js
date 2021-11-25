import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import store from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
