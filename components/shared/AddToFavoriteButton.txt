import { fireEvent, render } from "@testing-library/react-native";
import AddToFavoriteButton from "./AddToFavoriteButton";

const mockFn = jest.fn();

jest.mock("@lib/hooks/useProducts", () => ({
  useProducts: () => ({
    addToFavorite: mockFn,
  }),
}));
describe("AddToFavoriteButton", () => {
  it("Triggers useProducts function when pressed", () => {
    const { getByRole } = render(
      <AddToFavoriteButton isFavorite={false} productId={1} />
    );
    fireEvent.press(getByRole("button"));
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});
