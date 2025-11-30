import { useProducts } from '@/lib/hooks/useProducts'
import React from 'react'
import { ScrollView } from 'react-native'
import { IndividualCartItem } from './IndividualCartItem'

const CartItemList = () => {
    const {cartItems} = useProducts();
  return (
    <ScrollView>
        {
            cartItems.map(product => <IndividualCartItem key={product.id} name={product.dishName} quantity={product.qty} price = {product.dishPrice}/>)
        }
    </ScrollView>
  )
}
export default CartItemList
