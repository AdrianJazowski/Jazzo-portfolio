/** @format */

import { Link } from "react-scroll";
import styled, { css } from "styled-components";

export const CustomNav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
export const BrandInNav = styled(Link)`
  color: #fff;
  justify-self: start;
  margin: auto;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: rgba(15, 193, 107, 0.9);

    @media screen and (max-width: 1025px) {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const NavMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 1025px) {
    display: flex;
    font-size: 2.8rem;
    cursor: pointer;
    margin: auto;
  }
`;
export const NavMenuUl = styled.ul`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  z-index: 100;

  @media screen and (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 135px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ navIconToggle }) =>
      navIconToggle &&
      css`
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `}
  }
`;
export const NavMenuLi = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;
export const LinkInNav = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: rgba(15, 193, 107, 0.9);
  }
  @media screen and (max-width: 1025px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 36px;
    &:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
`;
