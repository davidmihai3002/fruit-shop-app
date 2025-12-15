import fruitDishes from "@/hard-coded/hardCodedValues";
import { cast, Instance, t } from "mobx-state-tree";
import { FruitDish, FruitDishType } from "../types/models";
import { cartStore } from "./CartStore";
import { notificationsStore } from "./NotificationsStore";

export type ProductsStoreType = Instance<typeof productsStore>;

export const ProductsModel = t
  .model("Product", {
    products: t.maybeNull(t.array(FruitDishType)),
  })
  .views(() => ({
    get allProducts() {
      return fruitDishes;
    },
  }))
  .actions((self) => {
    function setProductsTo(data: FruitDish[]) {
      self.products = cast(data);
    }
    function addToFavorite(productId: number) {
      const productToFavorite = self.products?.find(
        (product) => product.id === productId
      );
      if (!productToFavorite) return;
      productToFavorite.isFavorite = !productToFavorite.isFavorite;
      notificationsStore.notification(
        productToFavorite?.isFavorite
          ? "You have a new favorite!"
          : "Choose another favorite!"
      );
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
      cartStore.setCartTo([]);
      return true;
    }

    return {
      setProductsTo,
      addToFavorite,
      findProductById,
      filterProductsByCategory,
      orderNow,
    };
  });

export const productsStore = ProductsModel.create({
  products: [],
});
