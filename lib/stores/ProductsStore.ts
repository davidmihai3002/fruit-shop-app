import fruitDishes from "@/hard-coded/hardCodedValues";
import { useRouter } from "expo-router";
import { cast, t } from "mobx-state-tree";
import { FruitDish, FruitDishType } from "../types/models";

const router = useRouter();

export const productsStore = t
  .model("Product", {
    products: t.maybeNull(t.array(FruitDishType)),
    cartItems: t.optional(t.array(FruitDishType), []),
  })
  .views((self) => ({
    get allProducts() {
      return fruitDishes;
    },
    get cartTotal() {
      return self.cartItems.reduce((total, item) => total + item.dishPrice, 0);
    },
  }))
  .actions((self) => {
    const products = self.allProducts;

    function setProductsTo(data: FruitDish[]) {
      self.products = cast(data);
    }
    function setCartTo(data: FruitDish[]) {
      self.cartItems = cast(data);
    }
    function addToCart(productId: number, productQty: number = 1) {
      let cart = self.cartItems;
      const productToCart = products?.find(
        (product) => product.id === productId
      );
      if (!productToCart) return;
      const existingItem = cart.find(
        (cartElement) => cartElement.id === productToCart.id
      );
      if (!existingItem) {
        cart = cast([...cart, { ...productToCart, qty: productQty }]);
      } else {
        existingItem.qty += productQty;
      }
      //TODO: add notifications
    }
    function addToFavorite(productId: number) {
      const productToFavorite = products?.find(
        (product) => product.id === productId
      );
      if (!productToFavorite) return;
      productToFavorite.isFavorite = !productToFavorite.isFavorite;
      //TODO: add notifications
    }
    function orderNow() {
      setCartTo([]);
      router.push("/dashboard");
    }

    return {
      setProductsTo,
      setCartTo,
      addToCart,
      addToFavorite,
      orderNow,
    };
  });
