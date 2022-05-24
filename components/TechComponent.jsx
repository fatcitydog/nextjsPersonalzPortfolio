import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TypeItComponent from "./TypeIt";
import { squareVariants } from "../globalStyles";

const TechCard = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  height: 42rem;
  @media screen and (min-width: 1000px) {
    height: 22rem;
    margin-bottom: 3rem;
  }
`;

const AnimationCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  height: 1.5rem;
  margin-bottom: 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  @media screen and (min-width: 1000px) {
    margin: 2rem 0;
    font-size: 1.8rem;
  }
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: center;
`;
const TechImage = styled(motion.img)`
  max-width: 6.5rem;
  max-height: 6.5rem;
  border-radius: 5px;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const PlaceHolder = styled.div`
  margin: 1rem 1rem;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TechComponent({ title, data }) {
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
    <TechCard>
      <AnimationCard
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        {inView && (
          <Box>
            <TypeItComponent title={title} />
          </Box>
        )}
        {inView && (
          <ImageCard>
            {data.map((image) => (
              <PlaceHolder key={image.id}>
                <TechImage
                  whileTap={{ scale: 0.9 }}
                  key={image.id}
                  src={image.src}
                  alt={image.name}
                />
              </PlaceHolder>
            ))}
          </ImageCard>
        )}
      </AnimationCard>
    </TechCard>
  );
}
