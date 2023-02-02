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
  border: 1px solid red;
`;

export default OtherWrap;
