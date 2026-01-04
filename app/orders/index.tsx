import { ordersStore } from "@/lib/stores/OrdersStore";
import React from "react";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View>
      {ordersStore.orders.length > 0 &&
        ordersStore.orders.map((order) => (
          <Text key={order.id}>
            {order.name} , {order.phoneNumber} , {order.address} ,{" "}
            {order.orderedProducts
              .map((product) => product.dishName)
              .join(", ")}
          </Text>
        ))}
      {ordersStore.orders.length === 0 && <Text>No orders yet!</Text>}
    </View>
  );
};

export default index;
