import { useProducts } from "@/lib/hooks/useProducts";
import { productPageActionButtonsStyles } from "@/lib/styles/products/ProductPageActionButtonsStyles";
import { ProductPageActionButtonsProps } from "@/lib/types/components/products";
import { TouchableOpacity, View } from "react-native";
import AddToFavoriteButton from "../shared/AddToFavoriteButton";
import MainButton from "../shared/MainButton";

export const ProductPageActionButtons = ({productId, productQty , isFavorite}: ProductPageActionButtonsProps) => {

  const {addToCart , addToFavorite , products} = useProducts()
  const product = products?.find(p => p.id === productId);


  return <TouchableOpacity activeOpacity={1} style={productPageActionButtonsStyles.container} onPress={() => addToFavorite(productId)}>
    <AddToFavoriteButton isFavorite={product?.isFavorite!} productId={product?.id!}/>
    <View style={productPageActionButtonsStyles.buttonWrapper}>
      <MainButton text="Add to basket" method={()=> addToCart(productId, productQty)}/>
    </View>
  </TouchableOpacity>
}