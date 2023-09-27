import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Link from "next/link";

render(<Link href={` /reviews`}>Link</Link>);

test("Link with featured review appears", async () => {
  await waitFor(() => {
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").hasAttribute("href"));
  });
});
