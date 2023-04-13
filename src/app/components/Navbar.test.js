import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders all menu options", () => {
    render(<Navbar />);
    expect(screen.getByText("Menu 1")).toBeInTheDocument();
    expect(screen.getByText("Menu 2")).toBeInTheDocument();
    expect(screen.getByText("Menu 3")).toBeInTheDocument();
    expect(screen.getByText("Menu 4")).toBeInTheDocument();
    expect(screen.getByText("Menu 5")).toBeInTheDocument();
  });
});
