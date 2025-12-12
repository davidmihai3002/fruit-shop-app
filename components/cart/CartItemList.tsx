import { productsStore } from "@/lib/stores/ProductsStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { ScrollView } from "react-native";
import { IndividualCartItem } from "./IndividualCartItem";

const CartItemList = observer(() => {
  const cart = productsStore.cartItems;
  return (
    <ScrollView>
      {cart.map((product) => (
        <IndividualCartItem
          key={product.id}
          bgColor={product.bgColor}
          name={product.dishName}
          quantity={product.qty}
          price={product.dishPrice}
        />
      ))}
    </ScrollView>
  );
});
export default CartItemList;
