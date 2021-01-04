import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { TypographyStyles } from "../styles/Typography";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <TypographyStyles />
      {children}
    </>
  );
};

export default Layout;
