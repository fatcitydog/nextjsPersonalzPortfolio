import { Container, Title } from "../globalStyles";

import styled from "styled-components";

import { motion } from "framer-motion";

import ProjectComponent from "../components/ProjectComponent";
export default function ProjectPage() {
  return (
    <Container>
      <Title>Project</Title>
      <ProjectComponent />
    </Container>
  );
}
