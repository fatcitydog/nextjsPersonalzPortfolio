import { Container, Title, Wrapper } from "../globalStyles";

import styled from "styled-components";

import { motion } from "framer-motion";

import ProjectComponent from "../components/ProjectComponent";
export default function ProjectPage() {
  return (
    <Container>
      <Wrapper>
        <Title>Project</Title>
        <ProjectComponent />
      </Wrapper>
    </Container>
  );
}
