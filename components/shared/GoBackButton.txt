import { fireEvent, render } from "@testing-library/react-native";
import GoBackButton from "./GoBackButton";

const mockBack = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: mockBack,
  }),
}));

describe("GoBackButton", () => {
  it("navigates to previous page", () => {
    const { getByText } = render(<GoBackButton style={{}} />);
    const router = require("expo-router").useRouter();
    fireEvent.press(getByText("Go Back"));
    expect(mockBack).toHaveBeenCalled();
  });
});
