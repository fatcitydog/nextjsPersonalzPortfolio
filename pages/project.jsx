import { Container, Title, Wrapper } from "../globalStyles";
import Head from "next/head";
import TypeItComponent from "../components/TypeIt";

import ProjectComponent from "../components/ProjectComponent";
export default function ProjectPage() {
  return (
    <Container>
      <Head>
        <title>YIK | PROJECT</title>
        <meta
          name="introduction"
          content="As a creative professional turned Web Developer, I am excited to
            leverage my passion for writing, attention to detail, and creative
            mind towards writing excellent code to build products that can
            inspire people and make their lives easier."
        />
      </Head>
      <Wrapper>
        <Title>
          <TypeItComponent title={"PROJECT"} />
        </Title>
        <ProjectComponent />
      </Wrapper>
    </Container>
  );
}
