import { qtyModifierStyles } from "@/lib/styles/products/QtyModifierStyles";
import { QtyModifierProps } from "@/lib/types/components/products";
import { Minus, Plus } from "lucide-react-native";
import { Text, View } from "react-native";

export const QtyModifier = ({
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QtyModifierProps) => {
  return (
    <View style={qtyModifierStyles.container}>
      <View style={qtyModifierStyles.controlsContainer}>
        <View style={qtyModifierStyles.minusButton}>
          <Minus onPress={decreaseQuantity} />
        </View>

        <Text style={qtyModifierStyles.quantityText}>
          {quantity}
        </Text>

        <View style={qtyModifierStyles.plusButton}>
          <Plus color={"#FFA451"} onPress={increaseQuantity} />
        </View>
      </View>

      <Text style={qtyModifierStyles.priceText}>
        ${price * quantity}
      </Text>
    </View>
  );
};
