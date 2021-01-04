import styled from "styled-components";

export const StyledHeaderTitle = styled.div`
  .title {
    font-size: 6.5rem;
  }

  .subtitle {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-weight: bold;
  }
`;

export const StyledHeaderInfo = styled.div`
  width: 38rem;
  h3 {
    font-family: var(--font-secondary);
    font-weight: bold;
    margin-bottom: 0;
  }

  p {
    margin-top: 1rem;
  }

  ul.social-links {
    margin-top: 1rem;
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    li {
      margin-bottom: 1.4rem;
    }
    a {
      color: var(--color-light-dark);
      font-weight: 400;
    }
  }
`;

export const StyledMe = styled.div`
  .my-image {
    width: 38rem;
    height: auto;
    border-radius: var(--radius);
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
`;
