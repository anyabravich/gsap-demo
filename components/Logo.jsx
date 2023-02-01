import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";

const Logo = () => {
  return (
    <LogoWrap href={"/"}>
      <LogoImg src="logo.png" alt="logo" />
    </LogoWrap>
  );
};

const LogoWrap = styled(Link)`
  flex-shrink: 0;
  width: ${rem(64)};
  height: ${rem(64)};
  overflow: hidden;
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
