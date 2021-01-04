import React from "react";
import { StyledNavbar, StyledLogo, StyledNavigation } from "./style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo>
        Rayhan<span>.</span>
      </StyledLogo>
      <StyledNavigation>
        <a href="/#!">Biography</a>
        <a href="/#!">Expetise</a>
        <a href="/#!">Videos</a>
        <a href="/#!">Blog</a>
      </StyledNavigation>
    </StyledNavbar>
  );
};

export default Navbar;
