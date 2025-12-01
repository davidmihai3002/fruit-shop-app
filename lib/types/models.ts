import { ImageSourcePropType } from "react-native";

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

export interface OrderProps {
  name: string;
  address: string;
  phoneNumber: number;
  orderedProducts: FruitDish[];
}

