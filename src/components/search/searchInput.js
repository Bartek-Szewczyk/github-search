import React, { useState, useEffect } from "react";
import {
  SearchButton,
  SearchInputContainer,
  SearchIcon,
  SearchInputText,
} from "./searchInputStyled";
import icon from "../../assets/icon-search.svg";
import { getInformation } from "../../service/GitHubAPI/request";
import { H3 } from "../../components/typography/typography";

const SearchInput = ({ setInformation }) => {
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  async function fetchData() {
    const data = await getInformation("Bartek-Szewczyk");
    setInformation(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleChangeUser = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async () => {
    const data = await getInformation(name);
    if (!data.message) {
      setInformation(data);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <SearchInputContainer>
      <SearchIcon src={icon} alt="search icon" />
      <SearchInputText
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => handleChangeUser(e)}
      ></SearchInputText>
      {error && <H3 color="red">No results</H3>}
      <SearchButton onClick={handleSubmit}>Search</SearchButton>
    </SearchInputContainer>
  );
};

export default SearchInput;
