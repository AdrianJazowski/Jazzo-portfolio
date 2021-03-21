/** @format */

import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/navigation/Navigation";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { mainTheme } from "../globalStyles/mainTheme";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={mainTheme}>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
