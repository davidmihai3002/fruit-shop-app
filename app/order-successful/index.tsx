import MainButton from '@/components/shared/MainButton'
import { useProducts } from '@/lib/hooks/useProducts'
import React from 'react'
import { Image, Text, View } from 'react-native'
import successfulOrder from "../../assets/images/sucessful-order.png"

const OrderSuccessfulPage = () => {
    const {orderNow} = useProducts()
  return (
    <View style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
        paddingHorizontal: 24
    }}>
        <Image source={successfulOrder} style={{
            width: 164,
            height: 164
        }}/>

        <View style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 25
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 500
            }}>Congratulations!</Text>
            <Text style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: 300
            }}>Your order has been placed and is being attended to. We'll contact you shortly.</Text>

        </View>

        <MainButton text='Go to dashboard' method={orderNow}/>
        
    </View>
  )
}

export default OrderSuccessfulPage
