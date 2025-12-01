import CartHeader from "@/components/cart/CartHeader";
import MainButton from "@/components/shared/MainButton";
import MainInput from "@/components/shared/MainInput";
import { useProducts } from "@/lib/hooks/useProducts";
import { checkoutPageStyles } from "@/lib/styles/pages/CheckoutPageStyles";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const CheckoutPage = () => {
  const router = useRouter();

  const { cartTotal } = useProducts();

  const orderTotal = cartTotal();

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

        <Text style={checkoutPageStyles.totalText}>
          {"Total: $" + orderTotal}
        </Text>

        <MainButton
          text="Pay cash"
          method={() => router.push("/order-successful")}
        />
      </View>
    </View>
  );
};

export default CheckoutPage;
