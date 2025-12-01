import CartHeader from "@/components/cart/CartHeader";
import MainButton from "@/components/shared/MainButton";
import MainInput from "@/components/shared/MainInput";
import { FruitDish } from "@/hard-coded/hardCodedValues";
import { useProducts } from "@/lib/hooks/useProducts";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

// TODO: Add separate file for types and interfaces

export interface OrderProps {
  name: string;
  address: string;
  phoneNumber: number;
  orderedProducts: FruitDish[];
}

const CheckoutPage = () => {
  const router = useRouter();

  const { cartTotal } = useProducts();

  const orderTotal = cartTotal();

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <CartHeader title="Checkout"/>

      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 30,
          gap: 30,
        }}
      >
        <View
          style={{
            gap: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Where can we deliver your meals?
          </Text>
          <MainInput placeholder="Enter address" />
        </View>

        <View
          style={{
            gap: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Where can we call you?
          </Text>

          <MainInput placeholder="Enter number" />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
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
