import { useProducts } from '@/lib/hooks/useProducts'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import MainButton from '../shared/MainButton'

const CartTotalAndButton = () => {
    const router = useRouter();
    const {cartTotal} = useProducts()

    const cartTotalValue = cartTotal();
  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        gap: 24,
        justifyContent: "space-between",
        paddingHorizontal: 24,
        alignItems: "flex-start",
        paddingTop: 24,
        backgroundColor: "white",
        height: 150,
    }}>

        <View style={{
            gap: 5
        }}>
            <Text style={{
                fontWeight: 500
            }}>Total</Text>
            <Text style={{
                fontWeight: 600,
                fontSize: 20
            }}>${cartTotalValue}</Text>
        </View>

        

        <View style={{
            width: 200
        }}>
            <MainButton text='Checkout' method={()=> router.push("/checkout")}/>
        </View>
        
    </View>
  )
}

export default CartTotalAndButton
