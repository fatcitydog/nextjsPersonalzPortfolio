import styled from "styled-components";
import { LinkStyled, FlexBox, Detail } from "../globalStyles";

import { motion } from "framer-motion";

import { projectData } from "./Data";

const ProjectBox = styled(FlexBox)`
  flex-direction: column;
  @media screen and (min-width: 1000px) {
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
  padding-bottom: 4rem;
  border-bottom: 3px solid silver;
  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: 1000px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;
const SubTitle = styled.div`
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
  font-weight: 600;
  @media screen and (min-width: 1000px) {
    font-size: 2rem;
    margin: 0;
  }
`;

const Bigbox = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  @media screen and (min-width: 1000px) {
    align-items: flex-start;
    height: 30vw;
    margin-right: 1rem;
  }
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

  z-index: 10;
  &:hover {
    opacity: 0.1;
    object-position: 100% 100%;
    z-index: 1;
  }
  @media screen and (min-width: 1000px) {
    width: 45vw;
    height: 30vw;
  }
`;

const TechBox = styled(FlexBox)`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 2rem;
`;

const TechText = styled.div`
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 0.4rem;

  border-radius: 25px;
  color: black;
  border: 1px solid black;
  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
    border: 3px solid black;
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
  color: black;
  @media screen and (min-width: 1000px) {
    width: 100%;
    font-size: 1.6rem;
    margin-left: 4rem;
  }
`;
const DetailBox = styled.div`
  position: absolute;
  margin-top: 2.5rem;
  width: 16rem;
  @media screen and (min-width: 1000px) {
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
          <Bigbox>
            <SubTitle>{project.title}</SubTitle>
            <TechBox>
              {project.tech.map((logo) => (
                <TechText key={logo.id}>{logo.name}</TechText>
              ))}
            </TechBox>
            {project.deploy && (
              <LinkStyled target="_blank" href={project.link}>
                VIEW DEMO
              </LinkStyled>
            )}
          </Bigbox>
          {/* <StatusBox>{project.status}</StatusBox> */}
          <Bigbox>
            <ProjectImage src={project.image[0]} />

            <DetailBox>
              <TextBox>{project.details}</TextBox>
            </DetailBox>
          </Bigbox>
        </Square>
      ))}
    </ProjectBox>
  );
}
