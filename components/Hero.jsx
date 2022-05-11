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
  font-size: 2.5rem;
`;

const Card = styled.div`
  width: 100%;
  height: 20rem;
`;

export default function Hero() {
  return (
    <Container>
      <Box>
        <IconImage src="/aSampleIamge.jpg" />
      </Box>
      <Card>
        <TypeIt>
          <Headline>I am Yik, a fullstack developer</Headline>
        </TypeIt>
      </Card>
    </Container>
  );
}
