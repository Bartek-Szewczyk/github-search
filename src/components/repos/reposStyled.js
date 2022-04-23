import styled from "styled-components";

export const ReposWrapper = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.darkBg};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

export const SingleRepo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
