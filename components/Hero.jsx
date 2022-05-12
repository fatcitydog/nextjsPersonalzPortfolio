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
  color: black;
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
        <IconImage src="/aSampleIamge.jpg" />
      </Box>
      <Card>
        <Headline>
          Hi, I'm Yik,
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
                .type(
                  "Front End Agile Web Developer focusing on React, Next.js and Node.js..."
                );

              // Remember to return it!
              return instance;
            }}
          />
        </Headline>
      </Card>
    </Container>
  );
}
