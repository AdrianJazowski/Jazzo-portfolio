/** @format */

import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import {
  FooterH2,
  FooterIcons,
  FooterMedia,
  FooterStyles,
  FooterNavigation,
  FooterLink,
  FooterP,
} from "./FooterStyles";
import { animateScroll } from "react-scroll";

const Footer = () => {
  const data = new Date().getFullYear();
  return (
    <FooterStyles>
      <FooterMedia>
        <FooterH2>Social Media</FooterH2>
        <FooterIcons>
          <a
            href="https://www.linkedin.com/in/adrian-jazowski/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/AdrianJazowski" target="_blank">
            <AiFillGithub />
          </a>
        </FooterIcons>
      </FooterMedia>
      <FooterNavigation>
        <FooterLink onClick={() => animateScroll.scrollToTop()}>
          Strona główna
        </FooterLink>
        <FooterLink
          to="aboutme"
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
        >
          O mnie
        </FooterLink>
        <FooterLink
          to="projects"
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
        >
          Projekty
        </FooterLink>
        <FooterLink
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
        >
          Kontakt
        </FooterLink>
      </FooterNavigation>
      <FooterP>Prawa autorskie © {data} | Adrian Jazowski</FooterP>
    </FooterStyles>
  );
};

export default Footer;
