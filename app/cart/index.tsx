import CartItemList from '@/components/cart/CartItemList';
import CartTotalAndButton from '@/components/cart/CartTotalAndButton';
import GoBackButton from '@/components/shared/GoBackButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

// TODO: Add view for empty cart

const CartPage = () => {
    const router = useRouter();
  return (
    <View style={{
        height: "100%",
        // paddingBottom: 70
    }}>
        <View style={{
            flexDirection: "row",
            paddingHorizontal: 24,
            justifyContent: "center",
            position: "relative",
            paddingTop: 70,
            height: 135,
            backgroundColor: "#FFA451"
        }}>
            <GoBackButton method={()=>router.push("/dashboard")} style={{
                top: 70,
                left: 24,
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            paddingRight: 8,
            paddingVertical: 6,
            backgroundColor: "white",
            borderRadius: 20 
        }}/>

        <Text style={{
            color: "white",
            fontSize: 24
        }}>My Basket</Text>
    </View>
    <CartItemList/>
    <CartTotalAndButton/>
    </View>
  )
}

export default CartPage
