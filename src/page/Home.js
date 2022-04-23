import React, { useState } from "react";
import ColorMode from "../components/colorMode/colorMode";
import { H1 } from "../components/typography/typography";
import { HomeContainer, TitleContainer } from "./HomeStyled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/globalStyled";
import SearchInput from "../components/search/searchInput";
import Information from "../components/information/information";

function Home() {
  const [theme, setTheme] = useState("light");
  const [information, setInformation] = useState(null);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const handelInformation = (data) => {
    setInformation(data);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <HomeContainer>
        <TitleContainer>
          <H1>devfinder</H1>
          <ColorMode changeColor={themeToggler} theme={theme} />
        </TitleContainer>
        <SearchInput setInformation={handelInformation} />
        <Information information={information} theme={theme} />
      </HomeContainer>
    </ThemeProvider>
  );
}

export default Home;
