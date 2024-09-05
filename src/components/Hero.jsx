import React from "react";
import { css, styled } from "styled-components";

const HeroStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  ${(props) =>
    props.variety === "about" &&
    css`
      height: 75vh;
    `}
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 900px) {
    padding: 10px 20px;
  }
`;
const P = styled.p`
  font-size: 1.3rem;
  color: var(--color-white);
  padding: 0.5rem 0 2rem 0;
  @media screen and (max-width: 900px) {
    font-size: 1.1rem;
    padding: 0 0 2rem 0;
  }
`;

const A = styled.a`
  outline: none;
  border: none;
  transition: var(--transition);

  ${(props) =>
    props.type === "show" &&
    css`
      text-decoration: none;
      background: var(--color-white);
      padding: 1rem 2rem;
      border-radius: 6px;
      font-size: 1.1rem;
      font-weight: bold;
      letter-spacing: 2px;
      color: var(--color-black);
      @media screen and (max-width: 900px) {
        padding: 0.6rem 1.1rem;
        font-size: 1rem;
      }
    `}

  ${(props) =>
    props.type === "hide" &&
    css`
      display: none;
    `}
`;

export default function Hero({
  variety,
  heroImg,
  title,
  text,
  buttonText,
  url,
  type,
}) {
  return (
    <HeroStyled variety={variety}>
      <Img src={heroImg} alt="HeroImg" />

      <HeroText>
        <H1>{title}</H1>
        <P>{text}</P>
        <A href={url} type={type}>
          {buttonText}
        </A>
      </HeroText>
    </HeroStyled>
  );
}
