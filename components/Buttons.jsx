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

const Btn = styled.button``;

export default Buttons;
