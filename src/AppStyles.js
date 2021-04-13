/** @format */

import styled, { css } from "styled-components";

export const Heading = styled.div`
  display: flex;
  height: 10vh;
  font-size: 4rem;
  font-weight: 400;
  color: white;
  margin: 24px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1025px) {
    margin: 0;
  }
  @media screen and (max-width: 540px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 2rem;
  }
  ${({ projects }) =>
    projects &&
    css`
      margin-top: 48px;
    `}
  ${({ contact }) =>
    contact &&
    css`
      height: 25vh;
    `}
`;
