import { css, styled } from "styled-components";

const DD = styled.div`
  margin: 3rem 0;
`;
const FirstDes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.5rem;

  ${(props) =>
    props.type === "reverse" &&
    css`
      flex-direction: row-reverse;
    `}

  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
    margin-top: 2.5rem;
  }
`;
const DesText = styled.div`
  width: 45%;
  font-size:1.1rem
  text-align:start;
  @media screen and (max-width: 850px) {
  width: 100%;
    
    
  }
`;
const H2 = styled.h1`
  padding-bottom: 1rem;
  font-size: 3rem;
`;
const Image = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: space-between;
  z-index: -999;
  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 1.8rem 0;
  }
`;
const Img = styled.img`
  width: 49%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: -1px 1px 62px -18px rgba(0, 0, 0, 0.19);
  &:nth-child(2) {
    position: absolute;
    top: -10%;
    right: 0;
  }
  @media screen and (max-width: 850px) {
    height: 250px;
  }
`;

export default function DestinationData({ heading, text, img1, img2, type }) {
  return (
    <DD>
      <FirstDes type={type}>
        <DesText>
          <H2>{heading}</H2>
          <p>{text}</p>
        </DesText>
        <Image>
          <Img src={img1} alt="" />
          <Img src={img2} alt="" />
        </Image>
      </FirstDes>
    </DD>
  );
}
