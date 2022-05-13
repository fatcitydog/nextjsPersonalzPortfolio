import styled from "styled-components";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import { Detail } from "../globalStyles";
const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 11rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.primary};
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

const HeadlineYik = styled.div`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  font-weight: 600;
  width: 100%;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 10rem;

    margin-right: 2rem;
  }
`;
const Headline = styled.div`
  font-size: 1.2rem;
  margin: 1.5rem 0;
  text-align: start;
  width: 100%;
  height: 4rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 1.2rem;
  }
`;

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 4rem;
  }
`;
const PlaceHolder = styled.div`
  color: #e9ecef;
  border-radius: 25px;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

const IconImage = styled.img`
  width: 70vw;
  height: auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  @media screen and (min-width: 768px) {
    width: 25rem;
  }
`;

const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export default function Hero() {
  return (
    <HeroCard>
      <Card>
        <HeadlineYik>Hey! I am Yik,</HeadlineYik>
        <Headline>
          <TypeIt
            options={{
              speed: 30,
              cursor: false,
            }}
            getBeforeInit={(instance) => {
              instance
                .type("A WRITER")
                .pause(550)
                .delete(6)
                .pause(300)
                .type("DEVELOPER focusing on React and Next.js.");
              return instance;
            }}
          />
        </Headline>
      </Card>
      <DetailCard>
        <PlaceHolder>
          <IconImage src="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2Fselfphoto.jpg?alt=media&token=1c07573a-1406-4dc8-8f19-5a32844d1b52" />
        </PlaceHolder>
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
        </DetailTextBox>
      </DetailCard>
    </HeroCard>
  );
}
