import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Logo = () => {
  return (
    <LogoWrap>
      <LogoImg src="logo.png" alt="logo" />
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  width: ${rem(64)};
  height: ${rem(64)};
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
