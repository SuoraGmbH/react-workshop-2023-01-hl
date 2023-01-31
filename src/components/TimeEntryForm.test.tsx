import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";

describe("<TimeEntryForm />", () => {
  test("It renders without crashing", () => {
    render(<TimeEntryForm onNewTimeEntry={() => {}} />);
  });

  test("After typing in the input field, the value should be visible next to it", async () => {
    render(<TimeEntryForm onNewTimeEntry={() => {}} />);

    const commentInput = screen.getByRole("textbox", {
      name: /kommentar/i,
    });

    const user = userEvent.setup();
    await user.type(commentInput, "Hallo Welt!");

    expect(screen.getByText("Hallo Welt!")).toBeInTheDocument();
  });

  test("After typing in the input field and clicking the button, the event should be fired", async () => {
    const handleNewTimeEntryMock = jest.fn();
    render(<TimeEntryForm onNewTimeEntry={handleNewTimeEntryMock} />);

    const commentInput = screen.getByRole("textbox", {
      name: /kommentar/i,
    });

    const user = userEvent.setup();
    await user.type(commentInput, "Hallo Welt!");
    await user.click(screen.getByRole("button", { name: /speichern/i }));

    expect(handleNewTimeEntryMock).toHaveBeenCalled();
  });

  test("After typing in the input field and pressing enter, the event should be fired with the entered comment", async () => {
    const handleNewTimeEntryMock = jest.fn();
    render(<TimeEntryForm onNewTimeEntry={handleNewTimeEntryMock} />);

    const commentInput = screen.getByRole("textbox", {
      name: /kommentar/i,
    });

    const user = userEvent.setup();
    await user.type(commentInput, "Hallo Welt!{enter}");

    expect(handleNewTimeEntryMock).toHaveBeenCalled();
    expect(handleNewTimeEntryMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "Hallo Welt!",
      })
    );
  });
});
