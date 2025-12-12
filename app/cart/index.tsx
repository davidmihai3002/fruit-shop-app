import CartHeader from "@/components/cart/CartHeader";
import CartItemList from "@/components/cart/CartItemList";
import CartTotalAndButton from "@/components/cart/CartTotalAndButton";
import NoCartItems from "@/components/cart/NoCartItems";
import { productsStore, ProductsStoreType } from "@/lib/stores/ProductsStore";
import { cartPageStyles } from "@/lib/styles/pages/CartPageStyles";
import { observer } from "mobx-react-lite";
import React from "react";
import { View } from "react-native";

const CartPage = observer((store: ProductsStoreType) => {
  const cartItemsLength = store.cartLength;
  return (
    <View style={cartPageStyles.container}>
      <CartHeader title="My Basket" />
      {cartItemsLength > 0 && <CartItemList store={productsStore} />}
      {cartItemsLength > 0 && <CartTotalAndButton store={productsStore} />}
      {cartItemsLength === 0 && <NoCartItems />}
    </View>
  );
});

export default CartPage;
