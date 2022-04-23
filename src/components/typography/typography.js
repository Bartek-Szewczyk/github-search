import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Space Mono", monospace;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.headerColor};
`;

export const H2 = styled.h2`
  font-family: "Space Mono", monospace;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.headerColor};
`;

export const H3 = styled.h3`
  font-family: "Space Mono", monospace;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.headerColor};
`;
export const H4 = styled.h4`
  font-family: "Space Mono", monospace;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.headerColor};
`;
