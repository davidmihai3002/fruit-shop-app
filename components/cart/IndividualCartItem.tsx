import { individualCartItemStyles } from "@/lib/styles/cart/IndividualCartItemStyles";
import { IndividualCartItemProps } from "@/lib/types/components/cart";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import dish3 from "../../assets/images/dish3.png";

export const IndividualCartItem = ({
  name,
  quantity,
  price,
  bgColor,
  productId,
}: IndividualCartItemProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={individualCartItemStyles.container}
      onPress={() => {
        router.push({
          pathname: "/product/[id]",
          params: { id: productId },
        });
      }}
    >
      <View style={individualCartItemStyles.leftSection}>
        <View
          style={[
            individualCartItemStyles.imageContainer,
            { backgroundColor: bgColor ? bgColor : "white" },
          ]}
        >
          <Image source={dish3} style={individualCartItemStyles.image} />
        </View>
        <View>
          <Text style={individualCartItemStyles.productName}>{name}</Text>
          <Text>{quantity + (quantity === 1 ? " pack" : " packs")}</Text>
        </View>
      </View>

      <Text style={individualCartItemStyles.priceText}>
        ${price * quantity}
      </Text>
    </TouchableOpacity>
  );
};
