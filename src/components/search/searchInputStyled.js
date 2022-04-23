import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 40%;
  height: 60px;
  padding: 6px;
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.container};
  color: ${({ theme }) => theme.headerColor};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const SearchButton = styled.button`
  height: 75%;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
  margin-right: 10px;
  color: #ffffff;
  font-family: "Space Mono", monospace;
  font-weight: bold;
  padding: 0 20px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
export const SearchIcon = styled.img`
  margin-left: 10px;
`;
export const SearchInputText = styled.input`
  width: 50%;
  height: 60%;
  border: none;
  outline: 0;
  font-size: 20px;
  font-family: "Space Mono", monospace;
  color: ${({ theme }) => theme.headerColor};
  background-color: ${({ theme }) => theme.container};
  &:focus {
    border: none;
    outline: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.inputColor};
  }
`;
