import { useProducts } from "@/lib/hooks/useProducts";
import { Heart } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const AddToFavoriteButton = ({
  isFavorite,
  productId,
}: {
  isFavorite: boolean;
  productId: number;
}) => {
  const { addToFavorite } = useProducts();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        padding: 15,
        borderRadius: 50,
        backgroundColor: "#FFF7F0",
      }}
      onPress={() => addToFavorite(productId)}
    >
      <Heart color={"#FFA451"} fill={isFavorite ? "#FFA451" : "transparent"} />
    </TouchableOpacity>
  );
};

export default AddToFavoriteButton;
