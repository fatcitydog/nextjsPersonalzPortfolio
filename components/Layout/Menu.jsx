import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { MenuIcon, LargeCloseIcon } from "../styles/Icon";
import { HeaderMenuLink } from "../styles/StyledLink";
import { useRouter } from "next/router";
import { LinkStyled } from "../../globalStyles";
const Navbar = styled(motion.nav)`
  margin: 20px 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid #ddd;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 4.5rem;
  left: 0;
  z-index: 20;
  color: white;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const RouterList = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const HeaderMenuIcon = styled(MenuIcon)`
  position: absolute;
  left: 1rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    right: 10rem;
    top: 1rem;
    width: 40vw;
  }
`;

const CloseMenuIcon = styled(LargeCloseIcon)`
  transform: scale(2);
  position: absolute;
  left: 1rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const sideVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const links = [
  { children: "Home", href: "/", id: 1 },
  { children: "Project", href: "/project", id: 2 },
  { children: "Resume", href: "/resume", id: 3 },
  { children: "Contact", href: "/contact", id: 4 },
];

export default function Menu() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main>
      {open && (
        <Navbar
          onClick={cycleOpen}
          initial={{ height: 0 }}
          animate={{
            height: 1000,
          }}
          transition={{ duration: 0.6 }}
        >
          <RouterList initial="closed" animate="open" variants={sideVariants}>
            {links.map(({ href, children }, idx) => (
              <HeaderMenuLink key={idx} href={href}>
                {children}
              </HeaderMenuLink>
            ))}
          </RouterList>
        </Navbar>
      )}

      {!open ? (
        <HeaderMenuIcon onClick={cycleOpen} />
      ) : (
        <CloseMenuIcon onClick={cycleOpen} />
      )}
      <DesktopMenu>
        <RouterList>
          {links.map(({ href, children }, idx) => (
            <HeaderMenuLink key={idx} href={href}>
              {children}
            </HeaderMenuLink>
          ))}
        </RouterList>
      </DesktopMenu>
    </main>
  );
}
