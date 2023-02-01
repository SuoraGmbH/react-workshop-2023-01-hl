import React, { useEffect, useState } from "react";
import GithubRepoStats from "./GithubRepoStats";
import { GithubRepoData } from "../domain/GithubRepoData";

interface Props {
  repoName: string;
}

// <GithubRepoFromApi repoName="angular/angular" />
const GithubRepoFromApi: React.FunctionComponent<Props> = ({ repoName }) => {
  const [responseData, setResponseData] = useState<GithubRepoData>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoName}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setResponseData(responseData);
      });
  }, [repoName]);

  if (!responseData) {
    return <div>Loading…</div>;
  }

  return (
    <>
      <h1>Stats for {repoName}</h1>
      <GithubRepoStats githubRepoData={responseData} />
    </>
  );
};

export default GithubRepoFromApi;
