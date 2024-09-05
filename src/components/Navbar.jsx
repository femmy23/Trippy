import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled, css } from "styled-components";
import { MenuItems } from "./MenuItems";

const Nav = styled.nav`
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  padding: 0 2.5rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  width: 95%;
  height: 80px;
  border-radius: 13px;
  position: fixed;
  transform: translate(-50%);
  top: 20px;
  left: 50%;
  z-index: 999;
  @media screen and (max-width: 960px) {
    z-index: 99;
  }
`;

const H1 = styled.h1`
  color: #222;
  font-size: 2rem;
  cursor: pointer;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1rem;
  list-style: none;
  align-items: center;
  transition: var(--transition);
  ${(props) =>
    props.type === "inactive" &&
    css`
      @media screen and (max-width: 900px) {
        display: none;
      }
    `}
  ${(props) =>
    props.type === "active" &&
    css`
      @media screen and (max-width: 900px) {
        align-items: stretch;
        padding: 80px 0 30px 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: var(--color-white);
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
        opacity: 1;
        transition: var(--transition);
        border-radius: 13px;
        z-index: -1;
      }
    `};
`;
const MenuIcon = styled.div`
  font-size: 1.3rem;
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #222;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.7rem 1rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  gap: 10px;
  &:hover {
    background-color: var(--color-bg-variant);
    color: var(--color-white);
    border-radius: 5px;
    transition: var(--transition);
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0 auto;
    font-size: 1.3rem;
    padding: 2rem 0;
    &:hover {
      background: var(--color-bg-variant);
      transition: none;
    }
  }

  ${(props) =>
    props.type === "button" &&
    css`
      &:hover {
        background-color: var(--color-black);
      }
      @media screen and (max-width: 900px) {
        background-color: var(--color-bg-variant);
        display: block;
        text-align: center;
      }
    `}
`;

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const onToggle = function () {
    setClicked(!clicked);
  };

  return (
    <Nav>
      <H1>Trippy</H1>

      <MenuIcon onClick={onToggle}>
        {clicked ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Ul type={clicked ? "active" : "inactive"}>
        {MenuItems.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.url} style={{ textDecoration: "none" }}>
                <A type={item.type}>
                  {item.icon}
                  {item.title}
                </A>
              </Link>
            </li>
          );
        })}
      </Ul>
    </Nav>
  );
}
