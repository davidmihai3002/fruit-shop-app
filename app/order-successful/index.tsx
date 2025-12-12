import MainButton from "@/components/shared/MainButton";
import { ProductsStoreType } from "@/lib/stores/ProductsStore";
import { orderSuccessfulPageStyles } from "@/lib/styles/pages/OrderSuccessfulPageStyles";
import { observer } from "mobx-react-lite";
import React from "react";
import { Image, Text, View } from "react-native";
import successfulOrder from "../../assets/images/sucessful-order.png";

const OrderSuccessfulPage = observer(
  ({ store }: { store: ProductsStoreType }) => {
    const order = store.orderNow;
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

        <MainButton text="Go to dashboard" method={order} />
      </View>
    );
  }
);

export default OrderSuccessfulPage;
