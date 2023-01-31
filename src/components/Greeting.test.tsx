import { render } from "@testing-library/react";
import Greeting from "./Greeting";

test("Renders without crashing", () => {
  render(<Greeting city="Hamburg" />);
});
