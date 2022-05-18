import { Container, Title, Wrapper } from "../globalStyles";
import Head from "next/head";
import TypeItComponent from "../components/TypeIt";
import { Headline } from "../components/Hero";
import styled from "styled-components";
import Link from "next/link";
const Details = styled(Headline)`
  font-size: 1.2rem;
`;
const VideoBox = styled.video`
  margin: 4rem 0 4rem 0;
  background-color: black;
  width: 100%;
  @media screen and (min-width: 1000px) {
    width: 90%;
  }
`;
const LinkDetail = styled.button`
  font-size: 2rem;
  color: black;
  text-decoration: none;
  padding: 1rem;
  border: none;
  margin-bottom: 10rem;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export default function village() {
  return (
    <Container>
      <Head>
        <title>YIK | Village</title>
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
          <TypeItComponent title={"Village 2022"} />
        </Title>
        <Details>
          Sorry, the website is closing for updating new functions now, please
          watch demo first.
        </Details>
        <VideoBox
          controls
          poster="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2FScreenshot%202022-05-18%20at%2012.13.25%20PM.png?alt=media&token=f52647a9-be76-4510-a23c-29555ee36d32"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2Fvillage_function_demo.mp4?alt=media&token=ba6a1062-4fd7-49c3-a139-da48e5a6509c"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </VideoBox>
        <Link href="/project">
          <LinkDetail>More Demo</LinkDetail>
        </Link>
      </Wrapper>
    </Container>
  );
}
