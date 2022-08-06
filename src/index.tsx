import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./LandingPage/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}> 
     <App /> 
     </ThemeProvider> 
     
  </React.StrictMode>
);
