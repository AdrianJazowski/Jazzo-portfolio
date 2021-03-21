/** @format */

import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterStyles = styled.div`
  width: 100vw;
  text-align: center;
`;

export const FooterMedia = styled.div``;
export const FooterH2 = styled.h2`
  margin: 0;
  padding-top: 24px;
  color: #fff;
`;
export const FooterIcons = styled.div`
  font-size: 75px;
  margin: 0;
  svg {
    color: rgba(15, 193, 107, 0.5);
    margin: 0 10px 15px 10px;
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
`;
export const FooterNavigation = styled.div`
  margin: 24px;
  @media screen and (max-width: 420px) {
    display: grid;
  }
`;
export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 24px;
  margin: 25px 15px;
  cursor: pointer;
  &:hover {
    color: rgba(15, 193, 107, 0.5);
  }
`;
export const FooterP = styled.p`
  color: #fff;
  margin: 0;
`;
