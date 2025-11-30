import { Heart } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import MainButton from "../shared/MainButton";

export const ProductPageActionButtons = () => {

  const [isClicked, setIsClicked] = useState<boolean>(false);

  return <TouchableOpacity activeOpacity={1} style={{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // elevation: 9
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