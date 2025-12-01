import { Minus, Plus } from "lucide-react-native";
import { Text, View } from "react-native";

export const QtyModifier = ({
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: {
  price: number;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 200,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 8,
            borderRadius: 50,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "black",
          }}
        >
          <Minus onPress={decreaseQuantity} />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          {quantity}
        </Text>

        <View
          style={{
            padding: 10,
            borderRadius: 50,
            backgroundColor: "#FFF7F0",
          }}
        >
          <Plus color={"#FFA451"} onPress={increaseQuantity} />
        </View>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: "#FFA451",
        }}
      >
        ${price * quantity}
      </Text>
    </View>
  );
};
