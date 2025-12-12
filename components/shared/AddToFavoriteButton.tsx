import { productsStore } from "@/lib/stores/ProductsStore";
import { addToFavoriteButtonStyles } from "@/lib/styles/shared/AddToFavoriteButtonStyles";
import { AddToFavoriteButtonProps } from "@/lib/types/components/shared";
import { Heart } from "lucide-react-native";
import { observer } from "mobx-react-lite";
import React from "react";
import { TouchableOpacity } from "react-native";

const AddToFavoriteButton = observer(
  ({ isFavorite, productId }: AddToFavoriteButtonProps) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={1}
        style={addToFavoriteButtonStyles.button}
        onPress={() => productsStore.addToFavorite(productId)}
      >
        <Heart
          color={"#FFA451"}
          fill={isFavorite ? "#FFA451" : "transparent"}
        />
      </TouchableOpacity>
    );
  }
);

export default AddToFavoriteButton;
