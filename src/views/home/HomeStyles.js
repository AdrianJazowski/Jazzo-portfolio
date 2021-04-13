/** @format */

import styled, { css } from "styled-components";
import bgPhoto from "../../assets/bg.jpg";
import { FaArrowCircleUp } from "react-icons/fa";

export const HomeWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 90vh;
  background-image: url(${bgPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;

  @media screen and (max-width: 1025px) {
    background-size: cover;
  }
  @media screen and (max-width: 420px) {
  }
`;
export const LeftHomeDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -5;
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
export const HomeH1 = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  color: #fff;
  @media screen and (max-width: 1025px) {
    font-size: 5rem;
    font-weight: 600;
  }
  @media screen and (max-width: 420px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;
export const HomeH2 = styled.h2`
  margin-top: rem;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 1025px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const Arrow = styled(FaArrowCircleUp)`
  position: fixed;
  z-index: 999;
  bottom: 5%;
  right: 5%;
  font-size: 48px;
  color: rgba(15, 193, 107, 0.9);
  cursor: pointer;
  @media screen and (max-width: 1025px) {
  }
  @media screen and (max-width: 420px) {
    right: 10%;
  }
`;
