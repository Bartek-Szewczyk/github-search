import React from "react";
import { ReposWrapper, SingleRepo } from "./reposStyled";
import { H2, H4 } from "../typography/typography";

function Repos({ Repos, Followers, Following }) {
  const SingleElement = (title, number) => (
    <SingleRepo>
      <H4 style={{ marginBottom: "0" }}>{title}</H4>
      <H2 style={{ marginTop: "0" }}>{number}</H2>
    </SingleRepo>
  );
  return (
    <ReposWrapper>
      {SingleElement("Repos", Repos)}
      {SingleElement("Followers", Followers)}
      {SingleElement("Following", Following)}
    </ReposWrapper>
  );
}

export default Repos;
