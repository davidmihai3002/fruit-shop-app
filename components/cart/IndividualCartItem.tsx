import { Image, Text, View } from "react-native"
import dish3 from "../../assets/images/dish3.png"

// TODO: Add multiple items to cart functionality
// TODO: Create add to cart function inside products context to use in all necessary components
// TODO: Add "to favorite function and actually change favorite status"
// TODO: Add notifications context and update it when you add to cart or update favorite status
// TODO: Add cart checkout button along with total order price

export const IndividualCartItem = ({name, quantity , price}: {name: string, quantity: number , price: number}) => {
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
                backgroundColor: "white",
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
                <Text>{quantity + " packs"}</Text>

            </View>

        </View>

        <Text style={{
            fontSize: 20,
            fontWeight: 500
            // color: "#FFA451"
        }}>${price * quantity}</Text>
    </View>
}
