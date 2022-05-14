import styled from "styled-components";
import { LinkStyled, FlexBox, Detail } from "../globalStyles";

import { motion } from "framer-motion";

import { projectData } from "./Data";

const ProjectBox = styled(FlexBox)`
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
  border: 1px solid #ced4da;
  color: ${(props) => props.theme.primary};
  background-color: #212529;
  @media screen and (min-width: 768px) {
    width: 28rem;
    padding: 1rem;
  }
`;
const SubTitle = styled.div`
  margin: 2rem 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Bigbox = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProjectImage = styled(motion.img)`
  opacity: 1;
  display: block;
  object-fit: cover;
  object-position: 50% 0;
  height: 25rem;
  width: 80vw;
  transition: 0.5s ease;
  backface-visibility: hidden;
  margin: 1rem 0;
  z-index: 10;
  &:hover {
    opacity: 0.1;
    object-position: 100% 100%;
    z-index: 1;
  }
  @media screen and (min-width: 768px) {
    width: 25rem;
    height: 25rem;
  }
`;

const TechBox = styled(FlexBox)`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 2rem;
`;

const TechText = styled.div`
  font-size: 0.6rem;
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 0.4rem;
  width: fit-content;
  border-radius: 25px;
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.primary};
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

// const StatusBox = styled.p`
//   position: relative;
//   right: 2rem;
//   font-size: 0.7rem;
// `;
const TextBox = styled(Detail)`
  text-align: start;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;
const DetailBox = styled.div`
  position: absolute;
  margin-top: 2.5rem;
  width: 16rem;
  @media screen and (min-width: 768px) {
    margin-top: 4rem;
    width: 24rem;
  }
`;
const DateBox = styled.div`
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  right: 0;
`;

export default function ProjectComponent() {
  return (
    <ProjectBox>
      {projectData.map((project) => (
        <Square key={project.id}>
          {/* <StatusBox>{project.status}</StatusBox> */}
          <Bigbox>
            <ProjectImage src={project.image[0]} />

            <DetailBox>
              <DateBox>{project.date}</DateBox>
              <SubTitle>{project.title}</SubTitle>
              <TextBox>{project.details}</TextBox>
              <TechBox>
                {project.tech.map((logo) => (
                  <TechText key={logo.id}>{logo.name}</TechText>
                ))}
              </TechBox>
            </DetailBox>

            <LinkStyled target="_blank" href={project.link}>
              VIEW DEMO
            </LinkStyled>
          </Bigbox>
        </Square>
      ))}
    </ProjectBox>
  );
}
