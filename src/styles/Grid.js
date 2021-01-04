import styled from "styled-components";
import PropTypes from "prop-types";

export const gridConfig = {
  gutter: "2rem",
  columns: 2,
};

export const Container = styled.div`
  width: 95%;
  max-width: 1170px;
  margin: auto;
`;

export const Grid = styled.div`
  --columns: ${(props) => props.columns || gridConfig.columns};
  display: grid;

  gap: ${({ gutter = "2rem" }) => gutter};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  height: ${({ height = "auto" }) => height};

  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  gutter: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,

  height: PropTypes.string,

  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
};

export const Col = styled.div`
  grid-column: span ${(props) => props.col} / span ${(props) => props.col};

  @media all and (max-width: 800px) {
    grid-column: span 12 / span 12;
  }
  /* @media all and (max-width: var(--size-tab)) {
    background-color: red;
  }

  @media all and (max-width: var(--size-mobile)) {
    background-color: orange;
  } */
`;
