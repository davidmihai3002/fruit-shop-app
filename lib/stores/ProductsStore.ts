import fruitDishes from "@/hard-coded/hardCodedValues";
import { cast, Instance, t } from "mobx-state-tree";
import { api } from "../api/api";
import { apiFruits } from "../api/apiClient";
import { Fruit, FruitDish, FruitDishType } from "../types/models";
import { notificationsStore } from "./NotificationsStore";

export type ProductsStoreType = Instance<typeof productsStore>;

export const ProductsModel = t
  .model("Product", {
    products: t.maybeNull(t.array(FruitDishType)),
  })
  .views((self) => ({
      filterProductsByCategory(
      category: "fresh" | "cooked" | "drinks" | "savory"
    ) {
      if (!self.products) return [];
    return self.products.filter(
      (product) => product.category === category
    );
    },
    get allProducts() {
      return fruitDishes;
    },
  }))
  .actions((self) => {
    async function loadMock() {
      const res = await apiFruits.get("/api/fruit/all");
      if (res.ok) {
        return res.data as Fruit[];
      } else {
        console.log("Problem", res.problem);
        return null;
      }
    }
    async function loadData() {
      const res = await api.get("/api/products")
      if (res.ok) {
        return res.data as FruitDish[]
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
      return self.allProducts!.filter(
        (product) => product.category === category
      );
    }

    return {
      loadMock,
      loadData,
      setProductsTo,
      addToFavorite,
      findProductById,
      filterProductsByCategory,
    };
  });

export const productsStore = ProductsModel.create({
  products: [],
});
