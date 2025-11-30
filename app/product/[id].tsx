import GoBackButton from '@/components/shared/GoBackButton';
import MainButton from '@/components/shared/MainButton';
import { FruitDish } from '@/hard-coded/hardCodedValues';
import { useProducts } from '@/lib/hooks/useProducts';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Heart, Minus, Plus } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import dish3 from "../../assets/images/dish3.png";

// TODO: Fix styling

// TODO: add functionality

// TODO: move each component to separate file

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
        paddingBottom: 16,
        gap: 20
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 500
        }}>{product?.dishName}</Text>

        <QtyModifier price={product?.dishPrice ?? 0} initialQty={product?.qty ?? 1}/>

        <Separator/>

        <ProductDescription ingredients={product?.ingredients ?? "No ingredients provided"} description={product?.description ?? "No description provided"}/>

        <ProductPageActionButtons/>

      </View>
    </View>
  )
}

export const QtyModifier = ({price, initialQty}: {price: number , initialQty: number}) => {
  const [quantity, setQuantity] = useState<number>(initialQty)
  return <View style={{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
    <View style={{
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  }}> 

    <Minus onPress={()=>setQuantity(prev => prev -= 1)}/>
    <Text>{quantity}</Text>
    <Plus onPress={()=>setQuantity(prev => prev += 1)}/>

    </View>

    <Text style={{
      fontSize: 24,
      fontWeight: 500
    }}>${price * quantity}</Text>

  </View>
}

export const Separator = () => {
  return <View style={{
    width: "100%",
    backgroundColor: "#FFA451",
    height: 1
  }}></View>
}

export const ProductDescription = ({ingredients, description}: {ingredients: string, description: string}) => {
  return <View style={{
    width: "100%",
          gap: 20

    
  }}>

    <View style={{
      gap: 5
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 600
      }}>This Dish Contains:</Text>
      <Text style={{
        fontSize: 18,
        fontWeight: 300
      }}>{ingredients}</Text>

    </View>

    <Separator/>

    <View style={{
      gap: 5
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 600
      }}>Description:</Text>
      <Text style={{
        fontSize: 18,
        fontWeight: 300
      }}>{description}</Text>
    </View>

  </View>
}

export const ProductPageActionButtons = () => {

  const [isClicked, setIsClicked] = useState<boolean>(false);

  return <TouchableOpacity activeOpacity={1} style={{
    flexDirection: "row",
    width: "100%",
     justifyContent: "space-between"
  }} onPress={() => setIsClicked(prev => !prev)}>
    <View style={{
      padding: 15,
      borderRadius: 50,
      backgroundColor: "#FFF7F0"
    }}>
      <Heart color={"#FFA451"} fill={isClicked ? "#FFA451" : "transparent"}/>
    </View>
    <View style={{
      width: 200
    }}>
      <MainButton text="Add to basket"/>
    </View>
  </TouchableOpacity>
}


export default ProductPage
