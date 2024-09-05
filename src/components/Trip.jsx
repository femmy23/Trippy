import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import { styled } from "styled-components";

const TripStyled = styled.div`
  margin: 4rem 6rem;
  color: var(--color-black);
  @media screen and (max-width: 850px) {
    margin: 4rem 2rem;
  }
`;
const H1 = styled.h1`
  font-size: 3rem;
`;
const TripCard = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export default function Trip() {
  return (
    <TripStyled>
      <H1>Recent Trip</H1>
      <p>You can discover unique destinations using Google Maps.</p>
      <TripCard>
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="Indonesia, offficially the Republic of Indonesia, is a country in Southeast Asia and Oceania between India and Pacific Oceans. It consists of over 17,000 island, including Sumatra, Java, Sulawesi, and parts of Borneo and new Guinea"
        />
        <TripData
          image={Trip2}
          heading="Trip to Malaysia"
          text="Indonesia, offficially the Republic of Indonesia, is a country in Southeast Asia and Oceania between India and Pacific Oceans. It consists of over 17,000 island, including Sumatra, Java, Sulawesi, and parts of Borneo and new Guinea"
        />
        <TripData
          image={Trip3}
          heading="Trip to France"
          text="Indonesia, offficially the Republic of Indonesia, is a country in Southeast Asia and Oceania between India and Pacific Oceans. It consists of over 17,000 island, including Sumatra, Java, Sulawesi, and parts of Borneo and new Guinea"
        />
      </TripCard>
    </TripStyled>
  );
}
