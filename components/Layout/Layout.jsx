import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
const theme = {
  primary: "white",
  dark: "black",
};

const Box = styled.div`
  height: 100rem;
`;
// const ThemeBox = styled.div`
//   width: 160px;
//   height: 100px;
//   background-color: rgba(255, 255, 255, 0.4);
//   display: flex;
//   justify-content: flex-start;
//   border-radius: 50px;
//   padding: 10px;
//   cursor: pointer;
// `;
// const ThemeToggle = styled(motion.div)`
//   width: 80px;
//   height: 80px;
//   background-color: red;
//   border-radius: 40px;
// `;
function Layout(props) {
  const [isOn, setIsOn] = useState(false);
  const [themeState, setThemeState] = useState("primary");
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* <ThemeBox>
          <ThemeToggle></ThemeToggle>
        </ThemeBox> */}
        <Header />
        <Box>{props.children}</Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default Layout;
