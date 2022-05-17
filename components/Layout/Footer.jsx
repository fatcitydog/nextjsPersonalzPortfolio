import styled from "styled-components";
import Link from "next/link";
import { FlexBox } from "../../globalStyles";
const FooterBox = styled.nav`
  padding: 1rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-top: 1px solid #ddd;
  background-color: white;
  @media screen and (min-width: 1000px) {
    height: 25rem;
  }
`;

const RowBox = styled(FlexBox)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ColumnBox = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
`;
const FooterTtile = styled.div`
  font-weight: 800;
  font-size: 8vw;
`;
export const FooterLink = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export default function Footer() {
  return (
    <FooterBox>
      <ColumnBox>
        <FooterTtile>Let's</FooterTtile>
        <FooterTtile>Connect</FooterTtile>
      </ColumnBox>
      <RowBox>
        <ColumnBox>
          <FooterLink target="_blank" href="tel:647-674-5652">
            +647 674 5652
          </FooterLink>
          <FooterLink target="_blank" href="mailto: yiktungtony@gmail.com">
            yiktungtony@gmail.com
          </FooterLink>
        </ColumnBox>
        <ColumnBox>
          <FooterLink target="_blank" href="www.linkedin.com/in/yik-tung-yeung">
            Linkedin
          </FooterLink>
          <FooterLink target="_blank" href="https://github.com/fatcitydog">
            Github
          </FooterLink>
          <FooterLink
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2FYik_Tung_Yeung_RESUME.pdf?alt=media&token=a2479315-5a8b-4e68-8c7f-239800ce7ad0"
          >
            Resume.pdf
          </FooterLink>
        </ColumnBox>
      </RowBox>
    </FooterBox>
  );
}
