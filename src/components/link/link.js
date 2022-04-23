import React, { useState, useEffect } from "react";
import { LinkSection, LinkWrapper, StyledH4 } from "./linkStyled";
import LocationIcon from "../../assets/locationIcon";
import GithubIcon from "../../assets/githubIcon";
import WebSiteIcon from "../../assets/webSiteIcon";
import CompanyIcon from "../../assets/companyIcon";
import { lightTheme, darkTheme } from "../../theme/globalStyled";

function Link({ theme, location, github, website, company }) {
  const [actualColor, setActualColor] = useState(
    theme === "light" ? lightTheme.linkColor : darkTheme.linkColor
  );
  useEffect(() => {
    setActualColor(
      theme === "light" ? lightTheme.linkColor : darkTheme.linkColor
    );
  }, [theme]);

  const loactionData = {
    available: location ? true : false,
    text: location ? location : "No Available",
  };
  const githubData = {
    available: github ? true : false,
    text: github ? github.replace("https://github.com/", "") : "No Available",
    link: github ? github : "",
  };
  const websiteData = {
    available: website ? true : false,
    text: website ? website : "No Available",
  };
  const companyData = {
    available: company ? true : false,
    text: company ? company.replace("@", "") : "No Available",
  };
  return (
    <LinkSection>
      <LinkWrapper available={loactionData.available}>
        <LocationIcon color={actualColor} />
        <StyledH4>{loactionData.text}</StyledH4>
      </LinkWrapper>
      <LinkWrapper
        available={githubData.available}
        href={githubData.link}
        target="_blank"
      >
        <GithubIcon color={actualColor} />
        <StyledH4 link>{githubData.text}</StyledH4>
      </LinkWrapper>
      <LinkWrapper
        available={websiteData.available}
        href={websiteData.text}
        target="_blank"
      >
        <WebSiteIcon color={actualColor} />
        <StyledH4 link>{websiteData.text}</StyledH4>
      </LinkWrapper>
      <LinkWrapper
        available={companyData.available}
        href={"https://github.com/" + companyData.text}
      >
        <CompanyIcon color={actualColor} />
        <StyledH4 link>{companyData.text}</StyledH4>
      </LinkWrapper>
    </LinkSection>
  );
}

export default Link;
