import React from "react";
import { render, screen } from "@testing-library/react";
import SocialIcons, { IconImage } from "./";

describe("SocialIcons", () => {
  test("renders without errors", () => {
    render(<SocialIcons />);
    const socialIcons = screen.getAllByRole("button", { name: /social-icon/i });
    //social icons number = 4
    expect(socialIcons).toHaveLength(4);
  });
});

describe("IconImage", () => {
  test("renders without errors", () => {
    render(<IconImage iconImage={() => <div>Mock Icon</div>} />);
    const icon = screen.getByText("Mock Icon");
    expect(icon).toBeInTheDocument();
  });
});
