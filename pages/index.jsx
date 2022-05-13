import styled from "styled-components";
import { Container, Wrapper } from "../globalStyles";
import { BackEndData, BasicTech, FrontEndData } from "../components/Data";
import Hero from "../components/Hero";
import TechComponent from "../components/TechComponent";

export default function HomePage() {
  return (
    <Container>
      <Wrapper>
        <Hero />
        <TechComponent title={"FUNDAMENTAL SKILLS"} data={BasicTech} />
        <TechComponent title={"FRONTEND SKILLS"} data={FrontEndData} />
        <TechComponent title={"BACKEND SKILLS"} data={BackEndData} />
      </Wrapper>
    </Container>
  );
}
