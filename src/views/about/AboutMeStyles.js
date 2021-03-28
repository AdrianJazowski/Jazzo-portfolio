/** @format */

import styled, { css } from "styled-components";

export const AboutMeWrapper = styled.div`
  display: block;
  height: 120vh;
  width: 100vw;

  @media screen and (max-width: 1025px) {
    height: 90vh;
  }
  @media screen and (max-width: 420px) {
    height: 340vh;
  }
`;
export const LeftAbouteMeDiv = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  margin: auto;
  @media screen and (max-width: 1025px) {
    height: 50vh;
    margin: auto;
  }
  @media screen and (max-width: 420px) {
    height: 190vh;
  }
`;
export const RightAbouteMeDiv = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  margin: 24px auto 36px;
  @media screen and (max-width: 1025px) {
    height: 40vh;
    margin: 24px auto 24px;
  }
  @media screen and (max-width: 420px) {
    height: 150vh;
  }
`;
export const Skills = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 420px) {
    margin: 0 auto;
  }
`;
export const AboutMeH2 = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  padding-bottom: 24px;
  margin: 10px;
`;

export const SkillsIcons = styled.div`
  font-size: 100px;
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  svg {
    color: rgba(15, 193, 107, 0.5);
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
  @media screen and (max-width: 420px) {
    display: inline-block;
  }
`;

export const ContainerForText = styled.div`
  display: flex;
  background-color: rgba(15, 193, 107, 0.1);
  border-radius: 3em;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  border: solid 2px transparent;
  background-clip: padding-box;
  align-items: center;
  text-align: center;
  place-content: center;
  box-shadow: 0px 0px 15px 10px rgb(15 193 107 / 50%);
  ${({ one }) =>
    one &&
    css`
      grid-column: 1/2;
      grid-row: 1/2;
    `}
  ${({ two }) =>
    two &&
    css`
      grid-column: 2/3;
      grid-row: 2/3;
    `}
    ${({ three }) =>
    three &&
    css`
      grid-column: 1/2;
      grid-row: 3/4;
    `}
    ${({ four }) =>
    four &&
    css`
      grid-column: 2/3;
      grid-row: 4/5;
    `}
    @media screen and (max-width: 1025px) {
    margin: 36px;
  }
`;
export const TextInGrid = styled.h5`
  padding: 0 12px;
  font-size: 18px;
  color: white;
  @media screen and (max-width: 1025px) {
    padding: 24px;
    font-size: 24px;
  }
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
  @media screen and (max-width: 1025px) {
    display: block;
    margin: 24px;
  }
`;

export const IconContainer = styled.div`
  width: 20%;
  p {
    font-size: 22px;
    color: #fff;
  }
  @media screen and (max-width: 420px) {
    display: contents;
  }
`;
