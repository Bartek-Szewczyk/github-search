import styled from "styled-components";

export const InformationContainer = styled.div`
  width: 40%;
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.container};
  color: ${({ theme }) => theme.headerColor};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 6px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 20%;
  margin: 20px;
`;
export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;

export const InformationWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const Bio = styled.p``;
