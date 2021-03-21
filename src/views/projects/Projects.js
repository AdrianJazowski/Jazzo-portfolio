/** @format */

import React, { useContext, useState } from "react";
import FiltrByProjectCategory from "../../components/filters/FiltrByProjectCategory";
import PortfolioContext from "../../context";
import {
  ProjectCardDeck,
  CardImg,
  CardIcons,
  Cardwrapper,
  CardInner,
  FrontCard,
  BackCard,
  CardContent,
  CardHeader,
  CardBody,
  ProjectPageWrapper,
  DemoLink,
  FlipDiv,
} from "./ProjectsStyles";
import { AiFillGithub } from "react-icons/ai";
import Flip from "react-reveal/Flip";

const Projects = () => {
  const value = useContext(PortfolioContext);
  const { selectedProjects, toggleIsFlipped } = value;

  return (
    <>
      <ProjectPageWrapper>
        <FiltrByProjectCategory />
        <ProjectCardDeck>
          {selectedProjects.map((project) => {
            const {
              projectName,
              projectImg,
              procjetTitle,
              gitLink,
              projectIcons,
              isFlipped,
              id,
              demo,
            } = project;
            return (
              <Flip left>
                <Cardwrapper>
                  <CardInner isFlipped={isFlipped} key={id}>
                    <FrontCard onClick={() => toggleIsFlipped(id)}>
                      <h2>{projectName}</h2>
                    </FrontCard>
                    <BackCard>
                      <FlipDiv onClick={() => toggleIsFlipped(id)} />
                      <CardContent>
                        <CardHeader>
                          <CardImg src={projectImg} alt={projectName} />
                          <h2>{projectName}</h2>
                        </CardHeader>
                        <CardBody>
                          <h3>{procjetTitle}</h3>
                        </CardBody>
                        <DemoLink>
                          <a href={demo} target="_blank">
                            DEMO
                          </a>
                          <a href={gitLink} target="_blank">
                            GIT
                          </a>
                        </DemoLink>
                        <CardIcons>
                          {projectIcons.map((icon) => {
                            return icon;
                          })}
                        </CardIcons>
                      </CardContent>
                    </BackCard>
                  </CardInner>
                </Cardwrapper>
              </Flip>
            );
          })}
        </ProjectCardDeck>
      </ProjectPageWrapper>
    </>
  );
};

export default Projects;
