import fruitDishes, {
  mockFruitDishesForTesting,
} from "@/hard-coded/hardCodedValues";
import { t } from "mobx-state-tree";
import { apiFruits } from "../api/apiClient";
import { FruitModel } from "../types/models";
import { ProductsModel } from "./ProductsStore";

jest.mock("../api/apiClient", () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

describe("ProductsStore Actions Tests", () => {
  test("load function should return an array of type Fruit", async () => {
    const mockFruit = {
      id: 6,
      name: "Banana",
      genus: "Musa",
      family: "Musaceae",
      order: "Zingiberales",
      nutritions: {
        carbohydrates: 22,
        protein: 1,
        fat: 0.2,
        calories: 96,
        sugar: 17.2,
      },
    };
    (apiFruits.get as jest.Mock).mockResolvedValue({
      ok: true,
      data: [mockFruit],
    });
    const store = ProductsModel.create({
      products: [],
    });
    const payload = await store.loadMock();
    const FruitArray = t.array(FruitModel);
    expect(FruitArray.is(payload)).toBeTruthy();
  });

  test("setProductsTo function should add any array of type FruitDish to the products", () => {
    const store = ProductsModel.create({
      products: [],
    });
    store.setProductsTo(mockFruitDishesForTesting);
    expect(store.products?.length).toBe(5);
  });
  test("addToFavorite function should toggle the favorite key for the specific object we want", () => {
    const store = ProductsModel.create({
      products: [],
    });
    store.setProductsTo(mockFruitDishesForTesting);
    const previousFavoriteState = store.products![0].isFavorite;
    store.addToFavorite(1);
    expect(store.products![0].isFavorite).toBe(!previousFavoriteState);
  });
  test("findProductById function should return the product with the same id key as in the function props", () => {
    const store = ProductsModel.create({
      products: [],
    });
    store.setProductsTo(mockFruitDishesForTesting);
    const theFoundItemById = store.findProductById(3);
    expect(theFoundItemById?.id).toBe(3);
  });
  test("filterProductsByCategory function should filter and return the products after the passed category", () => {
    const store = ProductsModel.create({
      products: [],
    });
    store.setProductsTo(store.allProducts);
    const filteredProducts = store.filterProductsByCategory("cooked");
    expect(filteredProducts.length).toBe(4);
  });
});

describe("ProductsStore Views Tests", () => {
  test("allProducts getter should return all fruitDishes from mock database", () => {
    const store = ProductsModel.create({
      products: [],
    });
    expect(store.allProducts).toEqual(fruitDishes);
  });
});
