import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;

  }
`;

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
`;
export const Wrapper = styled.div`
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  @media screen and (min-width: 768px) {
    max-width: 1280px;
    padding: 0 6rem;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Title = styled.div`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const LinkStyled = styled.a`
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  width: 80%;
  border: 1px solid #ced4da;
  color: ${(props) => props.theme.primary};
  &:hover {
    background-color: #ced4da;
    color: ${(props) => props.theme.primary};
  }
`;

export const Detail = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FlexBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
  hidden: { opacity: 0.5, scale: 0.5 },
};
export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
`;

export default GlobalStyle;
