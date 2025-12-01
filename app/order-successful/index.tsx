import MainButton from '@/components/shared/MainButton'
import { useProducts } from '@/lib/hooks/useProducts'
import { orderSuccessfulPageStyles } from '@/lib/styles/pages/OrderSuccessfulPageStyles'
import React from 'react'
import { Image, Text, View } from 'react-native'
import successfulOrder from "../../assets/images/sucessful-order.png"

const OrderSuccessfulPage = () => {
    const {orderNow} = useProducts()
  return (
    <View style={orderSuccessfulPageStyles.container}>
        <Image source={successfulOrder} style={orderSuccessfulPageStyles.successImage}/>

        <View style={orderSuccessfulPageStyles.textContainer}>
            <Text style={orderSuccessfulPageStyles.congratsText}>Congratulations!</Text>
            <Text style={orderSuccessfulPageStyles.messageText}>Your order has been placed and is being attended to. We'll contact you shortly.</Text>

        </View>

        <MainButton text='Go to dashboard' method={orderNow}/>
        
    </View>
  )
}

export default OrderSuccessfulPage
