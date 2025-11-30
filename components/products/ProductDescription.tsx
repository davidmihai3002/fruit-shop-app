import { ScrollView, Text, View } from "react-native"
import { Separator } from "../shared/Separator"

export const ProductDescription = ({ingredients, description}: {ingredients: string, description: string}) => {
  return <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
    width: "100%",
    gap: 20,
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

  </ScrollView>
}