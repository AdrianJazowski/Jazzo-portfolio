/** @format */

import React from "react";
import {
  LeftAbouteMeDiv,
  RightAbouteMeDiv,
  AboutMeWrapper,
  Skills,
  SkillsIcons,
  AboutMeH2,
  ContainerForText,
  GridDiv,
  TextInGrid,
  IconContainer,
} from "./AboutMeStyles";
import { FaReact, FaJira, FaBitbucket, FaHtml5 } from "react-icons/fa";
import { DiJavascript, DiCss3, DiBootstrap, DiJava } from "react-icons/di";
import { SiRedux, SiTypescript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const AboutMe = () => {
  return (
    <>
      <AboutMeWrapper>
        <LeftAbouteMeDiv>
          <GridDiv>
            <ContainerForText one>
              <TextInGrid>
                Cześć, ja jestem Adrian i skoro trafiłeś na tę stronę, to
                zapewne szukam pracy jako Junior Fronted Developer.
              </TextInGrid>
            </ContainerForText>
            <ContainerForText two>
              <TextInGrid>
                Pochodzę z okolic Krakowa, w wolnym czasie lubię grać w gry
                planszowe i programować.
              </TextInGrid>
            </ContainerForText>
            <ContainerForText three>
              <TextInGrid>
                Obecnie poszukuje pracy, gdzie będę mógł rozpocząć swoją
                pierwszą pracę jako Frontend. Rozważam prace zdalną, jak i
                relokacje.
              </TextInGrid>
            </ContainerForText>
            <ContainerForText four>
              <TextInGrid>
                Zapraszam Cię to przejrzenia mojej strony, gdzie możesz zobaczyć
                moje projekty oraz dowiedzieć się co potrafię.
              </TextInGrid>
            </ContainerForText>
          </GridDiv>
        </LeftAbouteMeDiv>
        <RightAbouteMeDiv>
          <Skills>
            <AboutMeH2>Moje technologie i narzędzia</AboutMeH2>

            <SkillsIcons>
              <IconContainer>
                <FaReact />
                <p>React</p>
              </IconContainer>
              <IconContainer>
                <DiJavascript />
                <p>JavaScript</p>
              </IconContainer>
              <IconContainer>
                <SiRedux />
                <p>Redux</p>
              </IconContainer>
              <IconContainer>
                <DiCss3 />
                <p>Css</p>
              </IconContainer>
              <IconContainer>
                <FaHtml5 />
                <p>HTML</p>
              </IconContainer>
            </SkillsIcons>
            <SkillsIcons>
              <IconContainer>
                <DiBootstrap />
                <p>Bootstrap</p>
              </IconContainer>
              <IconContainer>
                <AiFillGithub />
                <p>GitHub</p>
              </IconContainer>
              <IconContainer>
                <FaJira />
                <p>Jira</p>
              </IconContainer>
              <IconContainer>
                <DiJava />
                <p>Java</p>
              </IconContainer>
              <IconContainer>
                <SiTypescript />
                <p>Typescript</p>
              </IconContainer>
            </SkillsIcons>
          </Skills>
        </RightAbouteMeDiv>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;
