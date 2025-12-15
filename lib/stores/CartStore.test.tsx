import { mockFruitDishesForTesting } from "@/hard-coded/hardCodedValues";
import { CartModel } from "./CartStore";

describe("CartStore Actions Tests", () => {
  test("setCartTo function properly adds cart items to the cartItems array", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.setCartTo(mockFruitDishesForTesting);
    expect(store.cartItems.length).toBe(5);
  });
  test("addToCart function properly copies and adds an item from productsStore to cartStore", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.addToCart(47, 5);
    expect(store.cartItems[0].id).toBe(47);
    expect(store.cartItems[0].qty).toBe(5);
  });
  test("addToCart function returns immediately if the item is not found inside the productsStore", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    const addToCartFunction = store.addToCart(0);
    expect(addToCartFunction).toBeFalsy();
    expect(store.cartLength).toBe(0);
  });
  test("addToCart function adds an item with the default quantity of 1 if none provided", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.addToCart(47);
    expect(store.cartItems[0].qty).toBe(1);
  });
  test("orderNow function should set the cartItems to an empty array", () => {
    const store = CartModel.create({
      cartItems: mockFruitDishesForTesting,
    });
    const orderNowMock = function () {
      store.setCartTo([]);
    };
    orderNowMock();
    expect(store.cartItems.length).toBe(0);
  });
});

describe("CartStore Views Tests", () => {
  test("cartTotal should return the sum of all the cartItems ", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.setCartTo(mockFruitDishesForTesting);
    expect(parseInt(store.cartTotal)).toBe(137);
  });
  test("cartLength should return the length of the cartItems array ", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.setCartTo(mockFruitDishesForTesting);
    expect(store.cartLength).toBe(5);
  });
});
