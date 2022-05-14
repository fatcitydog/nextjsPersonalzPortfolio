import styled from "styled-components";
import { LinkStyled, FlexBox } from "../globalStyles";
import { useEffect } from "react";

const ResumeLink = styled(LinkStyled)`
  color: black;
  border: none;
  border-bottom: 1px solid black;

  border-radius: 0;
`;

const ResumeBox = styled(FlexBox)`
  flex-direction: column;
`;
export default function ResumeComponent() {
  return (
    <ResumeBox>
      <ResumeLink
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2FYik_Tung_Yeung_RESUME.pdf?alt=media&token=a2479315-5a8b-4e68-8c7f-239800ce7ad0"
      >
        Yik's Resume.pdf
      </ResumeLink>
    </ResumeBox>
  );
}
