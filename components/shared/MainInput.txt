import { fireEvent, render } from "@testing-library/react-native";
import MainInput from "./MainInput";

describe("MainInput", () => {
  it("Displays the input correctly", () => {
    const { getByPlaceholderText } = render(
      <MainInput placeholder="placeholder" />
    );
    expect(getByPlaceholderText("placeholder")).toBeTruthy();
  });

  it("Executes the method when applied with the correct input", () => {
    const mockFn = jest.fn();
    const { getByPlaceholderText } = render(
      <MainInput placeholder="placeholder" onChange={mockFn} />
    );

    const input = getByPlaceholderText("placeholder");
    fireEvent.changeText(input, "Testing");

    expect(mockFn).toHaveBeenLastCalledWith("Testing");
  });
});
