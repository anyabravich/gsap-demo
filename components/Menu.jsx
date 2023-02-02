import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";
import { Inter } from "@next/font/google";
import useWidth from "@/hooks/useWidth";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const menuWrap = useRef(null);
  const resize = useWidth();
  const router = useRouter();

  useEffect(() => {
    if (resize <= 813) {
      menuWrap.current.style.display = "none";
      setIsOpenMenu(false);
      setTimeout(() => {
        menuWrap.current.style.display = "flex";
      }, 1);
    }
  }, [resize]);

  const links = [
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
    {
      href: "/scroll",
      name: "ScrollTrigger",
    },
    {
      href: "/other",
      name: "Other",
    },
  ];

  return (
    <MenuWrap isOpenMenu={isOpenMenu} ref={menuWrap}>
      {links.map(({ href, name }) => (
        <MenuItem key={name}>
          <MenuLinkBox className={inter.className} href={href} legacyBehavior>
            <MenuLink
              onClick={() => setIsOpenMenu(false)}
              active={router.pathname == href ?? true}
            >
              {name}
            </MenuLink>
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
  @media (max-width: 812px) {
    transform: ${(props) =>
      props.isOpenMenu ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 300ms linear;
    flex-direction: column;
    background: ${(props) => props.theme.colors.white};
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
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.black};
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
`;

export default Menu;
