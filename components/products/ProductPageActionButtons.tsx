import { useProducts } from "@/lib/hooks/useProducts";
import { TouchableOpacity, View } from "react-native";
import AddToFavoriteButton from "../shared/AddToFavoriteButton";
import MainButton from "../shared/MainButton";

export const ProductPageActionButtons = ({productId, productQty , isFavorite}: {productId: number, productQty: number , isFavorite: boolean}) => {

  const {addToCart , addToFavorite , products} = useProducts()
  const product = products?.find(p => p.id === productId);


  return <TouchableOpacity activeOpacity={1} style={{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // elevation: 9
  }} onPress={() => addToFavorite(productId)}>
    <AddToFavoriteButton isFavorite={product?.isFavorite!} productId={product?.id!}/>
    <View style={{
      width: 200
    }}>
      <MainButton text="Add to basket" method={()=> addToCart(productId, productQty)}/>
    </View>
  </TouchableOpacity>
}