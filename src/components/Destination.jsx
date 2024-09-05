import { styled } from "styled-components";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const DestinationStyled = styled.div`
  margin: 4rem 6rem;
  @media screen and (max-width: 850px) {
    margin: 4rem 2rem;
  }
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`;
const P = styled.p`
  margin: 0.3rem;
  text-align: center;
`;

export default function Destination() {
  return (
    <DestinationStyled>
      <H1>Popular Destination</H1>
      <P>Yours give you the opportunity to see a lot, within a time frame</P>

      <DestinationData
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views inLuzon, Mt, Taal boast a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you'll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip and then unwind with some bulalo
            before heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        type="reverse"
        heading="MT. Daguldul Batangas"
        text="One of the most iconic views inLuzon, Mt, Taal boast a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you'll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip and then unwind with some bulalo
            before heading back home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </DestinationStyled>
  );
}
