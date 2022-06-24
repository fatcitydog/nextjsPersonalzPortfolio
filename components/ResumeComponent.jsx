import styled from "styled-components";
import { LinkStyled, FlexBox } from "../globalStyles";
import { useEffect } from "react";

const ResumeLink = styled(LinkStyled)`
  color: ${(props) => props.theme};

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
        href="https://firebasestorage.googleapis.com/v0/b/village-345022.appspot.com/o/portfolio%2FYik_Tung_RESUME.pdf?alt=media&token=8847968b-3bd0-42ba-906c-27debbeb36aa"
      >
        My Resume.pdf
      </ResumeLink>
    </ResumeBox>
  );
}
