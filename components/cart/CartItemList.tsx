import { ProductsStoreType } from "@/lib/stores/ProductsStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { ScrollView } from "react-native";
import { IndividualCartItem } from "./IndividualCartItem";

const CartItemList = observer(({ store }: { store: ProductsStoreType }) => {
  const cart = store.cartItems;
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
