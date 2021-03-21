/** @format */

import React, { useState } from "react";
import {
  HomeWrapper,
  LeftHomeDiv,
  HomeH1,
  Content,
  HomeH2,
  LinkInHome,
  TextInLink,
  Arrow,
} from "./HomeStyles";
import { animateScroll } from "react-scroll";

const Home = () => {
  const [isGoToTopBtnVisible, setIsGoToTopBtnVisible] = useState(false);

  const showAndHideGoToTopBtn = () => {
    if (!isGoToTopBtnVisible && window.pageYOffset > 300) {
      setIsGoToTopBtnVisible(true);
    } else if (isGoToTopBtnVisible && window.pageYOffset <= 300) {
      setIsGoToTopBtnVisible(false);
    }
  };

  window.addEventListener("scroll", showAndHideGoToTopBtn);

  return (
    <>
      {isGoToTopBtnVisible ? (
        <Arrow onClick={() => animateScroll.scrollToTop()}>go top</Arrow>
      ) : null}

      <HomeWrapper>
        <LeftHomeDiv>
          <Content>
            <HomeH1>Front-End Developer</HomeH1>
            <HomeH2>Adrian Jazowski</HomeH2>
          </Content>
        </LeftHomeDiv>
      </HomeWrapper>
    </>
  );
};

export default Home;
