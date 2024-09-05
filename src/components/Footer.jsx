import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { styled } from "styled-components";

const FooterStyled = styled.div`
  padding: 4rem 6rem;
  background: var(--color-black);
  color: #fff;
  @media screen and (max-width: 850px) {
    padding: 4rem 2rem;
  }
`;
const H1 = styled.h1`
  margin: 0.3rem;
  @media screen and (max-width: 850px) {
    text-align: center;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-align: start;
  flex-wrap: wrap;
  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`;
const SocialIcons = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  color: #fff;
  border-radius: 10px;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: var(--color-bg-variant);
  }
  @media screen and (max-width: 850px) {
    margin: 1rem 1rem 0 0;
  }
`;
const Bottom = styled.div`
  padding-top: 2rem;
  text-align: start;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Display = styled.div`
  display: flex;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    width: 50%;
  }
`;
const H4 = styled.h4`
  font-size: 1.3rem;
  padding: 1rem 0 0.8rem 0;
`;
const A = styled.a`
  text-decoration: none;
  color: #fafafa;
  padding-bottom: 0.4rem;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <Top>
        <div>
          <H1>Trippy</H1>
          <p>Choose your favorite destination</p>
        </div>
        <Display>
          <SocialIcons href="/">
            <FaFacebookSquare />
          </SocialIcons>

          <SocialIcons href="/">
            <FaInstagramSquare />
          </SocialIcons>

          <SocialIcons href="/">
            <FaBehanceSquare />
          </SocialIcons>

          <SocialIcons href="/">
            <FaTwitterSquare />
          </SocialIcons>
        </Display>
      </Top>
      <Bottom>
        <Div>
          <H4>Projects</H4>
          <A href="/">Changelog</A>
          <A href="/">Status</A>
          <A href="/">License</A>
          <A href="/">All Version</A>
        </Div>
        <Div>
          <H4>Community</H4>
          <A href="/">GitHub</A>
          <A href="/">Facebook</A>
          <A href="/">Twitter</A>
          <A href="/">Behance</A>
        </Div>
        <Div>
          <H4>Help</H4>
          <A href="/">Support</A>
          <A href="/">Troubleshooting</A>
          <A href="/">Contact</A>
        </Div>
        <Div>
          <H4>Projects</H4>
          <A href="/">Term of Service</A>
          <A href="/">Privacy Policy</A>
          <A href="/">License</A>
        </Div>
      </Bottom>
    </FooterStyled>
  );
}
