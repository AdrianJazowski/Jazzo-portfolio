/** @format */

import React, { useContext } from "react";
import {
  BrandInNav,
  CustomNav,
  NavMenuIcon,
  NavMenuUl,
  NavMenuLi,
  LinkInNav,
} from "./NavigationStyles";
import { GiHamburgerMenu, GiCrossedSwords } from "react-icons/gi";
import PortfolioContext from "../../context";

const Navigation = () => {
  const value = useContext(PortfolioContext);
  const {
    handleNavIconToggle,
    navIconToggle,
    handleCloseMobileMenu,
    onMouseEnter,
    onMouseLeave,
  } = value;
  return (
    <>
      <CustomNav>
        <BrandInNav
          to="home"
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
        >
          Adrian Jazowski
        </BrandInNav>
        <NavMenuIcon onClick={handleNavIconToggle}>
          {navIconToggle ? (
            <GiCrossedSwords style={{ color: "white" }} />
          ) : (
            <GiHamburgerMenu style={{ color: "white" }} />
          )}
        </NavMenuIcon>

        <NavMenuUl navIconToggle={navIconToggle}>
          <NavMenuLi>
            <LinkInNav>Strona główna</LinkInNav>
          </NavMenuLi>

          <NavMenuLi>
            <LinkInNav
              to="aboutme"
              smooth={true}
              spy={true}
              duration={500}
              offset={0}
              onClick={handleCloseMobileMenu}
            >
              O mnie
            </LinkInNav>
          </NavMenuLi>
          <NavMenuLi onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <LinkInNav
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={0}
              onClick={handleCloseMobileMenu}
            >
              Projekty
            </LinkInNav>
          </NavMenuLi>
          <NavMenuLi>
            <LinkInNav
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={0}
              onClick={handleCloseMobileMenu}
            >
              Kontakt
            </LinkInNav>
          </NavMenuLi>
        </NavMenuUl>
      </CustomNav>
    </>
  );
};

export default Navigation;
