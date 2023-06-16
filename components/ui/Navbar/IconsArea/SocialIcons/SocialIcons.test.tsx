import React from "react";
import { render, screen } from "@testing-library/react";
import SocialIcons, { IconImage } from "./";
import { iconsList } from "./iconsList";

jest.mock("./iconsList", () => ({
  iconsList: [
    { id: 1, icon: () => <div>Icon 1</div> },
    { id: 2, icon: () => <div>Icon 2</div> },
    { id: 3, icon: () => <div>Icon 3</div> },
  ],
}));

describe("SocialIcons", () => {
  test("renders without errors", () => {
    render(<SocialIcons />);
  });

  test("renders social icons", () => {
    render(<SocialIcons variant="submenu" />);
    const socialIcons = screen.getAllByRole("button", { name: "icon" });
    expect(socialIcons).toHaveLength(iconsList.length);
  });

  test("renders the correct icon components", () => {
    render(<SocialIcons variant="submenu" />);

    const icon1 = screen.getByText("Icon 1");
    const icon2 = screen.getByText("Icon 2");
    const icon3 = screen.getByText("Icon 3");

    expect(icon1).toBeInTheDocument();
    expect(icon2).toBeInTheDocument();
    expect(icon3).toBeInTheDocument();
  });
});

describe("IconImage", () => {
  test("renders without errors", () => {
    render(<IconImage iconImage={() => <div>Mock Icon</div>} />);
  });

  test("renders the provided icon component", () => {
    render(<IconImage iconImage={() => <div>Mock Icon</div>} />);

    const icon = screen.getByText("Mock Icon");
    expect(icon).toBeInTheDocument();
  });
});
