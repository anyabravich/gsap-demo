import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Button = ({ ev, children }) => {
  return <ButtonWrap onClick={ev}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${rem(10)};
  padding: ${rem(5)} ${rem(15)};
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
