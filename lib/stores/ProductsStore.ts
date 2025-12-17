import fruitDishes from "@/hard-coded/hardCodedValues";
import { cast, Instance, t } from "mobx-state-tree";
import { api } from "../api/apiClient";
import { Fruit, FruitDish, FruitDishType } from "../types/models";
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
    async function load() {
      const res = await api.get("/api/fruit/all");
      if (res.ok) {
        return res.data as Fruit[];
      } else {
        console.log("Problem", res.problem);
        return null;
      }
    }
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
      return self.products!.filter((product) => product.category === category);
    }

    return {
      load,
      setProductsTo,
      addToFavorite,
      findProductById,
      filterProductsByCategory,
    };
  });

export const productsStore = ProductsModel.create({
  products: [],
});
