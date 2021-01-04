import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-white);
  border: 0;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1.5rem 2.5rem;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);

  display: flex;

  svg,
  span {
    margin-left: 1rem;
  }

  transition: all 200ms;

  &:hover {
    transform: scale(1.1) translateY(-1px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
  }
`;
