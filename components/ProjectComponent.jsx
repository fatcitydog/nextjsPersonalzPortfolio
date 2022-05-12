import styled from "styled-components";
import { LinkStyled, FlexBoxRow, FlexBoxColumn } from "../globalStyles";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectData } from "./Data";
const Square = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ced4da;
  border-radius: 25px;
`;

const ProjectImage = styled(motion.img)`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  border-radius: 25px;
  &:hover {
    opacity: 0.7;
  }
`;

const SubTitle = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;

  font-weight: 600;
`;

const TechText = styled.div`
  margin: 0.2rem 0.5rem;
  padding: 0.2rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.dark};
`;

const Detail = styled.p``;

const Box = styled(FlexBoxColumn)`
  height: 20rem;
`;

export default function ProjectComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <>
      {projectData.map((project) => (
        <Square key={project.id} onClick={handleOpen}>
          <SubTitle>{project.title}</SubTitle>
          {!open ? (
            <>
              <ProjectImage src={project.image[0]} onClick={handleOpen} />
              <Detail>{project.status}</Detail>
            </>
          ) : (
            <Box>
              <Detail>{project.details}</Detail>

              <LinkStyled target="_blank" href={project.link}>
                VIEW DEMO
              </LinkStyled>
            </Box>
          )}
          <SubTitle>Tech-stack </SubTitle>
          <FlexBoxRow>
            {project.tech.map((logo) => (
              <TechText key={logo.id}>{logo.name}</TechText>
            ))}
          </FlexBoxRow>
        </Square>
      ))}
    </>
  );
}
