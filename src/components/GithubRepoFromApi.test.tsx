import { render, screen } from "@testing-library/react";
import GithubRepoFromApi from "./GithubRepoFromApi";
import { mockServer } from "../setupTests";
import githubRepoFacebookReactSuccessMock from "../mocks/api.github.com/repos/facebook/react/success";

describe("<GithubRepoFromApi />", () => {
  test("It renders a loading indicator initially", () => {
    mockServer.resetHandlers(githubRepoFacebookReactSuccessMock);
    render(<GithubRepoFromApi repoName="facebook/react" />);

    expect(screen.getByText("Loading…")).toBeInTheDocument();
  });

  test("After loading the data, it should display the stars", async () => {
    mockServer.resetHandlers(githubRepoFacebookReactSuccessMock);
    render(<GithubRepoFromApi repoName="facebook/react" />);

    await screen.findByText("Stats for facebook/react");

    expect(screen.getByText("201310")).toBeInTheDocument();
  });
});
