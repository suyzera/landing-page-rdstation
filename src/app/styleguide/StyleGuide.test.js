import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyleGuide from "./page";

describe("StyleGuide", () => {
  it("renders all text correctly", () => {
    render(<StyleGuide />);
    expect(screen.getByText("Style Guide")).toBeInTheDocument();
  });
});
