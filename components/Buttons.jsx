import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";

const Buttons = ({
  animationStart,
  animationPause,
  animationReverse,
  animationRestart,
}) => {
  return (
    <BtnBox>
      <Btn onClick={animationStart}>Play</Btn>
      <Btn onClick={animationPause}>Pause</Btn>
      <Btn onClick={animationReverse}>Reverse</Btn>
      <Btn onClick={animationRestart}>Restart</Btn>
    </BtnBox>
  );
};

const BtnBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: ${rem(30)};
`;

const Btn = styled.button`
  border: none;
  background: #37b24d;
  color: #ffffff;
  border-radius: ${rem(10)};
  padding: 5px 15px;
  font-weight: 600;
  cursor: pointer;
`;

export default Buttons;
