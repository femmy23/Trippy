import { styled } from "styled-components";

const TCard = styled.div`
  width: 32%;
  text-align: start;
  box-shadow: 0 25px 25px 2px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  cursor: pointer;
  padding: 1rem 0.8rem;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;
const TImage = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 7px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: var(--transition);
  border-radius: 7px;
  &:hover {
    transform: scale(1.3);
  }
`;
const H4 = styled.h4`
  font-size: 1.3rem;
  padding: 1rem 0 0.2rem 0;
`;

export default function TripData({ image, text, heading }) {
  return (
    <TCard>
      <TImage>
        <Img src={image} alt="image" />
      </TImage>
      <H4>{heading}</H4>
      <p>{text}</p>
    </TCard>
  );
}
