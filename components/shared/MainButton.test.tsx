import { fireEvent, render } from "@testing-library/react-native";
import MainButton from "./MainButton";

describe("MainButton", () => {
  it("Text input prop gets passed to the button", () => {
    const { getByText } = render(<MainButton text="Click" />);
    const buttonText = getByText("Click");
    expect(buttonText).toHaveTextContent("Click");
  });

  it("Triggers the attached method", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<MainButton text="Click" method={mockFn} />);
    const button = getByText("Click");
    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalled();
  });
});
