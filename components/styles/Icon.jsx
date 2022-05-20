import styled from "styled-components";

import { motion, useAnimation } from "framer-motion";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { VscGrabber, VscChromeClose, VscTriangleLeft } from "react-icons/vsc";
// import { BsPatchPlusFill } from "react-icons/bs";
import { MdOutlineStickyNote2 } from "react-icons/md";
export const Icon = styled.span`
  font-size: 20px;
  margin: 0 5px;
  color: ${(props) => props?.color || "gray"};
`;

export const IconFocus = styled.span`
  color: black;
`;

export const MenuIcon = styled(VscGrabber)`
  transform: scale(2);
`;

export const LargeCloseIcon = styled(VscChromeClose)`
  transform: scale(1.5);
  position: absolute;
  right: 2rem;
`;
export const MoveBackIcon = styled(VscTriangleLeft)`
  transform: scale(2);
`;
export const NoteIcon = styled(MdOutlineStickyNote2)`
  transform: scale(2);
  color: grey;
  margin: 0 0.5rem;
`;

const PlusLogo = styled(motion.img)`
  width: 3rem;
  @media screen and (min-width: 1000px) {
    width: 5rem;
  }
`;
const ToggleIcon = styled.span`
  font-size: 30px;
  color: white;
  vertical-align: middle;
  position: absolute;
  top: 1.4rem;
  right: 5.5rem;
  @media screen and (min-width: 1000px) {
    top: 2.2rem;
    right: 25%;
  }
`;

export const MotionIcon = ({ image }) => {
  const animation = useAnimation();
  async function sequence() {
    await animation.start({ rotate: -90 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 1 });
  }

  return (
    <PlusLogo
      src={image}
      drag
      dragConstraints={{
        top: -125,
        right: 125,
        bottom: 125,
        left: -125,
      }}
      whileHover={sequence}
      animate={animation}
    />
  );
};

// export const AddItemsIcon = styled(motion.img)`
//   width: 4rem;
//   position: absolute;
//   bottom: 2rem;
//   right: 2rem;
// `;

export const ToggleTheme = ({ toggleTheme, isLight }) => (
  <>
    {isLight ? (
      <ToggleIcon>
        <BsToggleOff onClick={toggleTheme} />
      </ToggleIcon>
    ) : (
      <ToggleIcon>
        <BsToggleOn onClick={toggleTheme} />
      </ToggleIcon>
    )}
  </>
);
