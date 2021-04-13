/** @format */
import styled, { css } from "styled-components";
import cardReverse from "../../assets/cardReverse.jpg";

export const ProjectPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;

export const ProjectCardDeck = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const CardIcons = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 1.1;
  cursor: pointer;

  svg {
    margin: 0 15px 25px 15px;
    color: grey;
    &:hover {
      color: rgba(19, 195, 109, 1);
    }
  }
`;

export const Cardwrapper = styled.div`
  margin: 25px 25px 0;
  width: 300px;
  height: 400px;
  perspective: 6000px;
`;
export const CardInner = styled.li`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  list-style: none;

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;
export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  background-image: url(${cardReverse});
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h2 {
    color: #fff;
    font-size: 32px;
  }
`;

export const FlipDiv = styled.div`
  cursor: pointer;
  height: 70px;
  width: 80px;
  background-image: url(${cardReverse});
  background-position: top;
  position: absolute;
  border-radius: 75px;
  transform: translate(-40px, -35px);
  z-index: 999;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  background-color: #f3f3f3;
  transform: rotateY(180deg);
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;
export const CardHeader = styled.div`
  position: relative;
  padding: 10px 10px 20px;
  height: 40%;
  h2 {
    color: black;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    transform: translate(0%, -100%);
  }
`;
export const CardImg = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 5px solid #fff;
  object-fit: cover;
`;
export const CardBody = styled.div`
  text-align: center;
  height: 35%;
  h3 {
    color: #212121;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    color: #212121;
    font-size: 18px;
    line-height: 1.4;
  }
`;
export const DemoLink = styled.div`
  display: flex;
  height: 10%;
  text-align: center;
  align-items: center;
  a {
    color: #212121;
    font-size: 16px;
    font-weight: 600;
    flex: 1;
    &:visited {
      text-decoration: none;
      color: #212121;
    }
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
`;
