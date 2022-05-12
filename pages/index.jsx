import styled from "styled-components";
import { Container } from "../globalStyles";
import { BackEndData, BasicTech, FrontEndData } from "../components/Data";
import Hero from "../components/Hero";
import TechComponent from "../components/TechComponent";

const Title = styled.h1`
  font-size: 2rem;
`;
export default function HomePage() {
  return (
    <Container>
      <Hero />
      <Title>Using tech</Title>
      <TechComponent title={"FUNDAMENTAL SKILLS"} data={BasicTech} />
      <TechComponent title={"FRONTEND SKILLS"} data={FrontEndData} />
      <TechComponent title={"BACKEND SKILLS"} data={BackEndData} />
    </Container>
  );
}
