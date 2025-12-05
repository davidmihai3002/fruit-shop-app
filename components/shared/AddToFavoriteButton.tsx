import { useProducts } from "@/lib/hooks/useProducts";
import { addToFavoriteButtonStyles } from "@/lib/styles/shared/AddToFavoriteButtonStyles";
import { AddToFavoriteButtonProps } from "@/lib/types/components/shared";
import { Heart } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const AddToFavoriteButton = ({
  isFavorite,
  productId,
}: AddToFavoriteButtonProps) => {
  const { addToFavorite } = useProducts();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={1}
      style={addToFavoriteButtonStyles.button}
      onPress={() => addToFavorite(productId)}
    >
      <Heart color={"#FFA451"} fill={isFavorite ? "#FFA451" : "transparent"} />
    </TouchableOpacity>
  );
};

export default AddToFavoriteButton;
