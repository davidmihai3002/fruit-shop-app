import { cartStore } from "@/lib/stores/CartStore";
import { cartTotalAndButtonStyles } from "@/lib/styles/cart/CartTotalAndButtonStyles";
import { useRouter } from "expo-router";
import { observer } from "mobx-react-lite";
import React from "react";
import { Text, View } from "react-native";
import MainButton from "../shared/MainButton";

const CartTotalAndButton = observer(() => {
  const router = useRouter();
  const cartTotalValue = cartStore.cartTotal;
  return (
    <View style={cartTotalAndButtonStyles.container}>
      <View style={cartTotalAndButtonStyles.totalSection}>
        <Text style={cartTotalAndButtonStyles.totalLabel}>Total</Text>
        <Text style={cartTotalAndButtonStyles.totalValue}>
          ${cartTotalValue}
        </Text>
      </View>

      <View style={cartTotalAndButtonStyles.buttonWrapper}>
        <MainButton text="Checkout" method={() => router.push("/checkout")} />
      </View>
    </View>
  );
});

export default CartTotalAndButton;
