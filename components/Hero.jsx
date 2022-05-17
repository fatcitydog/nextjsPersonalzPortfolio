import styled from "styled-components";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import { Detail } from "../globalStyles";
import { FooterLink } from "./Layout/Footer";
const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
    margin: 2rem 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.5rem;

  border-radius: 15px;
  @media screen and (min-width: 1000px) {
  }
`;

const HeadlineYik = styled.div`
  font-size: 24vw;
  display: block;
  font-weight: 600;

  @media screen and (min-width: 1000px) {
    font-size: 14rem;
  }
`;
const Headline = styled.div`
  font-size: 1.3rem;
  margin: 1.5rem 0;
  text-align: start;
  width: 100%;
  height: 4rem;
  font-weight: 600;
  @media screen and (min-width: 1000px) {
    height: 3rem;
    font-size: 3rem;
  }
`;

const DetailCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 4rem;
  }
`;
const PlaceHolder = styled.div`
  color: #e9ecef;
  border-radius: 25px;
  margin-bottom: 2rem;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    width: 50vw;
  }
`;

const IconImage = styled.img`
  width: 100%;
  object-fit: cover;

  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  @media screen and (min-width: 1000px) {
    width: 45vw;
  }
`;

const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  @media screen and (min-width: 1000px) {
    width: 35%;
  }
`;

export default function Hero() {
  return (
    <HeroCard>
      <Card>
        <HeadlineYik>Hey!</HeadlineYik>
        <HeadlineYik>I&#39;m Yik</HeadlineYik>
        <Headline>
          <TypeIt
            options={{
              speed: 30,
              cursor: false,
            }}
            getBeforeInit={(instance) => {
              instance
                .type("A Writer")
                .pause(550)
                .delete(6)
                .pause(300)
                .type("Developer focusing on React & Next.js.");
              return instance;
            }}
          />
        </Headline>
      </Card>
      <DetailCard>
        <DetailTextBox>
          <Detail>
            As a creative professional turned Web Developer, I am excited to
            leverage my passion for writing, attention to detail, and creative
            mind towards writing excellent code to build products that can
            inspire people and make their lives easier.
          </Detail>
          <Detail>
            I was inspired to pursue Web Development because it provides me with
            great opportunities for problem-solving and continuous innovations
            which encourages me to keep learning and advancing in my careers
            with no limitation.
          </Detail>
          <Detail>
            Check out my projects: Budget, Village, Instock, BrainFlix, Band
            Site, Travel Site or just scroll down.
          </Detail>
        </DetailTextBox>
        <PlaceHolder>
          <IconImage src="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2Fselfphoto.jpg?alt=media&token=1c07573a-1406-4dc8-8f19-5a32844d1b52" />
        </PlaceHolder>
      </DetailCard>
    </HeroCard>
  );
}
