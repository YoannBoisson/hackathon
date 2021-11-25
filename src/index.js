import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InfoUserContextProvider } from './contexts/InfoUserContext';
import { PagesAffContextProvider } from './contexts/PagesAffContext';

ReactDOM.render(
  <React.StrictMode>
    <PagesAffContextProvider>
      <InfoUserContextProvider>
        <App />
      </ InfoUserContextProvider>
    </ PagesAffContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

