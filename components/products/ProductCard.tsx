import { Heart, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { Image, ImageSourcePropType, Text, View } from "react-native";


const ProductCard = ({isFavorite , imgSrc , title , price}: {isFavorite: boolean, imgSrc: ImageSourcePropType , title : string , price: number}) => {

    const [isFavorited, setIsFavorited] = useState<boolean>(isFavorite);

  return (
    <View style={{
        width: 152,
        height: 183,
        borderRadius: 18,
        elevation: 1,
        position: "relative",
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 16
    }}>
        <Heart style={{
            position: "absolute",
            right: 7,
            top: 7,
            
        }} fill={isFavorite ? "#FFA451" : "transparent"} color={"#FFA451"} onPress={()=>setIsFavorited(prev => !prev)}/>

        <View style={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            gap: 5
        }}>
            <Image source={imgSrc} style={{}}/>
            <Text style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12
                }}>{title}</Text>
            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Text style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#FFA451",
                    fontSize: 18
                }}>${price}</Text>
                <View style={{
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    backgroundColor: "#FFF2E7",
                    alignItems: "center",
                    justifyContent: "center"
                }}><Plus size={20} color={"#FFA451"}/></View>
            </View>
        </View>
        
    </View>
  )
}

export default ProductCard
