import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { IconContext } from "react-icons";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/global/theme";
import GlobalStyles from "./styles/global/Global.styled";
import ScrollToTop from "./components/functional/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <IconContext.Provider value={{ size: "24px" }}>
          <App />
        </IconContext.Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
