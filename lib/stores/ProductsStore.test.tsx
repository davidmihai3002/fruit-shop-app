import fruitDishes, {
  mockFruitDishesForTesting,
} from "@/hard-coded/hardCodedValues";
import { ProductsModel } from "./ProductsStore";

describe("ProductsStore Actions Tests", () => {
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
