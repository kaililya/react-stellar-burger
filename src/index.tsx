import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from './services/store'

if (!window.location.pathname.includes('/react-stellar-burger')) {
  window.history.replaceState(
    '',
    '',
    '/react-stellar-burger' + window.location.pathname
  );
};

ReactDOM.render(
  <Router basename="/react-stellar-burger">
    <React.StrictMode>
        <Provider store={store}>
         <App />
       </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function ooooooooooo
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
