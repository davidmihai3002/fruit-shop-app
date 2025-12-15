import { cast, t } from "mobx-state-tree";
import { FruitDish, FruitDishType } from "../types/models";
import { notificationsStore } from "./NotificationsStore";
import { productsStore } from "./ProductsStore";

export const CartModel = t
  .model({
    cartItems: t.optional(t.array(FruitDishType), []),
  })
  .views((self) => ({
    get cartTotal() {
      return self.cartItems
        .reduce((total, item) => total + item.dishPrice * item.qty, 0)
        .toFixed(2);
    },
    get cartLength() {
      return self.cartItems.length;
    },
  }))
  .actions((self) => {
    function setCartTo(data: FruitDish[]) {
      self.cartItems = cast(data);
    }
    function addToCart(productId: number, productQty: number = 1) {
      const products = productsStore.allProducts;

      const productToCart = products?.find(
        (product) => product.id === productId
      );
      if (!productToCart) return;
      const existingItem = self.cartItems.find(
        (cartElement) => cartElement.id === productToCart.id
      );
      if (!existingItem) {
        self.cartItems.push({ ...productToCart, qty: productQty });
      } else {
        existingItem.qty += productQty;
      }

      notificationsStore.notification("Your item was added to cart");
    }

    return {
      setCartTo,
      addToCart,
    };
  });

export const cartStore = CartModel.create({
  cartItems: [],
});
