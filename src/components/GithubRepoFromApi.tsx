import React, { useEffect, useState } from "react";
import GithubRepoStats from "./GithubRepoStats";
import { GithubRepoData } from "../domain/GithubRepoData";

const GithubRepoFromApi: React.FunctionComponent = () => {
  const [responseData, setResponseData] = useState<GithubRepoData>();

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setResponseData(responseData);
        console.log(responseData);
      });
  }, []);

  if (!responseData) {
    return <div>Loading…</div>;
  }

  return <GithubRepoStats githubRepoData={responseData} />;
};

export default GithubRepoFromApi;
