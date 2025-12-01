import React from "react";
import { ViewStyle } from "react-native";

export interface MainButtonProps {
  text: string;
  method?: () => void;
}

export interface MainInputProps {
  value?: string;
  placeholder?: string;
  onChange?: React.Dispatch<React.SetStateAction<string | null>>;
  onPress?: () => void;
}

export interface GoBackButtonProps {
  style: ViewStyle;
}

export interface AddToFavoriteButtonProps {
  isFavorite: boolean;
  productId: number;
}
