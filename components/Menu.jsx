import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Menu = () => {
  const links = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/basic-tween",
      name: "Basic Tween",
    },
    {
      href: "/timelines",
      name: "Timelines",
    },
  ];
  return (
    <MenuWrap>
      {links.map(({ href, name }) => (
        <MenuItem key={name}>
          <MenuLinkBox className={inter.className} href={href} legacyBehavior>
            <MenuLink>{name}</MenuLink>
          </MenuLinkBox>
        </MenuItem>
      ))}
    </MenuWrap>
  );
};

const MenuWrap = styled.ul`
  list-style: none;
  display: flex;
  gap: ${rem(50)};
  @media (max-width: 546px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuLinkBox = styled(Link)``;

const MenuLink = styled.a`
  font-size: ${rem(15)};
  line-height: ${rem(18)};
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
`;

export default Menu;
