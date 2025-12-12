import MainButton from "@/components/shared/MainButton";
import { productsStore } from "@/lib/stores/ProductsStore";
import { orderSuccessfulPageStyles } from "@/lib/styles/pages/OrderSuccessfulPageStyles";
import { useRouter } from "expo-router";
import { observer } from "mobx-react-lite";
import React from "react";
import { Image, Text, View } from "react-native";
import successfulOrder from "../../assets/images/sucessful-order.png";

const OrderSuccessfulPage = observer(() => {
  const order = productsStore.orderNow;
  const router = useRouter();
  return (
    <View style={orderSuccessfulPageStyles.container}>
      <Image
        source={successfulOrder}
        style={orderSuccessfulPageStyles.successImage}
      />

      <View style={orderSuccessfulPageStyles.textContainer}>
        <Text style={orderSuccessfulPageStyles.congratsText}>
          Congratulations!
        </Text>
        <Text style={orderSuccessfulPageStyles.messageText}>
          Your order has been placed and is being attended to. We&apos;ll
          contact you shortly.
        </Text>
      </View>

      <MainButton
        text="Go to dashboard"
        method={() => {
          order();
          router.push("/dashboard");
        }}
      />
    </View>
  );
});

export default OrderSuccessfulPage;
