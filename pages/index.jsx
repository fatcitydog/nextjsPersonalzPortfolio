import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { Container, Box } from "../globalStyles";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TechData } from "../components/Data";
import TypeIt from "typeit-react";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const IconImage = styled.img`
  width: 15rem;
  height: 12rem;
  border-radius: 30%;
`;

const Headline = styled.h1`
  color: black;
  font-size: 3rem;
`;

const TechIamge = styled(motion.img)`
  width: 5rem;
  height: auto;
  border-radius: 25px;
`;

const SubHeader = styled(motion.h2)``;

export default function HomePage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <Container>
      <Box>
        <IconImage src="/aSampleIamge.jpg" />
      </Box>

      <TypeIt>
        <Headline>2f3f ofafa dd adffsfs sfsf sfs sfgrb dswefew</Headline>
      </TypeIt>

      <SubHeader>Using tech</SubHeader>

      <>
        <Headline
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          Front-end
        </Headline>
        {TechData.map((image) => (
          <TechIamge
            key={image.id}
            src={image.src}
            alt={image.name}
          ></TechIamge>
        ))}
      </>

      <>
        <Headline
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          Back-end
        </Headline>
        {TechData.map((image) => (
          <TechIamge
            key={image.id}
            src={image.src}
            alt={image.name}
          ></TechIamge>
        ))}
      </>
    </Container>
  );
}
