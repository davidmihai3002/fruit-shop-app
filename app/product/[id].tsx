import { ProductDescription } from '@/components/products/ProductDescription';
import { ProductPageActionButtons } from '@/components/products/ProductPageActionButtons';
import { QtyModifier } from '@/components/products/QtyModifier';
import GoBackButton from '@/components/shared/GoBackButton';
import { Separator } from '@/components/shared/Separator';
import { FruitDish } from '@/hard-coded/hardCodedValues';
import { useProducts } from '@/lib/hooks/useProducts';
import { useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import dish3 from "../../assets/images/dish3.png";

const ProductPage = () => {
  const {id} = useLocalSearchParams();
  const [product, setProduct] = useState<FruitDish | null>(null);
  const [quantity, setQuantity] = useState<number>(product?.qty ?? 1)
  const {products} = useProducts();

  const increaseQuantity = useCallback(()=>{
    setQuantity(prev => prev + 1)
  }, [])

  const decreaseQuantity = useCallback(()=>{
    setQuantity(prev => {
      if (prev === 1) return prev;
      return prev - 1;
    })
  }, [])

  useEffect(()=>{
    const chosenProduct = products?.find(product => product.id === Number(id))
    setProduct(chosenProduct!)
  }, [])
  
  return (
    <View style={{
        backgroundColor: "#FFA451",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 100,
        position: "relative"
    }}>
      <GoBackButton style={{
        position: "absolute",
        left: 10,
        top: 50,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingRight: 8,
        paddingVertical: 6,
        backgroundColor: "white",
        borderRadius: 20 
      }}/>
      <Image source={dish3} style={{
        width: 176,
        height: 176
      }}/>
      <View style={{
        backgroundColor: "white",
        height: "65%",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 76,
        gap: 20
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 500
        }}>{product?.dishName}</Text>

        <QtyModifier price={product?.dishPrice ?? 0} quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>

        <Separator/>

        <ProductDescription ingredients={product?.ingredients ?? "No ingredients provided"} description={product?.description ?? "No description provided"}/>

        <ProductPageActionButtons productId={Number(id)} productQty={quantity} isFavorite={product?.isFavorite!}/>

      </View>
    </View>
  )
}

export default ProductPage
