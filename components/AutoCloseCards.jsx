import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const AutoCloseCards = () => {
  useEffect(() => {
    let active;
    const expanders = gsap.utils.toArray(".expander");
  }, []);
  return (
    <AutoCloseCardsWrapper>
      <div class="expander">
        <div class="close">X</div>
      </div>
      <div class="expander">
        <div class="close">X</div>
      </div>
      <div class="expander">
        <div class="close">X</div>
      </div>
    </AutoCloseCardsWrapper>
  );
};

const AutoCloseCardsWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export default AutoCloseCards;
