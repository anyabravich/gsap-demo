import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Button from "./Button";

const Buttons = ({
  animationStart,
  animationPause,
  animationReverse,
  animationRestart,
}) => {
  return (
    <BtnBox>
      <Button ev={animationStart}>Play</Button>
      <Button ev={animationPause}>Pause</Button>
      <Button ev={animationReverse}>Reverse</Button>
      <Button ev={animationRestart}>Restart</Button>
    </BtnBox>
  );
};

const BtnBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: ${rem(30)};
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Btn = styled.button`
  border: none;
  background: #37b24d;
  color: ${(props) => props.theme.colors.white};
  border-radius: ${rem(10)};
  padding: 5px 15px;
  font-weight: 600;
  cursor: pointer;
`;

export default Buttons;
