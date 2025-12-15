import { FruitDish } from "../types";
import { CartModel } from "./CartStore";
const mockFruitDishes: FruitDish[] = [
  {
    id: 1,
    dishName: "Mango Sticky Rice",
    dishPrice: 14,
    category: "cooked",
    qty: 2,
    isHot: true,
    isFavorite: true,
    description:
      "Sweet glutinous rice with fresh mango slices and coconut milk.",
    ingredients: "Sticky rice, mango, coconut milk, sugar, sesame seeds",
    imgSrc: null,
    bgColor: "#FFF8E1",
  },
  {
    id: 2,
    dishName: "Super Berry Smoothie",
    dishPrice: 8.0,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "A refreshing blend of strawberries, blueberries, and raspberries.",
    ingredients: "Strawberries, blueberries, raspberries, yogurt, honey",
    imgSrc: null,
    bgColor: "#F3E5F5",
  },
  {
    id: 3,
    dishName: "Watermelon Feta Salad",
    dishPrice: 10.0,
    category: "savory",
    qty: 3,
    isHot: false,
    isFavorite: true,
    description: "A savory summer salad with mint and balsamic glaze.",
    ingredients:
      "Watermelon, feta cheese, mint leaves, balsamic glaze, cucumber",
    imgSrc: null,
    bgColor: "#E8F5E9",
  },
  {
    id: 4,
    dishName: "Tropical Fruit Bowl",
    dishPrice: 15.0,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description: "Seasonal tropical fruits served with a side of lime wedges.",
    ingredients: "Pineapple, papaya, dragon fruit, kiwi, passion fruit",
    imgSrc: null,
    bgColor: "#FFF3E0",
  },
  {
    id: 5,
    dishName: "Spiced Poached Pears",
    dishPrice: 14.0,
    category: "cooked",
    qty: 4,
    isHot: true,
    isFavorite: false,
    description: "Pears gently poached in cinnamon and vanilla syrup.",
    ingredients: "Bosc pears, cinnamon sticks, vanilla bean, star anise, sugar",
    imgSrc: null,
    bgColor: "#FBE9E7",
  },
];

describe("CartStore Actions Tests", () => {
  test("setCartTo function properly adds cart items to the cartItems array", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.setCartTo(mockFruitDishes);
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
});

describe("CartStore Views Tests", () => {
  test("cartTotal should return the sum of all the cartItems ", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.setCartTo(mockFruitDishes);
    expect(parseInt(store.cartTotal)).toBe(137);
  });
  test("cartLength should return the length of the cartItems array ", () => {
    const store = CartModel.create({
      cartItems: [],
    });
    store.setCartTo(mockFruitDishes);
    expect(store.cartLength).toBe(5);
  });
});
