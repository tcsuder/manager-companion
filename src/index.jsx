import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ScrollToTop from './components/ScrollToTop';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <ScrollToTop >
      <App />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById("react-app-root")
);
