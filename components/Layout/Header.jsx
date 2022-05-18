import styled from "styled-components";
import Link from 'next/link'
import Menu from "./Menu";
import { MotionIcon } from "../styles/Icon";
import { motion } from "framer-motion";

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
      <ContactLink
        drag
        dragConstraints={{
          top: -125,
          right: 125,
          bottom: 125,
          left: -125,
        }}
        href="#contact"
      >
        <MotionIcon
          image={
            "https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2Fconnection.png?alt=media&token=241c4142-d7bc-411c-8d7a-567e8618da16"
          }
        />
      </ContactLink>
      <Menu />
    </HeaderBox>
  );
}
