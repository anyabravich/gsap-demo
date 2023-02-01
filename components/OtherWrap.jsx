import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { rem } from "polished";

const OtherWrap = ({ children }) => {
  return (
    <OtherWrapElement>
      <Container>
        <OtherWrapInner>{children}</OtherWrapInner>
      </Container>
    </OtherWrapElement>
  );
};

const OtherWrapElement = styled.div`
  margin-top: ${rem(80)};
`;

const OtherWrapInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: ${rem(200)};
  gap: ${rem(30)};
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export default OtherWrap;
