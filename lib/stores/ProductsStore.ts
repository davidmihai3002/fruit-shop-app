import fruitDishes from "@/hard-coded/hardCodedValues";
import { cast, Instance, t } from "mobx-state-tree";
import { FruitDish, FruitDishType } from "../types/models";

export type ProductsStoreType = Instance<typeof productsStore>;

export const ProductsModel = t
  .model("Product", {
    products: t.maybeNull(t.array(FruitDishType)),
    cartItems: t.optional(t.array(FruitDishType), []),
  })
  .views((self) => ({
    get allProducts() {
      return fruitDishes;
    },
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
    function setProductsTo(data: FruitDish[]) {
      self.products = cast(data);
    }
    function setCartTo(data: FruitDish[]) {
      self.cartItems = cast(data);
    }
    function addToCart(productId: number, productQty: number = 1) {
      const products = self.allProducts;

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
      //TODO: add notifications
    }
    function addToFavorite(productId: number) {
      const productToFavorite = self.products?.find(
        (product) => product.id === productId
      );
      if (!productToFavorite) return;
      productToFavorite.isFavorite = !productToFavorite.isFavorite;
      //TODO: add notifications
    }
    function findProductById(productId: number) {
      return self.products!.find((product) => product.id === productId);
    }
    function filterProductsByCategory(
      category: "fresh" | "cooked" | "drinks" | "savory"
    ) {
      const products = self.allProducts;
      return products.filter((product) => product.category === category);
    }
    function orderNow() {
      setCartTo([]);
      return true;
    }

    return {
      setProductsTo,
      setCartTo,
      addToCart,
      addToFavorite,
      findProductById,
      filterProductsByCategory,
      orderNow,
    };
  });

export const productsStore = ProductsModel.create({
  products: [],
  cartItems: [],
});
