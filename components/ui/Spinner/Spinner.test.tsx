import { render, screen } from "@testing-library/react";
import Spinner from "./";

describe("Spinner", () => {
  test("renders without errors", () => {
    const { container } = render(<Spinner />);
    const spinnerSvg = container.querySelector("svg");
    expect(spinnerSvg).toHaveClass("w-10 h-10 animate-spin");
  });
});
