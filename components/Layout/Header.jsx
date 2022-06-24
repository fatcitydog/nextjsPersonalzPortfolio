import styled from "styled-components";
import { motion } from "framer-motion";

import Menu from "./Menu";



const HeaderBox = styled.nav`
  padding: 1rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  background-color: black;
  @media screen and (min-width: 1000px) {
    height: 6rem;
  }
`;
const ContactLink = styled(motion.a)`
  color: white;
  position: fixed;
  right: 2rem;
  top: 7rem;

  @media screen and (min-width: 1000px) {
    right: 3rem;
    top: 10rem;
  }
`;
const Logo = styled.a`
  font-size: 2em;
  color: white;
  margin: 0 20px;
  text-decoration: none;
  font-weight: 800;
  &:hover {
    text-shadow: 1px 1px 2px white;
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <Logo href="/">Yik</Logo>
      <Menu />
    </HeaderBox>
  );
}
