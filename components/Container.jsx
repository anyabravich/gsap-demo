import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Container = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  max-width: ${rem(1440)};
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 ${rem(20)};
`;

export default Container;
