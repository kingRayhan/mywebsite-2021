import styled from "styled-components";

export const StyledNavbar = styled.header`
  padding: 0 3rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.h2`
  font-size: 2.8rem;
  margin: 0;
  span {
    color: var(--color-primary);
  }
`;

export const StyledNavigation = styled.div`
  a {
    margin-right: 1.5rem;
    color: var(--color-dark);
  }
`;
