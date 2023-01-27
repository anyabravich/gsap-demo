import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";

const Cards = ({ children }) => {
  return (
    <CardsWrap>
      <Container>
        <CardsInner>{children}</CardsInner>
      </Container>
    </CardsWrap>
  );
};

const CardsWrap = styled.div`
  margin-top: ${rem(80)};
  padding-bottom: ${rem(80)};
  @media (max-width: 576px) {
    margin-top: ${rem(40)};
    padding-bottom: ${rem(40)};
  }
`;

const CardsInner = styled.div`
  display: grid;
  gap: ${rem(40)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(400)}, 1fr));
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Cards;
