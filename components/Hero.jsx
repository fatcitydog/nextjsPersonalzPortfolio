import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, Box } from "../globalStyles";

import TypeIt from "typeit-react";

const IconImage = styled.img`
  width: 15rem;
  height: 12rem;
  border-radius: 30%;
`;

const Headline = styled.h1`
  font-size: 2rem;
`;

const Card = styled.div`
  width: 100%;
  height: 20rem;
`;

export default function Hero() {
  // const SuperStrong = ({ children }) => {
  //   return <strong style={{ fontSize: "3rem" }}>{children}</strong>;
  // };

  return (
    <Container>
      <Box>
        <IconImage src="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2Fselfphoto.jpg?alt=media&token=1c07573a-1406-4dc8-8f19-5a32844d1b52" />
      </Box>
      <Card>
        <Headline>Hi, I am Yik,</Headline>
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
                .type("Full Stack Developer...");

              // Remember to return it!
              return instance;
            }}
          />
        </Headline>
      </Card>
    </Container>
  );
}
