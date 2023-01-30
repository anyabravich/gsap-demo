import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Button = ({ ev, children }) => {
  return <ButtonWrap onClick={ev}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  border: none;
  background: #37b24d;
  color: #ffffff;
  border-radius: ${rem(10)};
  padding: 5px 15px;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
