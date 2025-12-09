import { qtyModifierStyles } from "@/lib/styles/products/QtyModifierStyles";
import { QtyModifierProps } from "@/lib/types/components/products";
import { Minus, Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

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
          <TouchableOpacity
            activeOpacity={1}
            onPress={decreaseQuantity}
            accessibilityRole="button"
            accessibilityLabel="decrease-qty"
          >
            <Minus />
          </TouchableOpacity>
        </View>

        <Text style={qtyModifierStyles.quantityText}>{quantity}</Text>

        <View style={qtyModifierStyles.plusButton}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={increaseQuantity}
            accessibilityRole="button"
            accessibilityLabel="increase-qty"
          >
            <Plus color={"#FFA451"} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={qtyModifierStyles.priceText}>${price * quantity}</Text>
    </View>
  );
};
