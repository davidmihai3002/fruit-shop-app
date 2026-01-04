import CartHeader from "@/components/cart/CartHeader";
import CheckoutTotal from "@/components/cart/CheckoutTotal";
import MainButton from "@/components/shared/MainButton";
import MainInput from "@/components/shared/MainInput";
import { ordersStore } from "@/lib/stores/OrdersStore";
import { productsStore } from "@/lib/stores/ProductsStore";
import { checkoutPageStyles } from "@/lib/styles/pages/CheckoutPageStyles";
import { useRouter } from "expo-router";
import { observer } from "mobx-react-lite";
import React from "react";
import { Text, View } from "react-native";

const CheckoutPage = observer(() => {
  const router = useRouter();
  const registerOrder = () => {
    router.push("/order-successful");
    ordersStore.addOrder();
  };
  return (
    <View style={checkoutPageStyles.container}>
      <CartHeader title="Checkout" />

      <View style={checkoutPageStyles.contentWrapper}>
        <View style={checkoutPageStyles.formSection}>
          <Text style={checkoutPageStyles.sectionTitle}>
            Where can we deliver your meals?
          </Text>
          <MainInput
            placeholder="Enter address"
            value={ordersStore.currentOrder.address}
            onChange={ordersStore.setCurrentOrderAddress}
          />
        </View>

        <View style={checkoutPageStyles.formSection}>
          <Text style={checkoutPageStyles.sectionTitle}>
            Where can we call you?
          </Text>

          <MainInput
            placeholder="Enter number"
            value={ordersStore.currentOrder.phoneNumber}
            onChange={ordersStore.setCurrentOrderPhoneNumber}
          />
        </View>

        <CheckoutTotal store={productsStore} />

        <MainButton text="Pay cash" method={registerOrder} />
      </View>
    </View>
  );
});

export default CheckoutPage;
