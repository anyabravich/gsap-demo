import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";

import { Inter } from "@next/font/google";
import useWidth from "@/hooks/useWidth";
const inter = Inter({ subsets: ["latin"] });

const Menu = ({ show, setShow }) => {
  const menuWrap = useRef(null);
  const resize = useWidth();

  useEffect(() => {
    if (resize <= 658) {
      menuWrap.current.style.display = "none";
      setTimeout(() => {
        menuWrap.current.style.display = "flex";
      }, 1);
    }
  }, []);

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
    {
      href: "/beyond",
      name: "Beyond",
    },
  ];

  return (
    <MenuWrap show={show} ref={menuWrap}>
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
  @media (max-width: 658px) {
    transform: ${(props) =>
      props.show ? "translateX(0%)" : "translateX(100%)"};
    /* transition: transform 300ms linear; */
    flex-direction: column;
    background: #ffffff;
    will-change: transform;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 2;
    align-items: center;
    justify-content: center;
  }
`;

const MenuItem = styled.li``;

const MenuLinkBox = styled(Link)``;

const MenuLink = styled.a`
  white-space: nowrap;
  font-size: ${rem(15)};
  line-height: ${rem(18)};
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
`;

export default Menu;
