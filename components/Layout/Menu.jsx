import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { MenuIcon, LargeCloseIcon } from "../styles/Icon";
import { HeaderMenuLink } from "../styles/StyledLink";

const Navbar = styled(motion.nav)`
  margin: 20px 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.95);
  border-bottom: 1px solid #ddd;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 2.7rem;
  cursor: pointer;
  left: 0;
  z-index: 20;
  color: white;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const RouterList = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
const HeaderMenuIcon = styled(MenuIcon)`
  color: white;
  margin: 1rem 1rem 0 0;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media screen and (min-width: 1000px) {
    display: flex;
    font-size: 1.5rem;
    color: white;
  }
`;

const CloseMenuIcon = styled(LargeCloseIcon)`
  transform: scale(2);
  color: white;

  @media screen and (min-width: 1000px) {
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
  { children: "about", href: "/", id: 1 },
  { children: "project", href: "/project", id: 2 },
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
