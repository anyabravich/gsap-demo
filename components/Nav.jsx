import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { rem } from "polished";
import Container from "./Container";
import Menu from "./Menu";
import Link from "next/link";

const Nav = ({ isOpenMenu, setIsOpenMenu, color }) => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <Logo />
          <Menu
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            color={color}
          />
          <Site
            color={color}
            href={"https://greensock.com/gsap/"}
            target="_blank"
          />
          <MenuButton
            href={"https://greensock.com/gsap/"}
            target="_blank"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            isOpenMenu={isOpenMenu}
            color={color}
          >
            {isOpenMenu ? (
              <MenuButtonIcon
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color={color}
              >
                <path d="M32.8995 30.0711L25.8284 23L32.8995 15.9289C33.6801 15.1483 33.6801 13.8811 32.8995 13.1005C32.1188 12.3199 30.8517 12.3199 30.0711 13.1005L23 20.1716L15.9289 13.1005C15.1483 12.3199 13.8812 12.3199 13.1005 13.1005C12.3199 13.8811 12.3199 15.1483 13.1005 15.9289L20.1716 23L13.1005 30.0711C12.3199 30.8517 12.3199 32.1188 13.1005 32.8995C13.8812 33.6801 15.1483 33.6801 15.9289 32.8995L23 25.8284L30.0711 32.8995C30.8517 33.6801 32.1188 33.6801 32.8995 32.8995C33.6801 32.1188 33.6801 30.8517 32.8995 30.0711Z" />
              </MenuButtonIcon>
            ) : (
              <MenuButtonIcon
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color={color}
              >
                <path d="M4 10H28C29.104 10 30 9.104 30 8C30 6.896 29.104 6 28 6H4C2.896 6 2 6.896 2 8C2 9.104 2.896 10 4 10ZM28 14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14ZM28 22H4C2.896 22 2 22.896 2 24C2 25.104 2.896 26 4 26H28C29.104 26 30 25.104 30 24C30 22.896 29.104 22 28 22Z" />
              </MenuButtonIcon>
            )}
          </MenuButton>
        </NavInner>
      </Container>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  position: relative;
  z-index: 2;
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
  background: ${(props) =>
      props.color === "white" ? `url("site-white.svg")` : `url("site.svg")`}
    no-repeat center center;
  background-size: cover;
  margin-left: auto;
`;

const MenuButton = styled.button`
  border: none;
  outline: none;
  background: none;
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

const MenuButtonIcon = styled.svg`
  fill: ${(props) => (props.color === "white" ? "white" : "black")};
`;

export default Nav;
