import { cartStore } from "@/lib/stores/CartStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { ScrollView } from "react-native";
import { IndividualCartItem } from "./IndividualCartItem";

const CartItemList = observer(() => {
  const cart = cartStore.cartItems;
  return (
    <ScrollView>
      {cart.map((product) => (
        <IndividualCartItem
          key={product.id}
          bgColor={product.bgColor}
          name={product.dishName}
          quantity={product.qty}
          price={product.dishPrice}
          productId={product.id}
        />
      ))}
    </ScrollView>
  );
});
export default CartItemList;
