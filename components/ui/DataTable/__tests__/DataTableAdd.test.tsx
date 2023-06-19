import { render, screen } from "@testing-library/react";
import DataTableAdd from "../DataTableAdd";
import { Provider } from "react-redux"; // Import the Provider component
import { StateProvider } from "@/providers/stateProvider";
import { store } from "@/store/store";
import userEvent from "@testing-library/user-event";

describe("DataTableAdd", () => {
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <DataTableAdd />
      </Provider>,
      {
        wrapper: StateProvider,
      }
    );
    expect(screen.getByRole("button", { name: /yeni/i })).toBeInTheDocument();
  });

  test("opens add data modal when clicked", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <DataTableAdd />
      </Provider>,
      {
        wrapper: StateProvider,
      }
    );
    const btnEl = screen.getByRole("button", { name: /yeni/i });
    await user.click(btnEl);
    const moddalHeaderEl = screen.getByText(/yeni/i);
    expect(moddalHeaderEl).toBeInTheDocument();
  });
});
