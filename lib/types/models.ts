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
export const FruitDishType = t.model("FruitDish", {
  id: t.number,
  dishName: t.string,
  dishPrice: t.number,
  category: t.enumeration(["fresh", "cooked", "drinks", "savory"]),
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
