import React from "react";
import { GithubRepoData } from "../domain/GithubRepoData";

interface Props {
  githubRepoData: GithubRepoData;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({
  githubRepoData,
}) => {
  return (
    <div>
      <b>Stars:</b> {githubRepoData.stargazers_count}
    </div>
  );
};

export default GithubRepoStats;
