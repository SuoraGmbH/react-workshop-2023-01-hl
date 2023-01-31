import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Renders without crashing", () => {
  render(<Greeting city="Hamburg" />);
});

test("It renders the name of the given city", () => {
  render(<Greeting city="Hamburg" />);

  expect(screen.getByText("Hamburg", { exact: false })).toBeInTheDocument();
});

test("It renders the name of the given city in capital letters", () => {
  render(<Greeting city="Hamburg" />);

  expect(screen.getByText(/HAMBURG/)).toBeInTheDocument();
});

test("It renders a greeting", () => {
  render(<Greeting city="Hamburg" />);

  // It's the same as exact: false above.
  expect(screen.getByText(/hallo/i)).toBeInTheDocument();

  // screen.
});

test("It renders very long city names", () => {
  render(
    <Greeting city="Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch" />
  );

  expect(
    screen.getByText(
      "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch",
      { exact: false }
    )
  ).toBeInTheDocument();
});

test("It renders according to snapshot", () => {
  const { container } = render(
    <Greeting city="Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch" />
  );

  expect(container).toMatchSnapshot();
});

test("Snapshots also work for values", () => {
  expect({
    some: "object 12344",
  }).toMatchInlineSnapshot(`
    Object {
      "some": "object 12344",
    }
  `);

  expect(1 + 2).toMatchInlineSnapshot(`3`);
  expect(1 + 2).toBe(3);
});
