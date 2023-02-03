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
  padding-bottom: ${rem(80)};
  @media (max-width: 576px) {
    margin-top: ${rem(40)};
    padding-bottom: ${rem(40)};
  }
`;

const OtherWrapInner = styled.div``;

export default OtherWrap;
