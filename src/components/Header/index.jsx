import React from "react";
import styled from "styled-components";
import { Container, Grid, Col } from "../../styles/Grid";
import { StyledButton } from "../../styles/StyledButton";
import Navbar from "../Navbar";

import { StyledHeaderTitle, StyledHeaderInfo, StyledMe } from "./style";

const Header = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid columns="12">
          <Col col={6}>
            <StyledHeaderTitle>
              <h1 className="title">Rockstart web Programmer</h1>
              <p className="subtitle">{"{ Nodejs, React, Graphql }"}</p>
            </StyledHeaderTitle>

            <StyledHeaderInfo>
              <h3>Hello, I am Rayhan</h3>
              <p>
                I am a fullstack web programmer who love to build awesome web
                application on various frontend and backend stacks
              </p>
            </StyledHeaderInfo>

            <StyledHeaderInfo>
              <h3>Where to find me?</h3>
              <ul className="social-links">
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Medium</a>
                </li>
              </ul>
            </StyledHeaderInfo>
          </Col>

          <Col col={6}>
            <StyledButton>
              Download my Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={20}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </StyledButton>
            <StyledMe>
              <div className="my-image">
                {/* <img
                  src="https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=628&q=80"
                  alt="me"
                /> */}
              </div>
            </StyledMe>
          </Col>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
