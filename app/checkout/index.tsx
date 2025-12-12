import CartHeader from "@/components/cart/CartHeader";
import CheckoutTotal from "@/components/cart/CheckoutTotal";
import MainButton from "@/components/shared/MainButton";
import MainInput from "@/components/shared/MainInput";
import { productsStore } from "@/lib/stores/ProductsStore";
import { checkoutPageStyles } from "@/lib/styles/pages/CheckoutPageStyles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const CheckoutPage = () => {
  const router = useRouter();
  return (
    <View style={checkoutPageStyles.container}>
      <CartHeader title="Checkout" />

      <View style={checkoutPageStyles.contentWrapper}>
        <View style={checkoutPageStyles.formSection}>
          <Text style={checkoutPageStyles.sectionTitle}>
            Where can we deliver your meals?
          </Text>
          <MainInput placeholder="Enter address" />
        </View>

        <View style={checkoutPageStyles.formSection}>
          <Text style={checkoutPageStyles.sectionTitle}>
            Where can we call you?
          </Text>

          <MainInput placeholder="Enter number" />
        </View>

        <CheckoutTotal store={productsStore} />

        <MainButton
          text="Pay cash"
          method={() => router.push("/order-successful")}
        />
      </View>
    </View>
  );
};

export default CheckoutPage;
