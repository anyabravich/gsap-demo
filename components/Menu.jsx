import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";
import { Inter } from "@next/font/google";
import useWidth from "@/hooks/useWidth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openMenu } from "@/store/menuSlice";
const inter = Inter({ subsets: ["latin"] });

const Menu = ({ color, isOpenMenu }) => {
  console.log(color);
  const dispatch = useDispatch();
  const menuWrap = useRef(null);
  const resize = useWidth();
  const router = useRouter();

  useEffect(() => {
    if (resize <= 813) {
      menuWrap.current.style.display = "none";
      dispatch(openMenu({ isOpenMenu: true }));
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
      disabled: true,
    },
  ];

  return (
    <MenuWrap isOpenMenu={isOpenMenu} ref={menuWrap} color={color}>
      {links.map(
        ({ href, name, disabled }) =>
          !disabled && (
            <MenuItem key={name}>
              <MenuLinkBox
                className={inter.className}
                href={href}
                legacyBehavior
              >
                <MenuLink
                  onClick={() => dispatch(openMenu({ isOpenMenu: true }))}
                  active={router.pathname == href ?? true}
                  color={color}
                >
                  {name}
                </MenuLink>
              </MenuLinkBox>
            </MenuItem>
          )
      )}
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
    background: ${(props) =>
      props.color === "white"
        ? props.theme.colors.blue
        : props.theme.colors.white};
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
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
  ${(props) => {
    if (props.active && props.color !== "white") {
      return `
          color: ${props.theme.colors.primary};
        `;
    } else if (props.active && props.color === "white") {
      return `
        color: ${props.theme.colors.white};
        text-decoration: underline;
      `;
    } else if (!props.active && props.color === "white") {
      return `
        color: white;
      `;
    } else {
      return `
          color: ${props.theme.colors.black};
        `;
    }
  }}
`;

export default Menu;
