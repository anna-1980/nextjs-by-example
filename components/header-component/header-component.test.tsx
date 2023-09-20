import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./header-component";

test("Header renders properly", () => {
  render(<Header />);
  const header = screen.getByRole("heading");
  const headerText = "Brand Name";
  expect(header).toHaveTextContent(headerText);
});
