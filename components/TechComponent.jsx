import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TypeIt from "typeit-react";
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const sideVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const AnimationCard = styled(motion.div)`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TechCard = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;
const ImageCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const TechImage = styled(motion.img)`
  max-width: 10rem;

  max-height: 10rem;
  transform: scale(0.45);
  border-radius: 25px;
`;

const PlaceHolder = styled.div`
  margin: 1rem 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.div`
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
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
          <>
            <TypeIt>
              <SubTitle>{title}</SubTitle>
            </TypeIt>
            <ImageCard>
              {data.map((image) => (
                <PlaceHolder>
                  <TechImage key={image.id} src={image.src} alt={image.name} />
                </PlaceHolder>
              ))}
            </ImageCard>
          </>
        )}
      </AnimationCard>
    </TechCard>
  );
}
