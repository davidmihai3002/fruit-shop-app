import { Image, Text, View } from "react-native"
import dish3 from "../../assets/images/dish3.png"

// TODO: Add to favorite function and actually change favorite status
// TODO: Add notifications context and update it when you add to cart or update favorite status

export const IndividualCartItem = ({name, quantity , price , bgColor}: {name: string, quantity: number , price: number , bgColor?: string}) => {
    return <View style={{
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30,
    }}>
        <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        alignItems: "center",
        gap: 15
        }}>
            <View style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                backgroundColor: bgColor ? bgColor : "white",
                alignItems: "center",
                justifyContent: "center",
                elevation: 2
            }}>
                <Image source={dish3} style={{
                    width: 40,
                    height: 40,
                }}/>
            </View>
            <View>
                <Text style={{
            fontSize: 18,
            fontWeight: 500
            // color: "#FFA451"
        }}>{name}</Text>
                <Text>{quantity + (quantity === 1 ? " pack" : " packs")}</Text>

            </View>

        </View>

        <Text style={{
            fontSize: 20,
            fontWeight: 500
            // color: "#FFA451"
        }}>${price * quantity}</Text>
    </View>
}
