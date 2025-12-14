import { fireEvent, render } from "@testing-library/react-native";
import { QtyModifier } from "./QtyModifier";

describe("QtyModifier", () => {
  it("Triggers decrease quantity function", () => {
    const mockDecreaseFn = jest.fn();
    const { getByRole } = render(
      <QtyModifier
        price={0}
        quantity={0}
        increaseQuantity={mockDecreaseFn}
        decreaseQuantity={mockDecreaseFn}
      />
    );

    fireEvent.press(getByRole("button", { name: "decrease-qty" }));

    expect(mockDecreaseFn).toHaveBeenCalled();
  });
  it("Triggers increase quantity function", () => {
    const mockIncreaseFn = jest.fn();
    const { getByRole } = render(
      <QtyModifier
        price={0}
        quantity={0}
        increaseQuantity={mockIncreaseFn}
        decreaseQuantity={mockIncreaseFn}
      />
    );

    fireEvent.press(getByRole("button", { name: "increase-qty" }));

    expect(mockIncreaseFn).toHaveBeenCalled();
  });
});
