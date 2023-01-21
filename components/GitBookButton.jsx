import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const GitBookButton = () => {
  return (
    <GitBookButtonWrap
      href="https://anna-kolchina.gitbook.io/gsap/"
      target="_blank"
    >
      <GitBookButtonImg src="gitbook.png" alt="gitbook" />
    </GitBookButtonWrap>
  );
};

const GitBookButtonWrap = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: ${rem(30)};
  bottom: ${rem(30)};
  border: none;
  width: ${rem(75)};
  height: ${rem(75)};
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 30px 4px rgba(120, 120, 120, 0.08);
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
`;

const GitBookButtonImg = styled.img`
  width: ${rem(35)};
`;

export default GitBookButton;
