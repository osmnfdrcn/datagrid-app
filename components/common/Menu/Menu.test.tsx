import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./";

describe("Menu", () => {
  test("renders without errors", () => {
    render(<Menu variant={"row"} />);
    let menuItems = screen.getAllByRole("listitem");
    // hardcodded : social menu icon and mobile menu icon => 2
    expect(menuItems).toHaveLength(4);
  });
});
