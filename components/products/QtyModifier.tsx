import { Minus, Plus } from "lucide-react-native"
import { useState } from "react"
import { Text, View } from "react-native"

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
    justifyContent: "space-between",
    alignItems: "center"
  }}> 

      <View style={{
      padding: 8,
      borderRadius: 50,
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "black"
    }}>
        <Minus onPress={()=>{
          if (quantity === 1) {
            setQuantity(1)
          } else{
            setQuantity(prev => prev -= 1)
          }
        }}/>
      </View>

      <Text style={{
        fontSize: 20,
        fontWeight: 500
      }}>{quantity}</Text>

      <View style={{
      padding: 10,
      borderRadius: 50,
      backgroundColor: "#FFF7F0"
    }}>
        <Plus color={"#FFA451"} onPress={()=>setQuantity(prev => prev += 1)}/>
      </View>

    </View>

    <Text style={{
      fontSize: 24,
      fontWeight: 500,
      color: "#FFA451"
    }}>${price * quantity}</Text>

  </View>
}