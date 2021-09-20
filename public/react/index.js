import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import {HashRouter} from 'react-router-dom';

import { App } from "./components/App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <HashRouter>
    <App />
  </HashRouter>
  </ThemeProvider>,
  document.getElementById("root") //to this
);
