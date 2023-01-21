import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { rem } from "polished";
import Container from "./Container";
import Menu from "./Menu";
import Link from "next/link";

const Nav = () => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <Logo />
          <Menu />
          <Site href={"https://greensock.com/gsap/"} target="_blank" />
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
`;

const Site = styled(Link)`
  width: ${rem(25)};
  height: ${rem(25)};
  display: block;
  background: url("site.png") no-repeat center center;
  background-size: cover;
  margin-left: auto;
`;

export default Nav;
