import React, { useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import gsap from "gsap";

const Logo = () => {
  useEffect(() => {
    gsap.fromTo(
      "[data-logo]",
      {
        x: -64,
        duration: 1,
      },
      {
        x: 0,
        duration: 1,
      }
    );
  }, []);
  return (
    <LogoWrap>
      <LogoImg src="logo.png" alt="logo" data-logo />
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  flex-shrink: 0;
  width: ${rem(64)};
  height: ${rem(64)};
  overflow: hidden;
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
