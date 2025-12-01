import CartHeader from '@/components/cart/CartHeader';
import CartItemList from '@/components/cart/CartItemList';
import CartTotalAndButton from '@/components/cart/CartTotalAndButton';
import NoCartItems from '@/components/cart/NoCartItems';
import { useProducts } from '@/lib/hooks/useProducts';
import React from 'react';
import { View } from 'react-native';

const CartPage = () => {

    const {cartItems} = useProducts();
  return (
    <View style={{
        height: "100%",
    }}>
    <CartHeader title='My Basket'/>
    {cartItems.length > 0 && <CartItemList/>}
    {cartItems.length > 0 && <CartTotalAndButton/>}
    {cartItems.length === 0 && <NoCartItems/>}
    </View>
  )
}

export default CartPage
