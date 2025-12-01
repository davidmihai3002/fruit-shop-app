import { useProducts } from '@/lib/hooks/useProducts';
import { useRouter } from 'expo-router';
import { Heart, Plus } from 'lucide-react-native';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

const ProductCard = ({dishId, isFavorite , imgSrc , title , price , bgColor , hideFavoriteIcon = false}: {dishId: number, isFavorite: boolean, imgSrc: ImageSourcePropType , title : string , price: number , bgColor?: string , hideFavoriteIcon?: boolean}) => {
    const router = useRouter();
    const {addToCart , addToFavorite} = useProducts();
  return (
    <TouchableOpacity activeOpacity={1} style={{
        width: 152,
        height: 183,
        borderRadius: 18,
        elevation: 1,
        position: "relative",
        backgroundColor: bgColor ? bgColor : "white",
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginRight: 24
    }} onPress={() => {
            router.push({
                pathname: '/product/[id]',
                params: { id: dishId },
            });
    }}>
        {!hideFavoriteIcon && <Heart style={{
            position: "absolute",
            right: 7,
            top: 7,
            
        }} fill={isFavorite ? "#FFA451" : "transparent"} color={"#FFA451"} onPress={()=>addToFavorite(dishId)}/>}

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
                <TouchableOpacity activeOpacity={1} style={{
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    backgroundColor: "#FFF2E7",
                    alignItems: "center",
                    justifyContent: "center"
                }} onPress={()=>addToCart(dishId)}><Plus size={20} color={"#FFA451"}/></TouchableOpacity>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

export default ProductCard
