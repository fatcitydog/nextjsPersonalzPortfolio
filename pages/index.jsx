import styled from "styled-components";
import { useState } from "react";
import { Container, Wrapper } from "../globalStyles";
import { BackEndData, BasicTech, FrontEndData } from "../components/Data";
import Hero from "../components/Hero";
import TechComponent from "../components/TechComponent";
import Head from "next/head";
import { MotionIcon } from "../components/styles/Icon";
import { lightTheme, darkTheme } from "../components/styles/Theme";
import { ThemeProvider } from "styled-components";
import { ToggleTheme } from "../components/styles/Icon";
const HomeWrapper = styled(Container)`
  background-color: black;
  color: white;
`;

export default function HomePage() {
  const [isLight, setTheme] = useState(false);
  const themeToggler = () => {
    setTheme(!isLight);
  };
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <ToggleTheme toggleTheme={themeToggler} isLight={isLight} />
      <HomeWrapper>
        <Head>
          <title>Yik | ABOUT</title>
          <meta
            name="introduction"
            content="As a creative professional turned Web Developer, I am excited to
            leverage my passion for writing, attention to detail, and creative
            mind towards writing excellent code to build products that can
            inspire people and make their lives easier."
          />
        </Head>
        <Wrapper>
          <Hero />
          <TechComponent title={"FUNDAMENTAL SKILLS"} data={BasicTech} />
          <TechComponent title={"FRONTEND SKILLS"} data={FrontEndData} />
          <TechComponent title={"BACKEND SKILLS"} data={BackEndData} />
        </Wrapper>
      </HomeWrapper>
    </ThemeProvider>
  );
}
