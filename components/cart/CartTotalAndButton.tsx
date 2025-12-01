import { useProducts } from '@/lib/hooks/useProducts'
import { cartTotalAndButtonStyles } from '@/lib/styles/cart/CartTotalAndButtonStyles'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import MainButton from '../shared/MainButton'

const CartTotalAndButton = () => {
    const router = useRouter();
    const {cartTotal} = useProducts()

    const cartTotalValue = cartTotal();
  return (
    <View style={cartTotalAndButtonStyles.container}>

        <View style={cartTotalAndButtonStyles.totalSection}>
            <Text style={cartTotalAndButtonStyles.totalLabel}>Total</Text>
            <Text style={cartTotalAndButtonStyles.totalValue}>${cartTotalValue}</Text>
        </View>

        

        <View style={cartTotalAndButtonStyles.buttonWrapper}>
            <MainButton text='Checkout' method={()=> router.push("/checkout")}/>
        </View>
        
    </View>
  )
}

export default CartTotalAndButton
