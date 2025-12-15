import { cartStore } from "@/lib/stores/CartStore";
import { ProductsStoreType } from "@/lib/stores/ProductsStore";
import { checkoutPageStyles } from "@/lib/styles/pages/CheckoutPageStyles";
import { observer } from "mobx-react-lite";
import React from "react";
import { Text } from "react-native";

const CheckoutTotal = observer(({ store }: { store: ProductsStoreType }) => {
  const orderTotal = cartStore.cartTotal;
  return (
    <Text style={checkoutPageStyles.totalText}>{"Total: $" + orderTotal}</Text>
  );
});

export default CheckoutTotal;
