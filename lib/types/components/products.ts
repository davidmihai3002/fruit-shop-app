import { ProductsStoreType } from "@/lib/stores/ProductsStore";
import { ImageSourcePropType } from "react-native";

export interface ProductCardProps {
  store: ProductsStoreType;
  dishId: number;
  isFavorite: boolean;
  imgSrc: ImageSourcePropType;
  title: string;
  price: number;
  bgColor?: string;
  hideFavoriteIcon?: boolean;
}

export interface ProductDescriptionProps {
  ingredients: string;
  description: string;
}

export interface ProductPageActionButtonsProps {
  productId: number;
  productQty: number;
  isFavorite: boolean;
}

export interface QtyModifierProps {
  price: number;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}
