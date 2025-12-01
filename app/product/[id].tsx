import { ProductDescription } from '@/components/products/ProductDescription';
import { ProductPageActionButtons } from '@/components/products/ProductPageActionButtons';
import { QtyModifier } from '@/components/products/QtyModifier';
import GoBackButton from '@/components/shared/GoBackButton';
import { Separator } from '@/components/shared/Separator';
import { FruitDish } from '@/hard-coded/hardCodedValues';
import { useProducts } from '@/lib/hooks/useProducts';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import dish3 from "../../assets/images/dish3.png";

// TODO: Make it so that the QtyModifier changes the actual qty, and gets passed to the cart page when you add an item to the cart

const ProductPage = () => {
  const {id} = useLocalSearchParams();
  const [product, setProduct] = useState<FruitDish | null>(null);
  const {products} = useProducts();
  const router = useRouter();

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
      <GoBackButton method={()=>router.push("/dashboard")} style={{
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

        <QtyModifier price={product?.dishPrice ?? 0} initialQty={product?.qty ?? 1}/>

        <Separator/>

        <ProductDescription ingredients={product?.ingredients ?? "No ingredients provided"} description={product?.description ?? "No description provided"}/>

        <ProductPageActionButtons productId={Number(id)}/>

      </View>
    </View>
  )
}

export default ProductPage
