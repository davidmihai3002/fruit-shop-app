import { ViewStyle } from "react-native";

export interface MainButtonProps {
  text: string;
  method?: () => void;
}

export interface MainInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onPress?: () => void;
}

export interface GoBackButtonProps {
  style: ViewStyle;
}

export interface AddToFavoriteButtonProps {
  isFavorite: boolean;
  productId: number;
}
