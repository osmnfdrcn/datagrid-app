import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux"; // Import the Provider component
import { StateProvider } from "@/providers/stateProvider";
import { store } from "@/store/store";
import AddNewEntryModal from "./AddNewEntryModal";

describe("AddNewEntryModal", () => {
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <AddNewEntryModal />
      </Provider>,
      {
        wrapper: StateProvider,
      }
    );
    expect(screen.getByRole("heading", { name: /yeni/i })).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(3);
    expect(screen.getByRole("button", { name: /kaydet/i })).toBeInTheDocument();
  });
});
