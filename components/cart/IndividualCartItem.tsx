import { individualCartItemStyles } from "@/lib/styles/cart/IndividualCartItemStyles";
import { IndividualCartItemProps } from "@/lib/types/components/cart";
import { Image, Text, View } from "react-native";
import dish3 from "../../assets/images/dish3.png";

export const IndividualCartItem = ({
  name,
  quantity,
  price,
  bgColor,
}: IndividualCartItemProps) => {
  return (
    <View style={individualCartItemStyles.container}>
      <View style={individualCartItemStyles.leftSection}>
        <View
          style={[
            individualCartItemStyles.imageContainer,
            { backgroundColor: bgColor ? bgColor : "white" },
          ]}
        >
          <Image
            source={dish3}
            style={individualCartItemStyles.image}
          />
        </View>
        <View>
          <Text style={individualCartItemStyles.productName}>
            {name}
          </Text>
          <Text>{quantity + (quantity === 1 ? " pack" : " packs")}</Text>
        </View>
      </View>

      <Text style={individualCartItemStyles.priceText}>
        ${price * quantity}
      </Text>
    </View>
  );
};
