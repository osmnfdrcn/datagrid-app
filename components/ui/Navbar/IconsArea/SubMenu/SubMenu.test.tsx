import React from "react";
import { render, screen } from "@testing-library/react";
import SubMenu from "./";
import userEvent from "@testing-library/user-event";

describe("SubMenu", () => {
  test("renders without errors", () => {
    render(<SubMenu />);
    const icons = screen.getAllByRole("button", { name: /icon/i });
    // hardcodded : social menu icon and mobile menu icon => 2
    expect(icons).toHaveLength(2);
  });

  test("opens mobile menu when mobile menu icon is clicked", async () => {
    const user = userEvent.setup();
    render(<SubMenu />);
    const mobileMenuIcon = screen.getByRole("button", { name: /menu-icon/i });
    await user.click(mobileMenuIcon);
    let menuItems = screen.getAllByRole("listitem");
    // hardcoded : ul in Menu component has 4 li elments
    expect(menuItems).toHaveLength(4);
  });

  test("toggles social menu when social menu icon is clicked", async () => {
    const user = userEvent.setup();
    render(<SubMenu />);
    const socialMenuIcon = screen.getByRole("button", { name: /social-icon/i });
    await user.click(socialMenuIcon);
    const socialItems = screen.getAllByRole("button", { name: "social-icon" });
    // hardcoded : 4 social icons + 1 social menu icon
    expect(socialItems).toHaveLength(5);
  });
});
