import styled, { ThemeProvider } from "styled-components";

import Header from "./Header";

const theme = {
  primary: "white",
  dark: "black",
};

const Box = styled.div`
  height: 100rem;
`;

function Layout(props) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box>{props.children}</Box>
      </ThemeProvider>
    </>
  );
}

export default Layout;
