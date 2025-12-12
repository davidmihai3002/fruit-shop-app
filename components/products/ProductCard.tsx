import { productCardStyles } from "@/lib/styles/products/ProductCardStyles";
import { ProductCardProps } from "@/lib/types/components/products";
import { useRouter } from "expo-router";
import { Heart, Plus } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductCard = ({
  store,
  dishId,
  isFavorite,
  imgSrc,
  title,
  price,
  bgColor,
  hideFavoriteIcon = false,
}: ProductCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        productCardStyles.card,
        { backgroundColor: bgColor ? bgColor : "white" },
      ]}
      onPress={() => {
        router.push({
          pathname: "/product/[id]",
          params: { id: dishId },
        });
      }}
    >
      {!hideFavoriteIcon && (
        <Heart
          style={productCardStyles.favoriteIcon}
          fill={isFavorite ? "#FFA451" : "transparent"}
          color={"#FFA451"}
          onPress={() => store.addToFavorite(dishId)}
        />
      )}

      <View style={productCardStyles.contentContainer}>
        <Image source={imgSrc} style={{}} />
        <Text style={productCardStyles.title}>{title}</Text>
        <View style={productCardStyles.bottomSection}>
          <Text style={productCardStyles.price}>${price}</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={productCardStyles.addButton}
            onPress={() => store.addToCart(dishId)}
          >
            <Plus size={20} color={"#FFA451"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
