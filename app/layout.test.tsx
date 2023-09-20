import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";
import Header from "../components/header-component/header-component";
import FooterComponent from "../components/footer-component/footer-component";

const fragment = document.createDocumentFragment();
const mockChildren = <>Mock Children</>;
jest.mock("../components/header-component/header-component.tsx", () => {
  return jest.fn(() => <div>Mock Header</div>);
});

jest.mock("../components/footer-component/footer-component.tsx", () => {
  return jest.fn(() => <div>Mock Footer</div>);
});

test("1. Layout renders properly  ", () => {
  render(<RootLayout children={mockChildren} />, {
    container: document.body.appendChild(document.createElement(null)),
  });
  // console.log(<Layout children={mockChildren} />);
  // console.log(screen.getByRole('document'));
  const layout = screen.getByTestId("layout");
  console.log("Layout Screen", layout);
  console.log("Component", <RootLayout children={mockChildren} />);
  expect(layout).toBeInTheDocument();
});

test("2. Layout renders a header", () => {
  render(<RootLayout children={mockChildren} />, {
    container: document.appendChild(document.createElement("html")),
  });
  expect(Header).toHaveBeenCalled();
});

test("3. Layout renders a footer", () => {
  render(<RootLayout children={mockChildren} />, {
    container: document.appendChild(document.createElement("html")),
  });
  expect(FooterComponent).toHaveBeenCalled();
});

// describe("4. Layout renders a main element", () => {
//   test("4.1 Layout renders a main element", () => {
//     render(<RootLayout children={mockChildren} />, {
//         container: document.appendChild(document.createElement("html")),
//       });
//     expect(screen.getByRole("main")).toBeInTheDocument();
//   });
//   test("4.2 Layout renders a main element with children", () => {
//     render(<RootLayout children={mockChildren} />, {
//         container: document.appendChild(document.createElement("html")),
//       });
//     expect(screen.getByRole("main")).toHaveTextContent("Mock Children");
//   });
// });
// expect(Header).toHaveBeenCalled();
