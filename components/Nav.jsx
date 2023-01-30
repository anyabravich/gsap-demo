import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { rem } from "polished";
import Container from "./Container";
import Menu from "./Menu";
import Link from "next/link";

const Nav = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <Logo />
          <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          <Site href={"https://greensock.com/gsap/"} target="_blank" />
          <MenuButton
            href={"https://greensock.com/gsap/"}
            target="_blank"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            isOpenMenu={isOpenMenu}
          />
        </NavInner>
      </Container>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  height: ${rem(90)};
  border-bottom: ${rem(1)} solid ${(props) => props.theme.colors.white};
  box-shadow: 0 ${rem(4)} ${rem(20)} ${rem(7)} rgba(159, 159, 159, 0.06);
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  height: ${rem(90)};
  gap: ${rem(50)};
  @media (max-width: 812px) {
    gap: ${rem(30)};
  }
`;

const Site = styled(Link)`
  flex-shrink: 0;
  width: ${rem(25)};
  height: ${rem(25)};
  display: block;
  background: url("site.png") no-repeat center center;
  background-size: cover;
  margin-left: auto;
`;

const MenuButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) =>
    props.isOpenMenu ? 'url("menu-close.svg")' : 'url("menu.svg")'};
  background-size: cover;
  width: ${rem(25)};
  height: ${rem(25)};
  flex-shrink: 0;
  display: none;
  position: relative;
  z-index: 3;
  @media (max-width: 812px) {
    display: block;
  }
`;

export default Nav;
