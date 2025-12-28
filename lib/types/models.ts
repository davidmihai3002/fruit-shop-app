import { t } from "mobx-state-tree";
import { ImageSourcePropType } from "react-native";

export interface Nutritions {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface Fruit {
  id: number;
  name: string;
  genus: string;
  family: string;
  order: string;
  nutritions: Nutritions;
}

export const NutritionsModel = t.model("FruitModel", {
  calories: t.number,
  fat: t.number,
  sugar: t.number,
  carbohydrates: t.number,
  protein: t.number,
});

export const FruitModel = t.model("FruitModel", {
  id: t.number,
  name: t.string,
  genus: t.string,
  family: t.string,
  order: t.string,
  nutritions: NutritionsModel,
});

export interface FruitDish {
  id: number;
  dishName: string;
  dishPrice: number;
  category: "fresh" | "cooked" | "drinks" | "savory";
  qty: number;
  isHot: boolean;
  isFavorite: boolean;
  description: string;
  ingredients: string;
  imgSrc: ImageSourcePropType | null;
  bgColor?: string;
}
const CategoryEnum = t.enumeration("Category", [
  "fresh",
  "cooked",
  "drinks",
  "savory",
]);
export const FruitDishType = t.model("FruitDish", {
  id: t.number,
  dishName: t.string,
  dishPrice: t.number,
  category: CategoryEnum,
  qty: t.number,
  isHot: t.boolean,
  isFavorite: t.boolean,
  description: t.string,
  ingredients: t.string,
  imgSrc: t.maybeNull(t.frozen<ImageSourcePropType>()),
  bgColor: t.maybe(t.string),
});

export interface OrderProps {
  name: string;
  address: string;
  phoneNumber: number;
  orderedProducts: FruitDish[];
}

export interface AuthResponse{
    access_token: string;
}
