import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InfoUserContextProvider } from './contexts/InfoUserContext';
import { PagesAffContextProvider } from './contexts/PagesAffContext';
import { Provider } from "react-redux";
import store from './state/store';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PagesAffContextProvider>
        <InfoUserContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ InfoUserContextProvider>
      </ PagesAffContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
