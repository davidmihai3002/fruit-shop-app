import { productDescriptionStyles } from "@/lib/styles/products/ProductDescriptionStyles"
import { ProductDescriptionProps } from "@/lib/types/components/products"
import { ScrollView, Text, View } from "react-native"
import { Separator } from "../shared/Separator"

export const ProductDescription = ({ingredients, description}: ProductDescriptionProps) => {
  return <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={productDescriptionStyles.scrollViewContent}>

    <View style={productDescriptionStyles.section}>
      <Text style={productDescriptionStyles.sectionTitle}>This Dish Contains:</Text>
      <Text style={productDescriptionStyles.sectionText}>{ingredients}</Text>

    </View>

    <Separator/>

    <View style={productDescriptionStyles.section}>
      <Text style={productDescriptionStyles.sectionTitle}>Description:</Text>
      <Text style={productDescriptionStyles.sectionText}>{description}</Text>
    </View>

  </ScrollView>
}