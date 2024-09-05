import { styled } from "styled-components";

const AboutContainer = styled.div`
  margin: 4rem 6rem;
  text-align: start;
  @media screen and (max-width: 850px;) {
    margin: 4rem 2rem;
  }
`;
const H1 = styled.h1`
  padding-bottom: 1rem;
`;
const P = styled.p`
  padding-bottom: 2rem;
`;

export default function AboutUs() {
  return (
    <AboutContainer>
      <H1>Our History</H1>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui magnam
        voluptatibus ab hic possimus nostrum voluptate ipsam temporibus commodi
        ullam maxime quidem laudantium officia rerum similique totam, quis fugit
        necessitatibus reprehenderit quo neque aut suscipit. Aliquam earum
        asperiores consequatur aliquid! Debitis quo explicabo illo eum dolorem,
        consectetur laboriosam exercitationem ratione tenetur ut corporis
        maxime. Quis nihil, iure iste laudantium atque accusantium cupiditate
        nam reprehenderit ducimus libero amet commodi culpa a veniam voluptatum
        officia consectetur aliquid facilis at nostrum? Beatae tempora similique
        facere cum at est, in sunt accusamus ad?
      </P>
      <H1>Our Mission</H1>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo earum
        debitis aperiam commodi neque eos. Reiciendis quas officia accusamus
        quod optio sunt, iure dolor maxime mollitia distinctio numquam est!
      </P>
      <H1>Our Vision</H1>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro dolor
        quos modi exercitationem ipsam, vitae quasi quaerat quas sed, assumenda
        nam hic commodi dolore sunt explicabo doloremque minima eius delectus
        molestias? Ea, aspernatur placeat esse aperiam adipisci laboriosam
        praesentium, neque saepe laborum dolore perspiciatis fugiat! Beatae
        perspiciatis voluptate doloremque!
      </P>
    </AboutContainer>
  );
}
