// write test for footer
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FooterComponent from "./footer-component";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<FooterComponent />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});

test("renders a footer with links", () => {
  render(<FooterComponent />);
  expect(screen.getByRole("link")).toBeInTheDocument();
});
