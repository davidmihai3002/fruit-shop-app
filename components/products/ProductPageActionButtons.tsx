import { productsStore } from "@/lib/stores/ProductsStore";
import { productPageActionButtonsStyles } from "@/lib/styles/products/ProductPageActionButtonsStyles";
import { ProductPageActionButtonsProps } from "@/lib/types/components/products";
import { observer } from "mobx-react-lite";
import { View } from "react-native";
import AddToFavoriteButton from "../shared/AddToFavoriteButton";
import MainButton from "../shared/MainButton";

export const ProductPageActionButtons = observer(
  ({ productId, productQty, isFavorite }: ProductPageActionButtonsProps) => {
    return (
      <View style={productPageActionButtonsStyles.container}>
        <AddToFavoriteButton isFavorite={isFavorite} productId={productId} />
        <View style={productPageActionButtonsStyles.buttonWrapper}>
          <MainButton
            text="Add to basket"
            method={() => productsStore.addToCart(productId, productQty)}
          />
        </View>
      </View>
    );
  }
);
