// write test for the nav component
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Navigation from "./nav-component";

describe("Navigation", () => {
  it("renders a navigation bar", () => {
    render(<Navigation />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
});

test("renders a navigation bar with links", () => {
  render(<Navigation />);
  expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
});
