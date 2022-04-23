import React from "react";
import { H1, H3 } from "../typography/typography";
import {
  InformationContainer,
  Avatar,
  InformationWrapper,
  Bio,
  Name,
} from "./informationStyled";
import Repos from "../repos/repos";
import Link from "../link/link";

function Information({ information, theme }) {
  return (
    <InformationContainer>
      <Avatar src={information?.avatar_url} />
      <InformationWrapper>
        <Name>
          <H1>{information?.name ? information?.name : information?.login}</H1>
          <H3>Joined {new Date(information?.created_at).toDateString()}</H3>
        </Name>

        <H3 color="#0079FF">@{information?.login}</H3>

        <Bio>
          {information?.bio ? information?.bio : "This profile has no bio"}
        </Bio>
        <Repos
          Repos={information?.public_repos}
          Followers={information?.followers}
          Following={information?.following}
        />
        <Link
          theme={theme}
          location={information?.location}
          github={information?.html_url}
          website={information?.blog}
          company={information?.company}
        />
      </InformationWrapper>
    </InformationContainer>
  );
}

export default Information;
