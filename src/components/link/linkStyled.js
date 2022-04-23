import styled from "styled-components";
import { H4 } from "../typography/typography";

export const LinkSection = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto auto;
  text-align: left;
  align-items: flex-start;
`;
export const LinkWrapper = styled.a`
  opacity: ${(props) => (props.available ? "1" : "0.4")};
  pointer-events: ${(props) => (props.available ? "auto" : "none")};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 200px;
  text-decoration: none;
`;
export const Icon = styled.img``;

export const StyledH4 = styled(H4)`
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    text-decoration: ${(props) => (props.link ? "underline" : "none")};
    cursor: ${(props) => (props.link ? "pointer" : "default")};
  }
`;
